export interface Equipos {
    readonly type: string;
    readonly Ram: number;
    readonly Modelo: string;
    readonly fechaEntrega: Date;
    readonly motivo: "distribucion" | "mantenimiento";
    readonly price: number;
    readonly encargado?: string;
    readonly mejora?: string
}