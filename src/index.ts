import { startServer } from "./server";

(async () => {
  await startServer(3000);
  console.log("Server started");
})();
