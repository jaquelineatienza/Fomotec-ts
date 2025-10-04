import { RegisterAdminMongo } from "users/mongoRepository/UserMongo.Repository";
import { IRegisterRepoAdmin } from "users/repositories/regirter.repositoty";
import { Register } from "users/Services/Regiter.service";
import { IAdmin } from "users/types/UserType";
import { Request, Response } from "express";




const registerMongo: IRegisterRepoAdmin = new RegisterAdminMongo()
const registerService = new Register(registerMongo)


export const RegisterAmdmins = async (req: Request, res: Response) => {
    try {
        const user: IAdmin = req.body

        const result = await registerService.createUser(user);
        if (!result) {
            res.status(304).json({ msg: 'the user not creadet' })
        }
        console.log(result)
        res.status(200).json({ msg: 'the user', result })
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'the internal server error' })
    }

}
