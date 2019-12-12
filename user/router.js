const { Router } = require("express")
const bcrypt = require("bcrypt")
const User = require("./model")
const router = new Router()

router.post("/users", async (req, res, next) => {
	try {
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
