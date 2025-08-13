// Import required modules
const express = require('express');
const cors = require('cors');

// Create an Express app & assigning the variable app to express
const app = express();

//setting up your port
const PORT = process.env.PORT || 8080

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Define a simple test route
app.get('/', (req, res) => {
  res.send('Hey Abbie, Server is up and running!');
});

//listening to server connection
app.listen(PORT, () => console.log(`Server is connected on ${PORT}`))