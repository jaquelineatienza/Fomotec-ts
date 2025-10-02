import { IUser } from "users/types/UserType";


export interface IRegisterRepository {
    createUser(user: IUser): Promise<IUser>
}