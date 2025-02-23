# GraphQL API avec NestJS

Ce projet est une API GraphQL utilisant NestJS, TypeORM et PostgreSQL. Il permet de gérer des informations sur les animaux de compagnie (pets) via des endpoints REST et GraphQL.

## Prérequis

- Node.js (version 14 ou supérieure)
- PostgreSQL
- npm ou yarn

## Installation

1. Installez les dépendances avec npm ou yarn.
2. Configurez votre base de données PostgreSQL et modifiez les informations d'authentification dans le fichier de configuration.
3. Lancez le serveur de développement avec la commande `npm run start:dev`.

## Fonctionnalités

- **GraphQL** : Interrogez les données via des requêtes et mutations GraphQL.
- **REST API** : Expose les endpoints classiques (GET, POST, PUT, DELETE) pour gérer les animaux de compagnie.
  
## Endpoints

### REST API

- `GET /pets` : Récupérer tous les animaux.
- `GET /pets/{id}` : Récupérer un animal par son ID.
- `POST /pets` : Créer un nouvel animal.
- `PUT /pets/{id}` : Mettre à jour un animal existant.
- `DELETE /pets/{id}` : Supprimer un animal.

### GraphQL

- **Query** `pets` : Récupérer tous les animaux.
- **Query** `pet(id: Int)` : Récupérer un animal par son ID.
- **Mutation** `createPet(name: String, type: String)` : Créer un nouvel animal.
- **Mutation** `updatePet(id: Int, name: String, type: String)` : Mettre à jour un animal.
- **Mutation** `removePet(id: Int)` : Supprimer un animal.

## Technologies

- **NestJS** : Framework Node.js pour construire des applications backend efficaces et évolutives.
- **GraphQL** : Langage de requête pour l'API.
- **TypeORM** : ORM pour interagir avec la base de données PostgreSQL.
- **PostgreSQL** : Système de gestion de base de données relationnelle.

## Auteurs

- [SANDANIAINA Tsinjo Nantosoa](https://github.com/TsinjoNantosoa)
