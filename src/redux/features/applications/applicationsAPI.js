import axiocInstance from "../../../utilitis/axiocInstance"

export const getApplications = async() =>{
    const response = await axiocInstance.get('/applications')
    return response.data
}