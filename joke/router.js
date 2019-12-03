const { Router } = require("express")
const Sequelize = require("sequelize")
const Joke = require("./model")
const router = new Router()
router.get("/jokes/random", async (req, res, next) => {
	try {
		const joke = await Joke.findOne({ order: Sequelize.literal("random()") })
		if (joke) {
			res.json(joke)
		} else {
			res.status(404).end()
		}
	} catch (err) {
		next(err)
	}
})
router.post("/jokes", async (req, res, next) => {
	try {
		const joke = await Joke.create(req.body)
		if (joke) {
			res.json(joke).status(201)
		} else {
			res.status(404).end()
		}
	} catch (err) {
		next(err)
	}
})
module.exports = router
