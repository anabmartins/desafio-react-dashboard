import axios from 'axios'

export const getDatabase = async () => {
    try {
        const response = await axios.get('http://localhost:8090/medicos');
        return response
    } catch (error) {
        return null
    }
}