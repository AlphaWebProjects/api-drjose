import { prisma } from "@/config"
import { userBody } from "@/schemas/auth-schema"
import { enrollmentBody } from "@/schemas/enrollment-schema"
import { UserRole } from "@prisma/client"

async function findEnrollmentByUserId(userId: number){
    const result = await prisma.enrollment.findFirst({
        where: {
            userId: userId
        }
    })
    return result
}

async function insertEnrollment(body: Omit<enrollmentBody, "id">){
    const result = await prisma.enrollment.create({
        data: {
            birthday: body.birthday,
            cpf: body.cpf,
            phone: body.phone,
            userId: body.userId
        }
    })
    return result
}

const enrollmentRepository = {
    findEnrollmentByUserId,
    insertEnrollment
}

export default enrollmentRepository