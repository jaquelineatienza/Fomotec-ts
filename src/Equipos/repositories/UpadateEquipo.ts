import { Equipos } from "Equipos/types/EquiposTypes";

export interface IUpdateEquipo {
    updateEquipo(id: any, idUser: string, equipo: Partial<Equipos>): Promise<Equipos | null>
}