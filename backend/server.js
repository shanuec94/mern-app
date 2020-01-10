const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');        // mongoose is connected to database

require('dotenv').config();                 // envirnoment variables in the DMV file 

const app = express();                      // Create our express server and port
const port = process.env.PORT || 5000;

app.use(cors());                             // cores middleware 
app.use(express.json());                     // server is sending and receving json

const uri = process.env.ATLAS_URI;            // database uri and set the environment variable
mongoose.connect(uri, {useNewUrlParser: true,
useCreateIndex: true}
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const exercisesRouter = require('./routes/exercises');  // require the files 
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);                  // use the files
app.use('/users', usersRouter);

app.listen(port, () => {                    // start the server 
    console.log(`Server is running on port: ${port}`);
});