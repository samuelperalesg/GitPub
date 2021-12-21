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
  res.render("drinks_index.ejs", {
    allDrinks: drinks
  })
})

app.get("/drinks/:indexOfDrinksArray", (req, res) => {
  res.render("drinks_show.ejs", {
    drink: drinks[req.params.indexOfDrinksArray],
    title: `${drinks [req.params.indexOfDrinksArray].name} Show Page`
  })
})

// tell the app to listen for requests
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})