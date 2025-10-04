import connections from "@config/db"
import { authRoutes } from "auth/routes/auth.routes"
import { equipoRoutes } from "Equipos/Routes/equipo.Routes"
import express from "express"
import { fakeEmail } from "helpers/fakeEmails"
import morgan from "morgan"
import session from "express-session"

import { userRoutes } from "users/routes/user.routes"


const app = express()
app.use(
    session({
        secret: "tu_clave_secreta",
        resave: false,
        saveUninitialized: false,
        cookie: {
            secure: false, // poner true solo si usas HTTPS
            maxAge: 3600000,
        },
    })
);


app.use(morgan("dev"))
app.use(express.json())
app.use("/api", equipoRoutes)
app.use("/api", userRoutes)
app.use("/api", authRoutes)

fakeEmail("jaquibatienza@gmail.com")
app.listen(3000, async () => {
    console.log('the server is runing in the port ')
    await connections();
})