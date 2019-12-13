const express = require("express")
const app = express()
const port = process.env.PORT || 4000
// const request = require("superagent")
const User = require("./user/model")
const Joke = require("./joke/model")
const jokeRouter = require("./joke/router")
const userRouter = require("./user/router")
const authRouter = require("./auth/router")

const bodyPaser = require("body-parser")
const jsonParser = bodyPaser.json()

const cors = require("cors")
const corsMiddleware = cors()
// request
// 	.get("https://official-joke-api.appspot.com/jokes/programming/ten")
// 	.then(res => {
// 		const jokePromise = Joke.bulkCreate(res.body)
// 	})
app
	.use(corsMiddleware)
	.use(jsonParser)
	.use(jokeRouter)
	.use(userRouter)
	.use(authRouter)
	.listen(port, () => {
		console.log(`listening on port ${port}`)
	})
