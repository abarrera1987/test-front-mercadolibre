import axios from "axios"
import { url_api } from "../environment/environment"

export class Services {
	static itemsList = async (item: string) => {
		const url = `${url_api}api/getItems?q=${item}`
		return await axios.get(url)
	}

	static getItem = async (id: string) => {
		const url = `${url_api}api/getItem/${id}`
		return await axios.get(url)
	}
}

