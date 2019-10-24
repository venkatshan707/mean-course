/* console.log("Hello World");
const http=require('http');
const app=require('./backend/app');
const port =process.env.PORT||3000;

 // Now I want use app as a listener for incomming requests
 //For that i creating server and simply passing app as argument
 app.set('port',port);
 const server= http.createServer(app);

//One important thing is i want say to express on which port I am working.thats done by app.set('port',port)
//set()-setting configuration for app

//  const server= http.createServer((req,res)=>{
//   res.end("This is my first response");
// });

server.listen( port);
*/
const app = require("./backend/app");// Importing app
const debug = require("debug")("node-angular");
const http = require("http");// Importing http package


/*This normalised port function that simply makes sure that, when we try to set up a port and essentially
  (when we receive through an environment variable ) we actually make sure it's a valid number(port number) or not if we want to use that.*/
const normalizePort = val => {
  var port = parseInt(val, 10);


  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};



/*I got onError function here , it's simply check which type of error occured  */
const onError = error => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};



/*I got onListening function which is stored in this constant. An arrow function,
 Where we essentially just output or where we log that we are now listening to incoming requests */
const onListening = () => {
  const addr = server.address();
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  debug("Listening on " + bind);
};


/*And here I am setting up a port calling that normalized port function   and then still accessing
processess and port or setting for thousands of value here as a string */
/*here i am using 3000 as string because of we getting String as input to port*/
const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);// setting port to my express app

const server = http.createServer(app);// we setup that node server
server.on("error", onError);// Register for errors (That may occur(Error handler))
server.on("listening", onListening);//Register for  Listener for listener
server.listen(port);
