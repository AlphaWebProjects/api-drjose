import { prisma } from "@/config"
import { userBody } from "@/schemas/auth-schema"
import { UserRole } from "@prisma/client"

async function findUniqueAdmin(){
    const result = await prisma.user.findFirst({
        where: {
            role: UserRole.ADMIN
        }
    })
    return result
}

async function findUniqueByEmail(email: string){
    const result = await prisma.user.findUnique({
        where: {
            email: email
        }
    })
    return result
}

async function insertUser(body: Omit<userBody, "id">){
    const result = await prisma.user.findUnique({
        where: {
            email: body.email,
            name: body.name,
            password: body.password,
            role: body.role,
        }
    })
    return result
}

async function insertSession(body: {id: number, token: string}){
    const result = await prisma.session.findUnique({
        where: {
            id: body.id,
            token: body.token
        }
    })
    return result
}

async function findAllUsers(){
    const result = await prisma.user.findMany({
        where: {
            role: UserRole.USER
        }
    })
    return result
}
const authRepository = {
    findUniqueAdmin,
    findUniqueByEmail,
    insertUser,
    insertSession,
    findAllUsers
}

export default authRepository