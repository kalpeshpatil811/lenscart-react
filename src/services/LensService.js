import axios from "axios";

const Lens_API_BASE_URL = "http://localhost:9091/lenscart/lenses";

class LensService {
	getAllLens() {
		return axios.get(Lens_API_BASE_URL);
	}

	createLens(lens) {
		return axios.post(Lens_API_BASE_URL, lens);
	}

	updateLens(lens) {
		return axios.put(Lens_API_BASE_URL, lens);
	}

	getLensById(lensId) {
		return axios.get(Lens_API_BASE_URL + "/" + lensId);
	}

	deleteLens(lensId) {
		return axios.delete(Lens_API_BASE_URL + "/" + lensId);
	}
}

export default new LensService();