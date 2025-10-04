import { ID } from "@config/id.type";

export interface IUser {
    id: any
    readonly email: string;
    readonly password: string;
    readonly rol: string;

}