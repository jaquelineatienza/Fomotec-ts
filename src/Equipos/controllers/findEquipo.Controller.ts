import { ID } from "@config/id.type";
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
        const id = req.params.id
        const result = await findEquipoService.findEquipoByID(id)
        res.status(200).json({ msg: 'the equipo', result })
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}
export const findEquipoByUserID = async (req: Request, res: Response) => {
    try {
        const idUser = req.session.user?.id;
        const result = await findEquipoService.findEquipoByUserID(idUser)
        if (!result) {
            res.status(404).json({ msg: 'The user does not have equipment in their charge' })
        }
        res.status(200).json({ msg: 'the equipment', result })
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });

    }
}