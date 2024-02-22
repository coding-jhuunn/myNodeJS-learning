const express = require("express");
const app = express();

// use this express.static to build your static routes files
app.use(express.static("public"));

//middle where that allow access the information coming from the true;
app.use(express.urlencoded({ extended: true }));

//use json in your routes
app.use(express.json());

app.set("view engine", "ejs");
// state your middlewares function before all the routes if you want to use it in all your
// app.use(logger);

//pass your middlewares function as a param in routes that only you want

//to get on a route
// app.get("/", logger, (req, res) => {
//    to send to the user to download server
//      res.download("server.js");
//   sent status code as response
//      res.status(500);

//    res.render will automatically look html in views folder
//    use ejs as a view engine to your htmls files
//    second parameter is the object you wnat to render
//   res.render("index");
// });
// import the side router for users
const userRouter = require("./routes/users");

// as a side router for only the users section
app.use("/users", userRouter);

//this function is an example of middleware
function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

//listen to server on port
app.listen(3000);
