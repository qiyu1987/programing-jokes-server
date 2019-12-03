const Sequelize = require("sequelize")
const db = require("../db")
const Joke = db.define("joke", {
	setup: Sequelize.STRING,
	punchline: Sequelize.STRING
})
module.exports = Joke
