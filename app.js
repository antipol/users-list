const path = require("path")

const express = require("express");
const bodyParser = require("body-parser");

const usersRoutes = require("./routes/users")
const usersData = require("./routes/add-user");

const app = express();

//Set templating engine to ejs
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")))

app.use(usersRoutes);

app.use(usersData.routes);


app.listen(3000)