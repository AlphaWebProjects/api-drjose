import { createSession, createUser, getAllUsers } from '@/controllers/auth-controller'
import { authenticateAdminToken } from '@/middlewares/authenticationAdmin-middlerare'
import { Router } from 'express'

const authRouter = Router()

authRouter
    .post("/sign-up", createUser)
    .post("/sign-in", createSession)
    // .put("", )
    // .delete("", )
    .all("/*", authenticateAdminToken)
    .get("/all", getAllUsers)


export { authRouter }