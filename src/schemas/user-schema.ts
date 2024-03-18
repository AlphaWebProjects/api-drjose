import joi from "joi"

export type userBody = {
    id: number,
    name: string,
    email: string,
    password: number
}

const create = joi.object<Omit<userBody, "id">>({
    name: joi.string().min(3).max(100).required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).required()
});

const update = joi.object<userBody>({
    id: joi.number().min(0).integer().required(),
    name: joi.string().min(3).max(100).required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).required()
});

const deleteById = joi.object<{id: number}>({
    id: joi.number().min(0).integer().required()
});

const userSCHEMA = {
    create,
    update,
    deleteById
}

export {userSCHEMA}