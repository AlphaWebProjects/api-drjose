
import { AuthenticatedRequest } from "@/middlewares/authentication-middlerare";
import { enrollmentBody } from "@/schemas/enrollment-schema";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function createEnrollment(req: AuthenticatedRequest, res: Response){
    try {        

        //validar com joi

        const {cpf, birthday, phone}: Omit<enrollmentBody, "id"> = req.body
        const { userId } = req

        //verifica se o usuario ainda não possui dados de cadastro

        //cadastra os dados do usuario

        return res.sendStatus(httpStatus.CREATED)
        

    } catch (error) {
        console.log(error)
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}