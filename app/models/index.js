//importing modules
const {Sequelize, DataTypes} = require('sequelize')

//Database connection with dialect of postgres specifying the database we are using
//port for my database is 5433
//database name is Abbie
const sequelize = new Sequelize(`postgres://postgres:123456@localhost:5433/Abbie`, {dialect: "postgres"})

//checking if connection is done
    sequelize.authenticate().then(() => {
        console.log(`Database connected to Abbie`)
    }).catch((err) => {
        console.log(err)
    })

    const db = {}
    db.Sequelize = Sequelize
    db.sequelize = sequelize

//connecting to model
db.ROLES = ["user", "admin", "moderator"];
db.users = require('./userModel') (sequelize, DataTypes)

//exporting the module
module.exports = db