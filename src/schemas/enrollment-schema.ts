import joi from "joi"

export type enrollmentBody = {
    id: number,
    userId: number,
    cpf: string,
    birthday: string,
    phone: string
}

const create = joi.object<Omit<enrollmentBody, "id" | "userId">>({
    cpf: joi.string().required().min(11),
    birthday: joi.string().required(),
    phone: joi.string().required().min(10)
});

const update = joi.object<Omit<enrollmentBody, "userId">>({
    id: joi.number().min(0).integer().required(),
    cpf: joi.string().required().min(11),
    birthday: joi.string().required(),
    phone: joi.string().required().min(10)
});

const deleteById = joi.object<{id: number}>({
    id: joi.number().min(0).integer().required()
});

const enrollmentSCHEMA = {
    create,
    update,
    deleteById
}

export {enrollmentSCHEMA}