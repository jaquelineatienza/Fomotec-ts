import { FindEquipo } from "Equipos/mongoRepository/EquiposMongo.repository";
import { IFindEquipo } from "Equipos/repositories/FindEquipo";
import { FindEquiposService } from "Equipos/services/findEquipos.Service";
import { Request, Response } from "express";

const findEquipoMongo: IFindEquipo = new FindEquipo()
const findEquipoService = new FindEquiposService(findEquipoMongo)


export const findEquiposControllers = async (req: Request, res: Response) => {
    try {
        const result = await findEquipoService.findEquipos()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}
export const findEquipoByIDController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const result = await findEquipoService.findEquipoByID(id)
        res.status(200).json({ msg: 'the equipo', result })
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}