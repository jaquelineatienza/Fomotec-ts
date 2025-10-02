export interface Equipos {
    _id: any;
    readonly name: string;
    readonly type: string;
    readonly Ram: string;
    fechaEntrega: Date;
    readonly motivo: "distribucion" | "mantenimiento";
    readonly necesidad?: string;
    readonly fechaIngreso?: Date;
}