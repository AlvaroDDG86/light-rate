import axios from "axios"
import { API } from "../shared/constants"

class HttpService {
    /**
     * 
     * @param {*} startDate 
     * @param {*} endDate 
     * @returns axios promise
     */
    getRates(startDate: String, endDate: String) {
        return axios.get(`${API}?start_date=${startDate}&end_date=${endDate}&time_trunc=hour`)
    }
}

export default new HttpService();