const express = require("express")
const app = express()
const port = process.env.PORT || 4000
const User = require("./user/model")
const Joke = require("./joke/model")
const jokes = app.listen(port, () => {
	console.log(`listening on port ${port}`)
})
