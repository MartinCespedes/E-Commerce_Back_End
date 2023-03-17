## Object-Relational Mapping (ORM) E-Commerce Back End

- [Live Demo](https://drive.google.com/file/d/1EF2ruLfLVADquC9gUSsbWieEUHMKMo-v/view)

- ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
- ![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
- ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## Contents

[Description](#description)

[User Story](#user-story)

[Acceptance Criteria](#acceptance-criteria)

[Installation](#installation)

[Usage](#usage)

[Resources & Credit](#resourcescredit)

[Features](#features)

[Application Screenshot Preview](#application-screenshot-preview)

## Description

- Internet retail, also known as e-commerce, is the largest sector of the electronics industry, having generated an estimated US$29 trillion in 2017 (Source: United Nations Conference on Trade and Development). E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes. Due to the prevalence of these platforms, developers should understand the fundamental architecture of e-commerce sites.

- My task is to build the back end for an e-commerce site. I will be using Express.js API and configure it to use Sequelize to interact with a MySQL database.

### User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

### Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```

## Installation

1. Cloning the Repository

- First, clone the repository containing the functional Express.js API:

```
git clone <repository-url>
cd <repository-folder>
```

2. Setting up Environment Variables

- Create a .env file in the root of the project folder and add your MySQL database credentials:

```
DB_NAME=<your-database-name>
DB_USER=<your-mysql-username>
DB_PASSWORD=<your-mysql-password>
```

- This will enable you to connect to the database using Sequelize.

## Usage

1. Creating and Seeding the Development Database

- Install the required dependencies:

```
npm install
```

2. Run the schema and seed commands & start the server with:

```
npm run seed
npm start
```

3. Testing API GET Routes

- Open API GET routes in Insomnia (or any API client of your choice) for categories, products, or tags:

```
GET http://localhost:3001/api/categories
GET http://localhost:3001/api/products
GET http://localhost:3001/api/tags

```

- The data for each of these routes will be displayed in a formatted JSON.

4. Testing API POST, PUT, and DELETE Routes:

- Test API POST, PUT, and DELETE routes in Insomnia to create, update, and delete data in your database:

- Categories

```
POST http://localhost:3001/api/categories
PUT http://localhost:3001/api/categories/:id
DELETE http://localhost:3001/api/categories/:id

```

- Products

```
POST http://localhost:3001/api/products
PUT http://localhost:3001/api/products/:id
DELETE http://localhost:3001/api/products/:id

```

- Tags

```
POST http://localhost:3001/api/tags
PUT http://localhost:3001/api/tags/:id
DELETE http://localhost:3001/api/tags/:id

```

## Resources/Credit

- Starter Code Provided by UM Bootcamp
- Author: Martin Cespedes - [Link to my Github](https://github.com/MartinCespedes)

## Features

- Express.js
- MySQL
- Sequelize
- JavaScript

## Application Screenshot Preview (Insomnia)

![E-Commerce_SQL](./images/E-Commerce_IMG1.png)

##

![E-Commerce_SQL](./images/E-Commerce_IMG2.png)

## License

![License](https://img.shields.io/badge/License-MIT-yellow.svg)

Copyright (c) 2023 Martin Cespedes. All rights reserved.
