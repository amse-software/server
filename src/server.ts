import express, { Express, Router } from "express";

export async function startServer(port: number): Promise<void> {
  const app = express();

  await expressListen(app, port);
}

function getRouter(): Router {
  var router = express.Router();

  return router;
}

function expressListen(app: Express, port: number): Promise<void> {
  return new Promise((resolve, reject) => {
    app.listen(port, () => {
      resolve();
    });
  });
}
