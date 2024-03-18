import authRepository from "@/repositories/auth-repository"
import enrollmentRepository from "@/repositories/enrollment-repository";
import { userBody } from "@/schemas/auth-schema"
import { enrollmentBody } from "@/schemas/enrollment-schema";
import jwt from "jsonwebtoken";

async function getEnrollmentByUserId(userId: number){
    const result = await enrollmentRepository.findEnrollmentByUserId(userId)
    return result
}

async function createNewEnrollment(body: Omit<enrollmentBody, "id">){
    const result = await enrollmentRepository.insertEnrollment(body)
    return result
}

const enrollmentService = {
    getEnrollmentByUserId,
    createNewEnrollment
}

export default enrollmentService