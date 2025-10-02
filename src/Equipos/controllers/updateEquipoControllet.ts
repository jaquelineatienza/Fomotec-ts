import { UpdateEquipo } from "Equipos/mongoRepository/EquiposMongo.repository";
import { IUpdateEquipo } from "Equipos/repositories/UpadateEquipo";
import { UpdateEquipoService } from "Equipos/services/updateEquipo.Service";
import { Equipos } from "Equipos/types/EquiposTypes";
import { Request, Response } from "express";


const updateEquipoMongo: IUpdateEquipo = new UpdateEquipo()
const updateEquipoService = new UpdateEquipoService(updateEquipoMongo)


export const updateEquipoController = async (req: Request, res: Response) => {
    try {
        const equipo: Equipos = req.body
        const { id } = req.params

        const result = await updateEquipoService.updateEquipo(id, equipo)
        if (!result) {
            res.status(304).json({ msg: 'the equipo not update' })
        }
        res.status(200).json({ msg: 'the equipo update succesfull' })
    } catch (error) {
        res.status(500).json({ msg: 'the internal server error' })
    }
}
