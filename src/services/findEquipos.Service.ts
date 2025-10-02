import { IFindEquipo } from "@repositories/FindEquipo";
import { Equipos } from "types/EquiposTypes";

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
}