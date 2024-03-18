import joi from "joi"

export type userBody = {
    id: number,
    name: string,
    email: string,
    password: string,
    role: UserRole
}

export enum UserRole {
    USER = 'USER',
    ADMIN = 'ADMIN'
}

const createUser = joi.object<Omit<userBody, "id">>({
    name: joi.string().min(3).max(100).required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
    role: joi.string().valid(UserRole.USER, UserRole.ADMIN).required()
});

const createSession = joi.object<Omit<userBody, "role" | "name">>({
    email: joi.string().email().required(),
    password: joi.string().min(6).required()
});

const updateUser = joi.object<Omit<userBody, "role">>({
    id: joi.number().min(0).integer().required(),
    name: joi.string().min(3).max(100).required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).required()
});

const deleteUserById = joi.object<{id: number}>({
    id: joi.number().min(0).integer().required()
});

const authSCHEMA = {
    createUser,
    createSession,
    updateUser,
    deleteUserById
}

export {authSCHEMA}