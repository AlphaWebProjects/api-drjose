import joi from "joi"

export type exampleBody = {
    id: number,
    nome: string,
    sobrenome: string,
    email: string,
    idade: number,
}

const create = joi.object<Omit<exampleBody, "exampleId">>({
    nome: joi.string().min(3).max(100).required(),
    sobrenome: joi.string().min(3).max(100).required(),
    email: joi.string().email().required(),
    idade: joi.number().min(0).integer().required(),
});

const update = joi.object<exampleBody>({
    id: joi.number().min(0).integer().required(),
    nome: joi.string().min(3).max(100).required(),
    sobrenome: joi.string().min(3).max(100).required(),
    email: joi.string().email().required(),
    idade: joi.number().min(0).integer().required(),
});

const deleteById = joi.object<{id: number}>({
    id: joi.number().min(0).integer().required()
});

const exampleSCHEMA = {
    create,
    update,
    deleteById
}

export {exampleSCHEMA}