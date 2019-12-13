const db = require("./db")
const User = require("./user/model")
const bcrypt = require("bcrypt")
db.sync({ force: true })
	.then(() => {
		console.log("databse connected")
	})
	.then(async () => {
		const userList = [
			{ username: "x", password: bcrypt.hashSync("x", 10) },
			{ username: "y", password: bcrypt.hashSync("y", 10) }
		]
		await User.bulkCreate(userList)
	})
	.catch(console.error)
