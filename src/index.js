import express from'express'

const app = express()

const port = 3000

app.get('/',(req, res) => {
    res.send({msg: 'Hi how are you these is Karina Arevalo!'})
})

app.listen(port)