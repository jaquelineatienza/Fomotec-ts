import { Equipos } from "types/EquiposTypes";



export interface FindEquipo {
    findEquipos(): Promise<Equipos[]>
    findEquipoByID(id: any): Promise<Equipos | null>
}