const { Router } = require("express")
const { toJWT } = require("./jwt")
const User = require("../user/model")
const bcrypt = require("bcrypt")

const router = new Router()

router.post("/logins", async (req, res, next) => {
	try {
		const user = await User.findOne({
			where: {
				username: req.body.username
			}
		})
		if (!user) {
			res.status(400).send({
				message: "Invalid username or password"
			})
			return
		}
		// 2. use bcrypt.compareSync to check the password against the stored hash
		if (bcrypt.compareSync(req.body.password, user.password)) {
			// 3. if the password is correct, return a JWT with the userId of the user (user.id)
			res.send({
				jwt: toJWT({ userId: user.id })
			})
		} else {
			res.status(400).send({
				message: "Invalid username or password"
			})
		}
	} catch (err) {
		next(err)
	}
})

module.exports = router
