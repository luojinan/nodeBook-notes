

// var server = require("./server");
// server.start(router.route);


// es6的解构赋值
var {start} = require("./server");
var {route} = require("./router");

start(route);




