import connections from "@config/db"
import express from "express"
import morgan from "morgan"


const app = express()
app.use(morgan("dev"))
app.use(express.json())

app.listen(3000, async () => {
    console.log('the server is runing in the port ')
    await connections();
})