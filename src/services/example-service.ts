import exampleRepository from "@/repositories/example-repository"

async function getAllData(){
    const result = await exampleRepository.findAll()
    return result
}

const exampleService = {
    getAllData
}

export default exampleService