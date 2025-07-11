import {fastify} from "fastify";
import cors from "@fastify/cors";

const server = fastify({logger: true});
server.register(cors, {
   origin: "*",
   methods: ["GET", "POST", "PUT", "DELETE"]
})

const teams =[
   {id: 1, name: "RedBull"},
   {id: 2, name: "Mercedes"},
   {id: 3, name: "Ferrari"},
]

const drivers = [
   {id: 1, name: "max verstappen", teams: "RedBull"},
   {id: 2, name: "Lewis Hamilton", teams: "Mercedes"},
   {id: 3, name: "Charles Leclerc", teams: "Ferrari"},
   {id: 4, name: "piloto 2", teams: "Ferrari"},
]

server.get("/teams", async (request, response) => {
   
  response.type("application/json").code(200)
  return teams
});

interface DriverQuery {
  team?: string;
}

server.get<{ Querystring: DriverQuery }>("/drivers", async (request, response) => {
const { team }  = request.query

   if (team) {
    const filteredDrivers = drivers.filter(driver =>
       driver.teams.toLowerCase() === team.toLowerCase()
    );
    response.type('application/json').code(200);
    return filteredDrivers;
  } else {
    response.type('application/json').code(200);
    return drivers;
  }
})

interface DriveParams {
   id: string
}

server.get<{Params: DriveParams}>("/drivers/:id", async (request, response) => {
   const id = parseInt(request.params.id);
   response.type("application/json").code(200);
   const driver = drivers.find(team => team.id == id)

   if(!driver){
      response.code(404)
      return {error: "Team not found"}
   } else {
      response.type("application/json").code(200)
      return driver
   }

   
})

interface Driver {
  id: number;
  name: string;
  teams: string;
}
//Representa o que vem na requisição
interface NewDriverBody {
  name: string;
  teams: string;
}
//fala que vai receber uma requisição post com o tipo NewDriverBody
server.post<{ Body: NewDriverBody }>('/drivers', async (request, response) => {
  const { name, teams } = request.body;

  // Simula criação de ID e adiciona ao array
  const newDriver: Driver = {
    id: drivers.length + 1,
    name: name,
    teams: teams
  };

  drivers.push(newDriver);

  response.code(201).send(newDriver);
});




server.listen({port: 3333}, () => {
  console.log("Server running on http://localhost:3333");
});
