const express = require("express")
const app = express()
const port = process.env.PORT || 4000
// const request = require("superagent")
const User = require("./user/model")
const Joke = require("./joke/model")
const jokeRouter = require("./joke/router")

const bodyPaser = require("body-parser")
const jsonParser = bodyPaser.json()
// request
// 	.get("https://official-joke-api.appspot.com/jokes/programming/ten")
// 	.then(res => {
// 		const jokePromise = Joke.bulkCreate(res.body)
// 	})
app.use(jsonParser)
app.use(jokeRouter)
app.listen(port, () => {
	console.log(`listening on port ${port}`)
})
