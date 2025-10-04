import { ICreateEquipo } from "Equipos/repositories/createEquipo";
import { CrearEquiposService } from "Equipos/services/createEquipo.Service";
import { CreateEquipo } from "Equipos/mongoRepository/EquiposMongo.repository";
import { Equipos } from "Equipos/types/EquiposTypes";
import { Request, Response } from "express";
import { EquipoValidations } from "helpers/validations/equipo.validations";


const equipoRepoMongo: ICreateEquipo = new CreateEquipo();
const createEquipoService = new CrearEquiposService(equipoRepoMongo);

export const createEquipoController = async (req: Request, res: Response) => {
    try {
        const equipo: Equipos = req.body;

        EquipoValidations(equipo)

        const result = await createEquipoService.createEquipo(equipo)
        if (!result) {
            res.status(304).json({ msg: 'the equipo no created' })
        }
        res.status(201).json({ msg: 'the equipo created successfull' })

    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'the internal server error', error })
    }
}
