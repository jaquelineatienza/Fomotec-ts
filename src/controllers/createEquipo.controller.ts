import { ICreateEquipo } from "@repositories/createEquipo";
import { CrearEquiposService } from "@services/createEquipo.Service";
import { CreateEquipo } from "mongoRepository/EquiposMongo.repository";
import { Equipos } from "types/EquiposTypes";
import { Request, Response } from "express";


const equipoRepoMongo: ICreateEquipo = new CreateEquipo();
const createEquipoService = new CrearEquiposService(equipoRepoMongo);

export const createEquipoController = async (req: Request, res: Response) => {
    try {
        const equipo = req.body as Equipos;

        if (equipo.necesidad) {

        }
        if (equipo.fechaIngreso) {

        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'the internal server error', error })
    }
}