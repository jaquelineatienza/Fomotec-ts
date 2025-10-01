import { Equipos } from "types/EquiposTypes";


export interface ICreateEquipo {
    createEquipo(equipo: Equipos): Promise<Equipos>
}