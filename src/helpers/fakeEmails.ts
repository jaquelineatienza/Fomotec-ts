import { CreateAdminToken } from "TokenAdmin/MongoRepository/TokenAdminMongo"
import { programarEliminacionDeToken } from "./DeleteAutomaticToken"

export async function fakeEmail(email: string) {
    console.log(`to: ${email}`)
    console.log("from:Formotec")
    const newToken = new CreateAdminToken()
    const token = await newToken.createAdminToken()
    console.log("Token de admicion", token.token)

    programarEliminacionDeToken(token.token, 30000)
}