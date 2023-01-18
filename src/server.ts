import express, { Express, Router } from "express";
import * as handlers from "./handlers";

export async function startServer(port: number): Promise<void> {
  const app = express();

  const router = getRouter();

  app.use("/api", router);

  await expressListen(app, port);
}

function getRouter(): Router {
  var router = express.Router();

  router
    .route("/groups")
    .get(handlers.getAllGroups())
    .post(handlers.createGroup());

  router
    .route("/groups/{groupdId}")
    .get(handlers.getGroup())
    .put(handlers.updateGroup())
    .delete(handlers.deleteGroup());

  router.route("/participants").get(handlers.getAllParticipants());

  router
    .route("/participants/{participantId}")
    .get(handlers.getParticipant())
    .put(handlers.updateParticipant())
    .delete(handlers.deleteParticipant());

  router
    .route("/groups/{groupId}/participants")
    .get(handlers.getParticipantsByGroup())
    .post(handlers.createParticipant());

  return router;
}

function expressListen(app: Express, port: number): Promise<void> {
  return new Promise((resolve, reject) => {
    app.listen(port, () => {
      resolve();
    });
  });
}
