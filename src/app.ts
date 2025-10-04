import connections from "@config/db"
import { authRoutes } from "auth/routes/auth.routes"
import { equipoRoutes } from "Equipos/Routes/equipo.Routes"
import express from "express"
import { programarEliminacionDeToken } from "helpers/DeleteAutomaticToken"
import { fakeEmail } from "helpers/fakeEmails"
import morgan from "morgan"
import { CreateAdminToken, DeleteTokenAdmin, FindTokenAdminMongo } from "TokenAdmin/MongoRepository/TokenAdminMongo"
import { userRoutes } from "users/routes/user.routes"


const app = express()

app.use(morgan("dev"))
app.use(express.json())
app.use("/api", equipoRoutes)
// app.use("/api", userRoutes)
// app.use("/api", authRoutes)
app.listen(3000, async () => {
    console.log('the server is runing in the port ')
    await connections();
})