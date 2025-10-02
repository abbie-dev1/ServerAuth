// Import required modules
const express = require('express')
const sequelize = require('sequelize')
const dotenv = require('dotenv').config()
const db = require('./models/user.model')
const userRoutes = require ('./Routes/userRoutes')

// Create an Express app & assigning the variable app to express
const app = express();

//setting up your port
const PORT = process.env.PORT || 8080

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


//synchronizing the database and forcing it to false so we dont lose data
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("db has been re sync")
// });

//routes for the user API
app.use('/api/users', userRoutes);

// Define a simple test route
app.get('/', (req, res) => {
  res.send('Hey Abbie, Server is up and running!');
});

//listening to server connection
app.listen(PORT, () => console.log(`Server is connected on ${PORT}`))