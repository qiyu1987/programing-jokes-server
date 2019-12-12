const { Router } = require("express")
const Sequelize = require("sequelize")
const User = require("./model")
const router = new Router()

router.post("/users", async (req, res, next) => {
	try {
		console.log("post /users request")
		const user = await User.create(req.body)
		res.json(user)
	} catch {
		next
	}
})
module.exports = router
