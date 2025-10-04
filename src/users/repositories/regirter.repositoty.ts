import { IAdmin } from "users/types/UserType";


export interface IRegisterRepoAdmin {
    createUser(user: IAdmin, token?: string): Promise<IAdmin>
}