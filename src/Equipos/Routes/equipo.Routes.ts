
import { createEquipoController } from "Equipos/controllers/createEquipo.controller";
import { deleteEquipoController } from "Equipos/controllers/deleteEquipoControllet";
import { findEquipoByIDController, findEquiposControllers } from "Equipos/controllers/findEquipo.Controller";
import { updateEquipoController } from "Equipos/controllers/updateEquipoControllet";
import { Router } from "express";


export const equipoRoutes = Router()


// equipoRoutes.get("/allEquipos", findEquiposControllers);
// equipoRoutes.get("/equipos/:id", findEquipoByIDController)
// equipoRoutes.post("/createEquipo", createEquipoController)
// equipoRoutes.put('/update/:id', updateEquipoController)
// equipoRoutes.delete("/delete/:id", deleteEquipoController)