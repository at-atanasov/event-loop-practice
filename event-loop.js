const fs = require("fs");
const crypto = require("crypto");

const start = Date.now();
// the bellow didn't work here for Windows. Had to be defines in the packaje.json start script
//process.env.UV_THREADPOOL_SIZE = 4; // this is how we change the number ot threads of the threadpool

setTimeout(() => console.log("Timer 1 finished!"), 0);
setImmediate(() => console.log("Immediate 1 finished!"));

fs.readFile("test-file.txt", () => {
  console.log("I/O finished");
  console.log("-----------------------------------------");
  // The below run in the event loop
  setTimeout(() => console.log("Timer 2 finished!"), 0);
  setTimeout(() => console.log("Timer 3 finished!"), 3000);
  setImmediate(() => console.log("Immediate 2 finished!")); //executed once per tick

  process.nextTick(() => console.log("process.nextick")); // executed immediately

  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password encrypted");
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password encrypted");
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password encrypted");
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password encrypted");
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password encrypted");
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password encrypted");
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password encrypted");
  });
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, "Password encrypted");
  });
  //   crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512", () => { //synchronous version
  //     console.log(Date.now() - start, "Password encrypted");
  //   });
});

console.log("Hello from the top-level code!");
