// import { UserModel } from "users/models/User.Models";
// import { IFindByEmail } from "users/repositories/FindByEmail";
// import { IRegisterRepository } from "users/repositories/regirter.repositoty";
// import { IUser } from "users/types/UserType";

import { UserModel } from "users/models/User.Models";
import { IRegisterRepoAdmin } from "users/repositories/regirter.repositoty";
import { IAdmin } from "users/types/UserType";

export class RegisterAdminMongo implements IRegisterRepoAdmin {
    async createUser(user: IAdmin, token?: string): Promise<IAdmin> {
        const admin = new UserModel(user)
        return await admin.save()
    }
}

// export class findByEmail implements IFindByEmail {
//     async findByEmail(email: string): Promise<IUser | null> {
//         const user = await UserModel.findOne({ email: email })
//         if (!user) {
//             return null
//         }
//         return user
//     }
// }