const express = require("express")
const app = express()
const port = process.env.PORT || 4000
const User = require("./user/model")
app.listen(port, () => {
	console.log(`listening on port ${port}`)
})
