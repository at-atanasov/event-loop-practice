console.log(arguments); //така можем да видим аргументите на фукцията в която сме. В случай wrapper функ. за модули.
console.log(require("module").wrapper);

// module.exports
const C = require("./test-module-1");
const calc = new C();
console.log(calc.add(5, 2));

//exports
//const calc2 = require("./test-module-2");
const { add, multiply, divide } = require("./test-module-2");
//console.log(calc2.add(5, 2));
console.log(add(5, 2));

//caching
require("./test-module-3")();
require("./test-module-3")();
require("./test-module-3")();

// Hello from the module!     //the module was only runed once and the code in in was only executed once because of cacheing
// Log this beatiful text!😉
// Log this beatiful text!😉
// Log this beatiful text!😉
