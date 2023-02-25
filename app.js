const express = require('express');
const app = express();
const port = process.env.PORT || 8050;
const products_routes = require('./routers/products');
const connectDB = require('./db/connect');

require("dotenv").config();

app.get('/', (req, res) => {
    res.status(200).send("Hi I am creating a new API.");
})

app.use("/api/products",products_routes);

const start = async (req, res) => {
    try{
        await connectDB(process.env.MONGODB_URL);
        app.listen(port,() => {
            console.log(`Listing through this ${port}`);
        });
    }
    catch(err){
        console.log(err);
    }
};

start();