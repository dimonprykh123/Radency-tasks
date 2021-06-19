const express = require("express")
const router = require("./routes/main")
const app = express()

const _PORT = 5000;

app.use(express.json({extended: true}))
app.use("/notes", router)

function start() {
    app.listen(_PORT, () => {
        console.log("Server started at port : " + _PORT);
    })
}

start()

