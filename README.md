# Family Time: Neo4j Exploration

## Overview

This project is designed as an educational tool for the University Database II course. It aims to provide hands-on experience with the Neo4j graph database, focusing on understanding its structure, query language (Cypher), and potential applications. By integrating a local Neo4j database instance via Docker and implementing a Node.js application, students can explore the fundamentals of graph databases and their differences from traditional relational databases.

## Features

- **Neo4j Database**: Utilizes Neo4j, a leading graph database, to model and query relational data efficiently.
- **Docker Integration**: Includes a Docker Compose file to streamline the setup and use of a local Neo4j database instance.
- **Node.js Application**: Features a Node.js script for populating the Neo4j database with sample data and querying it, demonstrating the database's capabilities and query language.

## Prerequisites

- Docker and Docker Compose
- Node.js and npm

## Setup Instructions

1. **Clone the Repository**

   Begin by cloning the project repository to your local machine.

   ```sh
   git clone https://github.com/LeomaiaJr/Family-Time.git
   ```

2. **Environment Variables**

   Before running the application, you must set up the necessary environment variables. Copy the `.env.example` file to a new file named `.env`, and update the variables to match your Neo4j database credentials and connection details.

   ```sh
   cp .env.example .env
   # Edit .env to include the correct Neo4j credentials
   ```

3. **Starting the Neo4j Database**

   Use Docker Compose to start a local Neo4j database instance. Ensure Docker is running, then execute the following command in the project root directory:

   ```sh
   docker-compose up -d
   ```

   This command starts a Neo4j database accessible at `localhost:7474` (web interface) and `localhost:7687` (Bolt protocol).

4. **Populating the Database**

   Before interacting with the database, populate it with sample data. Run the following command:

   ```sh
   npm run populate
   ```

   This script creates nodes and relationships in the database, setting up a predefined data model for exploration.

5. **Running the Application**

   After populating the database, you can start the main application:

   ```sh
   npm start
   ```

   This command runs predefined queries against the Neo4j database, showcasing various aspects of data modeling and querying in a graph database context.

## Learning Objectives

- Understand the structure and principles of graph databases.
- Learn to model and query data in Neo4j using the Cypher query language.
- Explore the differences and advantages of graph databases over traditional relational databases.

For more detailed information on Neo4j and Cypher, please refer to the [official Neo4j documentation](https://neo4j.com/docs/).

## Contributing

This project is primarily for educational purposes, and contributions are welcome. If you have suggestions for improving the project or educational content, please feel free to submit a pull request or open an issue.
