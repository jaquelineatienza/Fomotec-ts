import { Equipos } from "Equipos/types/EquiposTypes";

export interface IUpdateEquipo {
    updateEquipo(id: any, equipo: Partial<Equipos>): Promise<Equipos | null>
}