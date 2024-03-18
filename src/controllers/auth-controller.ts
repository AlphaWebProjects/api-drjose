import { AuthenticatedAdminRequest } from "@/middlewares/authenticationAdmin-middlerare";
import { userBody } from "@/schemas/user-schema";
import exampleService from "@/services/example-service";

import { Request, Response } from "express";
import httpStatus from "http-status";

export async function createUser(req: Request, res: Response){
    try {        

        //validar com joi

        const {name, email, password, role}: Omit<userBody, "id"> = req.body

        //se ja tiver 1 admin, nao deve ser possivel ter outro
        
        //verifica se ja possui um email

        //cria o usuario

        return res.sendStatus(httpStatus.CREATED)
        

    } catch (error) {
        console.log(error)
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}

export async function createSession(req: Request, res: Response){
    try {        

        //validar com joi

        const {email, password}: Omit<userBody, "id" | "name" | "role"> = req.body

        //buscar pelo email
        
        //verifica se a senha é valida

        //criar a sessão
        //retorna o token

        const token = "token"

        return res.send(token).status(httpStatus.CREATED)
        

    } catch (error) {
        console.log(error)
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}
export async function getAllUsers(req: AuthenticatedAdminRequest, res: Response){
    try {        
        
        //buscar por todos usuarios com o cargo "USER"

        const allUsers = [""]

        return res.send(allUsers).status(httpStatus.CREATED)
        

    } catch (error) {
        console.log(error)
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}