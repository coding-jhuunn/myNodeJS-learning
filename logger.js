const url = "http://asd.asd";
const EventEmitter = require("events");

class Logger extends EventEmitter {
  log(message) {
    //send an http rqeust
    console.log(message);
    this.emit("messageLogged", { id: 1, url: "http://" });
    //make a noise,produce - signale has happened
  }
}

module.exports = Logger;
