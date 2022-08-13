import axios from "axios";

const SUNGLASS_API_BASE_URL = "http://localhost:9091/lenscart/sunglass";

class SunGlassService {
	getAllSunGlasses() {
		return axios.get(SUNGLASS_API_BASE_URL);
	}

	createSunGlass(sunGlass) {
		return axios.post(SUNGLASS_API_BASE_URL, sunGlass);
	}

	updateSunGlass(sunGlass) {
		return axios.put(SUNGLASS_API_BASE_URL, sunGlass);
	}

	getSunGlassById(sunGlassId) {
		return axios.get(SUNGLASS_API_BASE_URL + "/" + sunGlassId);
	}

	deleteSunGlass(sunGlassId) {
		return axios.delete(SUNGLASS_API_BASE_URL + "/" + sunGlassId);
	}
}

export default new SunGlassService();
