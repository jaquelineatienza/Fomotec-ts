import { Request, Response } from "express";
import { RegisterMongo } from "users/mongoRepository/UserMongo.Repository";
import { IRegisterRepository } from "users/repositories/regirter.repositoty";
import { Register } from "users/Services/Regiter.service";
import { IUser } from "users/types/UserType";





const registerMongo: IRegisterRepository = new RegisterMongo()
const registerService = new Register(registerMongo)


export const registro = async (req: Request, res: Response) => {
    try {
        const user: IUser = req.body
        const result = await registerService.createUser(user);
        if (!result) {
            res.status(304).json({ msg: 'the user not creadet' })
        }
        console.log(result)
        res.status(200).json({ msg: 'the user', result })
    } catch (error) {
        res.status(500).json({ msg: 'the internal server error' })
    }
}