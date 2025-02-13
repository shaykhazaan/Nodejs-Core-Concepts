const EventEmitter = require("events");

class Emitter extends EventEmitter {}

const myE = new Emitter();

myE.on("foo", () => {
  console.log("An event occurred 1.");
});

myE.on("foo", () => {
  console.log("An event occurred 2.");
});

myE.on("foo", (x) => {
  console.log(`An event with parameter occurred: ${x}`);
});

// bar will emit only once
myE.once("bar", () => {
  console.log("An event bar occurred.");
});

//
myE.emit("foo");
myE.emit("foo", "some text");

myE.emit("bar");
myE.emit("bar");
myE.emit("bar");
myE.emit("bar");
myE.emit("bar");
