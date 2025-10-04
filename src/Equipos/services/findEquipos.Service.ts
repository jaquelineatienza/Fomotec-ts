import { ID } from "@config/id.type";
import { IFindEquipo } from "Equipos/repositories/FindEquipo";
import { Equipos } from "Equipos/types/EquiposTypes";

export class FindEquiposService implements IFindEquipo {
    constructor(
        private readonly equiposRepo: IFindEquipo
    ) { }
    async findEquipos(): Promise<Equipos[]> {
        return await this.equiposRepo.findEquipos()
    }
    async findEquipoByID(id: any): Promise<Equipos | null> {
        return await this.equiposRepo.findEquipoByID(id)
    }

    async findEquipoByUserID(id: any): Promise<Equipos[] | null> {
        return await this.equiposRepo.findEquipoByUserID(id)
    }

}