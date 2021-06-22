import axios from "axios"
import { API } from "../shared/constants"

export const HttpService = {
    /**
     * 
     * @param {*} startDate 
     * @param {*} endDate 
     * @returns axios promise
     */
    getRates(startDate, endDate) {
        return axios.get(`${API}?start_date=${startDate}&end_date=${endDate}&time_trunc=hour`)
    }
}