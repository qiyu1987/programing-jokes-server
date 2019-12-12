const { Router } = require("express")
const Sequelize = require("sequelize")
const bcrypt = require("bcrypt")
const User = require("./model")
const router = new Router()

router.post("/users", async (req, res, next) => {
	try {
		console.log("post /users request")
		const { username, password } = req.body
		await User.create({
			username,
			password: bcrypt.hashSync(password, 10)
		})
		res.status(201).send({ message: "user created successfully!" })
	} catch (err) {
		next(err)
	}
})
module.exports = router
