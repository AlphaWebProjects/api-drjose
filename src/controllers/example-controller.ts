import exampleService from "@/services/example-service";

import { Request, Response } from "express";
import httpStatus from "http-status";

export async function getAllClients(req: Request, res: Response){
    try {        

        // const AllClients = await exampleService.getAllData()

        // return res.send(AllClients).status(httpStatus.OK)
        

    } catch (error) {
        console.log(error)
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}