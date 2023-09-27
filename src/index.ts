import express from "express";
import { ApolloServer } from "apollo-server-express";
import { schema } from "./graphql";

const app = express();
const port = 9000;

const server = new ApolloServer({ schema });

async function startServer() {
  try {
    await server.start();
    server.applyMiddleware({ app, path: '/api' });
    app.listen(port, () => {
      console.log(`[app]: http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Error starting Apollo Server:', error);
  }
}

// Call the startServer function to start the server
startServer();
