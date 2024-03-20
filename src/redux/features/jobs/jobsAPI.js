import axiocInstance from "../../../utilitis/axiocInstance"

export const getJobs = async() =>{
    const response = await axiocInstance.get('/jobs')
    return response.data
}