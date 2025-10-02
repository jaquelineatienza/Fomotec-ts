import { ICreateEquipo } from "@repositories/createEquipo";
import { Equipos } from "types/EquiposTypes";



export class CrearEquiposService implements ICreateEquipo {
    constructor(
        private readonly createEquipoRepo: ICreateEquipo
    ) {

    }
    async createEquipo(equipo: Equipos): Promise<Equipos> {
        return this.createEquipoRepo.createEquipo(equipo)
    }
}