import { Process } from "./controllers/process.js";
import { logMessage } from "./utils/output.js";

async function startExecution() {
  const process = new Process();
  await process.startProcessing();

  logMessage("Thank You For Your Time");
}

startExecution();
