// const exportsLog = require("./logger");
// exportsLog("nice");

// const path = require("path");

// let pathObj = path.parse(__filename);
// console.log(pathObj);

const EventEmitter = require("events");

// emitter.on("messageLogged", (args) => {
//   console.log("Listener called", args);
// });
//register a listener

const Logger = require("./logger.js");
const logger = new Logger();

logger.on("messageLogged", (args) => {
  console.log("Listener called", args);
});

logger.log("message");
