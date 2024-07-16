const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./dbConnect')
const Ticket = require('./schema')

app.use(cors());

app.use(express.json());

connectDB();
app.use(express.urlencoded({ extended: false }))
app.use("/api",require('./route'));

app.listen(8000, () => {
 console.log("app is listening")
})
