const express = require('express')
const mongoose = require('mongoose');
require("dotenv").config();

const userRoutes = require("./routes/user")

const app = express();
const port = process.env.PORT || 9000;

app.get('/', (req, res) => {
    res.send("Welcome to my API")
})

//middleware
app.use(express.json());
app.use('/api', userRoutes);


//MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("Connected to MongoDB Atlas"))
.catch((error) => console.error(error));

app.listen(port, () => console.log('server listen on port', port));