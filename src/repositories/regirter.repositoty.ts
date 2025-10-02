import { IUser } from "types/UserType";


export interface IRegisterRepository {
    createUser(user: IUser): promise<IUser>
}