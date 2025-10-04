import { Router } from "express";
import { createUser } from "users/controllers/crate.Controller";




export const userRoutes = Router()


userRoutes.post("/register", createUser)