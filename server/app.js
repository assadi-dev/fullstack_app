const express = require("express");
const app = express();
const helmet = require("helmet");
const path = require("path");
const cors = require("cors");
const authenticationRoutes = require("./routes/authentication.routes");

//Midlewares

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require("dotenv").config();

//cors config
const corsOptions = {
    origin: "*",
    allowedHeaders: [
        "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization",
    ],
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
};
app.use(cors(corsOptions));

//Sécu en-têtes HTTP
app.use(helmet());

//Routes
app.use("/api/auth", authenticationRoutes);

module.exports = app;