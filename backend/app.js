//I am adding express app and all the files belong to express app here .
//This app.js app holds express app , which is still node js server side app but just taking advantags of express framework (This Done by importing express)features.
const express= require('express');
 //In the above line we got installed exprees

 //We are going to use express by one of the way of Quickly Adding Route
 //Handling request for a singlespecial path only
 //we do it is by creating express app in the below given way
 //

 const app=express();//execuing express package basically or whatever we imported from there
 //we execute it as function and return it as express app.
 //now we can use this express app
 //one Important thing about express app is ,it basically is just a big chain of middlewares, we apply to the incomming requests.
 //As express is like a funnel, every part of a funnel(express) will do something with the request(maipulte , read values from it ,(or) do something with response (like send send response).


 // we will add one middleware here with app and then the use keyword does simply well uses a new middleware on our app and on the incomming request
 //The middleware function (use function), its simplest form  takes a incoming request and that funct  ion takes three arguments(for requst, response,and also next())
 app.use((req,res,next)=>{
    console.log("This is First Middleware");// This prints in command prompt only
    next();// This says to compiler go to next middleware.
 });


// Above four lines are one middleware
// here next function says to compiler see another middlewares after current middleware's execution finished

//This middleware gives(sends) response to client.if compiler not hitting any res.send() method our browser will buffering infinite time for such a time period.
 /* app.use((req,res,next)=>{
    res.send("Hello from Express's Second middleware");
    });
    */

//Now we are registering path with get request
   app.use('/api/posts',(req,res,next)=>{
     const posts=[
       {
         id:'venkat001',
         title:'first title ',
         content:'first msg contentr',},
         {
          id:'venkat002',
          title:'second title ',
          content:'second msg contentr',},
     ];

    return res.status(200).json({
      message:'Got a message successfully',
      posts:posts
    }
      );

    });




//We need to wireup this very simple express app with our server presented in root directory where we are actually listening to incomming requests.
//We want to use this express app as a listener. for making as a listener we need to export this app.
module.exports=app;
//By the above way we need to export our entire app(With all the middlewares(2 middlewares)).
// As we are using const - keyword we cant override these middlewares .
// we need to import this app in server.js
