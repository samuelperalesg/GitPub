// require dependencies
const express = require('express')
const drinks = require("./models/drinks")
const port = 3000


// initialize the express app
const app = express()

// configure server settings

// configure a data source

// mount middleware

// mount routes
app.get("/GitPub/", (req, res) => {
  res.send("Welcome to the GitPub App")
})

app.get("/drinks/", (req, res) => {
  res.render('drinks_index.ejs')
})

// tell the app to listen for requests
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})