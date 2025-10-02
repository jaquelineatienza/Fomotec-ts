import { DelteEquipoMongo } from "Equipos/mongoRepository/EquiposMongo.repository";
import { IDeleteEquipo } from "Equipos/repositories/DeleteEquipo";
import { DeleteEquipoService } from "Equipos/services/deleteEquipo.Service";
import { Request, Response } from "express";

const equipoRepoMongo: IDeleteEquipo = new DelteEquipoMongo()
const deleteEquipoService = new DeleteEquipoService(equipoRepoMongo)

export const deleteEquipoController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = deleteEquipoService.deleteEquipo(id);
        if (!result) {
            res.status(301).json({ msg: 'the equipo not delete' })
        }
        res.status(200).json({ msg: 'the equipo delete succesfull' })
    } catch (error) {
        res.status(500).json({ msg: 'the internal server error' })
    }
}
