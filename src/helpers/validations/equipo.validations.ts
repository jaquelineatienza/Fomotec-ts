// middlewares/validateUser.middleware.ts
import { Request, Response, NextFunction } from "express";
import { equipoZodSchema } from "./schemas/EquipoZoodSchema";

export function validarEquipos(req: Request, res: Response, next: NextFunction) {
    try {
        const parsed = equipoZodSchema.safeParse(req.body);

        if (!parsed.success) {
            console.log(parsed.error);
            return res.status(400).json({
                success: false,
                error: "Datos de equipo inválidos",
                details: parsed.error
            });
        }

        req.body = parsed.data;
        next();
    } catch (error) {
        console.error("Error en validación de equipo:", error);
        return res.status(500).json({
            success: false,
            error: "Error interno en la validación"
        });
    }
}