import { IUpdateEquipo } from "Equipos/repositories/UpadateEquipo";
import { Equipos } from "Equipos/types/EquiposTypes";




export class UpdateEquipoService implements IUpdateEquipo {
    constructor(
        private readonly updateEquipoService: IUpdateEquipo
    ) { }
    async updateEquipo(id: any, equipo: Partial<Equipos>): Promise<Equipos | null> {
        return await this.updateEquipoService.updateEquipo(id, equipo)
    }
}