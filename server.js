const express = require("express");
const morgan = require("morgan");
const Router = require("./routes/user");
const dbConnect = require("./config/db");
const app = express();
dbConnect();
const port = 5000;

//middleware
app.use(express.json());
app.use(morgan("common"));

//routes middleware
app.use("/api/user", Router);

//port
app.listen(port, () => {
  console.log(`backend run at ${port}`);
});
