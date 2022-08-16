import axios from "axios";

const Glass_API_BASE_URL = "http://localhost:9091/lenscart/glass";
 
class GlassService{
    getAllGlass() {
		return axios.get(Glass_API_BASE_URL);
	}

	addGlass(glass) {
		return axios.post(Glass_API_BASE_URL, glass);
	}

	updateGlass(glass) {
		return axios.put(Glass_API_BASE_URL, glass);
	}

	getGlassById(glassId) {
		return axios.get(Glass_API_BASE_URL + "/" + glassId);
	}

	deleteGlass(glassId) {
		return axios.delete(Glass_API_BASE_URL + "/" + glassId);
	}

}
export default new GlassService();