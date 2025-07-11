# Fastify F1 API

Este projeto foi desenvolvido como parte do **Bootcamp da Digital Innovation One (DIO)** com o objetivo de praticar a criação de APIs REST utilizando o framework **Fastify** em Node.js.

## 📋 Descrição

A Fastify F1 API simula uma base de dados com **equipes e pilotos de Fórmula 1**, permitindo realizar operações básicas como:

- Listar equipes de F1
- Listar todos os pilotos
- Filtrar pilotos por equipe
- Buscar piloto por ID
- Adicionar um novo piloto

## 🧩 Funcionalidades

- **GET /teams** – Lista todas as equipes cadastradas
- **GET /drivers** – Lista todos os pilotos, com filtro opcional por equipe
- **GET /drivers/:id** – Retorna os dados de um piloto específico
- **POST /drivers** – Permite adicionar um novo piloto à lista

## 🚀 Tecnologias Utilizadas

- Node.js
- Fastify
- @fastify/cors
- Thunder Client ou Postman para testes de requisição

## ℹ️ Observações

- A API utiliza **dados em memória**, ou seja, todas as informações são perdidas ao reiniciar o servidor.
- Ideal para fins de aprendizado, testes rápidos de requisições e demonstração de rotas REST com Fastify.

## 👨‍💻 Autor

Desenvolvido por **Manuel** durante o Bootcamp da DIO, com o intuito de praticar e reforçar conhecimentos em desenvolvimento backend com Node.js.
