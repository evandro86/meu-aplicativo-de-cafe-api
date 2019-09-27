const express = require("express");
const nedb = require("nedb");
const rest = require("express-nedb-rest");
const cors = require("cors");

const app = express();

const banco_de_dados = new nedb({
    filename: "meucafeapp.db",
    autoload: true
});

const restAPI = rest();
restAPI.addDatastore('cafes', banco_de_dados);

app.use(cors());
app.use('/', restAPI);

app.listen(3000);