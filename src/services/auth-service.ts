import authRepository from "@/repositories/auth-repository"
import { userBody } from "@/schemas/auth-schema"
import jwt from "jsonwebtoken";

async function getUniqueAdmin(){
    const result = await authRepository.findUniqueAdmin()
    return result
}

async function getUniqueByEmail(email: string){
    const result = await authRepository.findUniqueByEmail(email)
    return result
}

async function createUser(body: Omit<userBody, "id">){
    const result = await authRepository.insertUser(body)
    return result
}

async function createSession(userId: number){
    const token = jwt.sign({ userId: userId }, process.env.JWT_SECRET)
    const result = await authRepository.insertSession({token, id: userId})
    return result
}

async function getAllUsers(){
    const result = await authRepository.findAllUsers()
    return result
}

const authService = {
    getUniqueAdmin,
    getUniqueByEmail,
    createUser,
    createSession,
    getAllUsers
}

export default authService