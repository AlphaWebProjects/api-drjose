import { AuthenticatedAdminRequest } from "@/middlewares/authenticationAdmin-middlerare";
import { UserRole, userBody, authSCHEMA } from "@/schemas/auth-schema";
import authService from "@/services/auth-service";
import bcrypt from 'bcrypt'
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function createUser(req: Request, res: Response){
    try {    
        const isValid = authSCHEMA.createUser.validate(req.body, {abortEarly: false})

        if(isValid.error){
            console.log(isValid.error)
            return res.sendStatus(httpStatus.BAD_REQUEST)
        }

        const {name, email, password, role}: Omit<userBody, "id"> = req.body

        if (role === UserRole.ADMIN){
            const hasAdmin = authService.getUniqueAdmin()
            if (hasAdmin){
                return res.sendStatus(httpStatus.CONFLICT)
            }
        }

        const hasEmail = await authService.getUniqueByEmail(email)

        if (hasEmail){
            return res.sendStatus(httpStatus.CONFLICT)
        }
        
        const userData = await authService.createUser({name, email, password, role})

        return res.sendStatus(httpStatus.CREATED)
        

    } catch (error) {
        console.log(error)
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}

export async function createSession(req: Request, res: Response){
    try {        
        const isValid = authSCHEMA.createSession.validate(req.body, {abortEarly: false})

        if(isValid.error){
            console.log(isValid.error)
            return res.sendStatus(httpStatus.BAD_REQUEST)
        }

        const {email, password}: Omit<userBody, "id" | "name" | "role"> = req.body

        const hasUser = await authService.getUniqueByEmail(email)

        if (!hasUser){
            return res.sendStatus(httpStatus.NOT_FOUND)
        }
        
        const isValidPassword = bcrypt.compareSync(password, hasUser.password)

        if(!isValidPassword){
            return res.sendStatus(httpStatus.UNAUTHORIZED)
        }

        const { token } = await authService.createSession(hasUser.id)

        return res.send(token).status(httpStatus.CREATED)
        

    } catch (error) {
        console.log(error)
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}
export async function getAllUsers(req: AuthenticatedAdminRequest, res: Response){
    try {        
        const allUsers = await authService.getAllUsers()

        return res.send(allUsers).status(httpStatus.CREATED)
        

    } catch (error) {
        console.log(error)
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}