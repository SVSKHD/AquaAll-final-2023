const express = require("express");
const { readdirSync } = require("fs");
const Morgan = require("morgan");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const App = express();
require("dotenv").config();

//middlewares
App.use(express.json());
App.use(express.urlencoded({ extended: true }));
App.use(cookieParser());
App.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp",
  })
);
App.use(Morgan("dev"));

//crm routes
readdirSync("./routes/ecom").map((r) =>
  App.use("/api", require("./routes/ecom/" + r))
);

//api routes
readdirSync("./routes/crm").map((r) =>
  App.use("/crm", require("./routes/crm/" + r))
);

//production error
App.use(productionError);

module.exports = App;
