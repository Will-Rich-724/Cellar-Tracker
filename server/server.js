require("dotenv").config;

const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//config



const app = express();

app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:3000"}));
app.use(express.json());

//routes



app.listen(process.env.DB_PORT, () =>
    console.log(`Listening on port ${process.env.DB_PORT}`));