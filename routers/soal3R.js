const express = require("express")
const app = express()

app.use(express.json())

const soal3C = require("../controller/soal3C")

app.get("/convert/decimal/:angka", soal3C.decimal)
app.get("/convert/octal/:angka", soal3C.octal)
app.get("/convert/hexadecimal/:angka", soal3C.hexaDecimal)
app.get("/convert/binary/:angka", soal3C.binary)

module.exports = app