import { Router } from "express";
import { registro } from "users/controllers/register.Controller";




export const userRoutes = Router()


userRoutes.post("/register", registro)