require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const helmet = require('helmet')


// require('./model/newProduct');


const app = express();
app.use(helmet())
app.use(express.json({ limit: "50mb" }));






app.get("/welcome", (req, res) => {
  res.status(200).send("Welcome 🙌 ");
});

require('./routes/petRoutes')(app) ;

// This should be the last route else any after it won't work
app.use("*", (req, res) => {
  res.status(404).json({
    success: "false",
    message: "Page not found",
    error: {
      statusCode: 404,
      message: "You reached a route that is not defined on this server",
    },
  });
});

module.exports = app;


