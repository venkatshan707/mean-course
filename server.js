console.log("Hello World");
const http=require('http');
const app=require('./backend/app');
const port =process.env.PORT||3000;

 // Now I want use app as a listener for incomming requests
 //For that i creating server and simply passing app as argument
 app.set('port',port);
 const server= http.createServer(app);

//One important thing is i want say to express on which port I am working.thats done by app.set('port',port)
//set()-setting configuration for app

/* const server= http.createServer((req,res)=>{
  res.end("This is my first response");
}); */

server.listen( port);
