# Event User Registration

This project is an Event User Registration System built using Node.js, Express.js, EJS for rendering HTML templates, and MongoDB Atlas for storing user details. The project utilizes the following dependencies:

- **dotenv** (^16.3.1): A module for loading environment variables from a .env file into process.env.
- **ejs** (^3.1.9): A simple templating language that lets you embed JavaScript code within HTML templates.
- **express** (^4.18.2): A fast, unopinionated web framework for Node.js.
- **mongoose** (^7.5.2): An Object Data Modeling (ODM) library for MongoDB and Node.js, which simplifies working with MongoDB databases.
- **nodemon** (^3.0.1): A utility that monitors for changes in your Node.js applications and automatically restarts the server.

## Project Description

The objective of this project is to create a user registration system for events. Users will be able to sign up for events, and their details will be stored in a MongoDB Atlas database. The system will use Express.js with EJS for rendering HTML templates and Mongoose for defining the schema and interacting with the database.

## Project Features

1. **User Registration**: Users can register for events by providing their details, including but not limited to name, email, phone number, and event preferences.

2. **Database Storage**: User details will be stored in a MongoDB Atlas database. Students are responsible for defining the schema and data types for the user data.

3. **Web Interface**: The system will provide a web interface for users to view upcoming events, register for events, and manage their registration information.

4. **Validation**: Implement validation to ensure that user data is entered correctly and securely.

## Set up steps
`npm init -y`
`npm i dotenv ejs express mongoose nodemon`

### env file set up

`MONGODB_URI=your-mongodb-uri
PORT=3000`

### start

`npm start`
