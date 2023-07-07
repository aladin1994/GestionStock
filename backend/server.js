const express=require("express")
const connectDb = require("./config/ConnectDB")
const articleRoutes = require("./routes/ArticleRoute")

const app=express()
const port=7000
app.use(express.json())



connectDb()

app.use("/api/article",articleRoutes)
 


app.listen(port,console.log(`app is ruuning on port ${port}`))