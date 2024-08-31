const express = require('express');
const app = express();
require('dotenv').config()

const port = process.env.PORT || 5000;

const dbConfig = require("./config/dbConfig");

app.listen(port,()=>console.log(`Server is running succesfully running on port ${port}`));