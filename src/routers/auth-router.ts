import { authenticateAdminToken } from '@/middlewares/authenticationAdmin-middlerare'
import { Router } from 'express'

const authRouter = Router()

authRouter
    .post("/sign-up", )
    .post("/sign-in", )
    // .put("", )
    // .delete("", )
    //.all("/*", authenticateAdminToken)
    .get("/all", )


export { authRouter }