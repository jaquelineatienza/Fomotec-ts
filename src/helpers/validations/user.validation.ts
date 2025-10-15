// middlewares/validateUser.middleware.ts
import { Request, Response, NextFunction } from "express";
import { userZodSchema } from "./schemas/userZoodSchema";

export function validarUsuario(req: Request, res: Response, next: NextFunction) {
    try {
        const parsed = userZodSchema.safeParse(req.body);

        if (!parsed.success) {
            console.log(parsed.error);
            return res.status(400).json({
                success: false,
                error: "Datos de usuario inválidos",
                details: parsed.error
            });
        }

        req.body = parsed.data;
        next();
    } catch (error) {
        console.error("Error en validación de usuario:", error);
        return res.status(500).json({
            success: false,
            error: "Error interno en la validación"
        });
    }
}