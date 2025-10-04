
import { createEquipoController } from "Equipos/controllers/createEquipo.controller";
import { deleteEquipoController } from "Equipos/controllers/deleteEquipoControllet";
import { findEquipoByIDController, findEquipoByUserID, findEquiposControllers } from "Equipos/controllers/findEquipo.Controller";
import { updateEquipoController } from "Equipos/controllers/updateEquipoControllet";
import { Router } from "express";
import { validateJWT } from "helpers/validateJWT";
import { validarRol } from "helpers/validateRol";


export const equipoRoutes = Router()


equipoRoutes.get("/allEquipos", validateJWT, findEquiposControllers);
equipoRoutes.get("/equipos/:id", validateJWT,
    findEquipoByIDController)
equipoRoutes.get("/user/equipos", findEquipoByUserID)
equipoRoutes.post("/createEquipo", validateJWT, validarRol("admin"), createEquipoController)
equipoRoutes.put('/update/:id', validateJWT, updateEquipoController)
equipoRoutes.delete("/delete/:id", validateJWT, validarRol("admin"), deleteEquipoController)