const express = require("express")
const app = express()

app.use(express.json())

const soal2C = require("../controller/soal2C")

app.get("/convert/celcius/:celcius", soal2C.celcius)
app.get("/convert/reamur/:reamur", soal2C.reamur)
app.get("/convert/kelvin/:kelvin", soal2C.kelvin)
app.get("/convert/fahrenheit/:fahrenheit", soal2C.fahrenheit)

module.exports = app