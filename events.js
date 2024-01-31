const EventEmitter = require("events");
const http = require("http");

class Sales extends EventEmitter {
  constructor() {
    super(); // we gain access to all the methods of the parent class
  }
}
const myEmitter = new Sales();
myEmitter.on("newSale", () => {
  console.log("Wow! New sale!");
});
myEmitter.on("newSale", () => {
  console.log("Customer name - Atanas");
});

myEmitter.on("newCustomer", (sex) => {
  console.log(`New customer name - Atanas,${sex}`);
});
myEmitter.emit("newSale");

myEmitter.emit("newCustomer", "male"); //with the event we can emmit a variable that we can use as callback function parameter when consu,img the event

//////////////////////////////////////////////////

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request received!");
  res.end("Response send");
});

server.on("request", (req, res) => {
  console.log("Another request");
});

server.on("close", () => {
  console.log("Server closed!");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Waiting for request");
});
