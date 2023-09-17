const express = require("express");
const path = require("path")
require("dotenv").config();
var cookieParser = require('cookie-parser')
const urlRouter = require("./routes/urlRouter")
const staticRouter = require("./routes/staticRouter")
const userRouter = require("./routes/userRouter")

const app = express();
const PORT = process.env.PORT;

app.use(express.json())
app.use(express.urlencoded({extended: false}));
app.use(cookieParser())
app.use(express.static(path.resolve("view")));
app.use('/favicon.ico', (req, res) => {
    res.status(204).end();
});

app.set('view engine', 'ejs');
app.set("views", path.resolve("view"))


app.use("/", staticRouter)
app.use("/u", urlRouter)
app.use("/user",userRouter)

app.listen(PORT,()=>console.log(`server listening at port no:${PORT}`));
