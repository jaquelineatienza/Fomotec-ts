import { Equipos } from "types/EquiposTypes";



export interface IFindEquipo {
    findEquipos(): Promise<Equipos[]>
    findEquipoByID(id: any): Promise<Equipos | null>
}