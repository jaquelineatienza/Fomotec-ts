import { ICreateEquipo } from "Equipos/repositories/createEquipo";
import { Equipos } from "Equipos/types/EquiposTypes";



export class CrearEquiposService implements ICreateEquipo {
    constructor(
        private readonly createEquipoRepo: ICreateEquipo
    ) {

    }
    async createEquipo(equipo: Equipos): Promise<Equipos> {
        return this.createEquipoRepo.createEquipo(equipo)
    }
}