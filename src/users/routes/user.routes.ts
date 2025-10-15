// routes/userRoutes.ts
import { Router } from "express";
import { validateJWT } from "helpers/validateJWT";
import { validarRol } from "helpers/validateRol";
import { validarUsuario } from "helpers/validations/user.validation";
import { createUser } from "users/controllers/createUser.controllers";
import { deleteUserControllers } from "users/controllers/DeleteUser.Controller";
import { getAllUser, getUserByID } from "users/controllers/FindUser.Controller";
import { RegisterAmdmins } from "users/controllers/Register.Controller";
import { updateUserController } from "users/controllers/updateUser.Controller";

export const userRoutes = Router();

userRoutes.post("/register", validarUsuario, RegisterAmdmins);
userRoutes.post("/createUser", validateJWT, validarRol("admin"), validarUsuario, createUser);
userRoutes.put("/updateUser/:id", validateJWT, validarRol("admin"), validarUsuario, updateUserController);
userRoutes.delete("/deleteUser/:id", validateJWT, validarRol("admin"), deleteUserControllers);
userRoutes.get("/allUser", validateJWT, validarRol("admin"), getAllUser);
userRoutes.get("/users/:id", validateJWT, validarRol("admin"), getUserByID);