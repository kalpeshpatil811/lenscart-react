import axios from 'axios';

const FRAME_API_BASE_URL = "http://localhost:9091/lenscart/frame";

class FrameService {

	getAllFrames() {
		return axios.get(FRAME_API_BASE_URL);
	}

	addFrame(frame) {
		return axios.post(FRAME_API_BASE_URL, frame);
	}

	updateFrame(frame) {
		return axios.put(FRAME_API_BASE_URL, frame);
	}

	getFrameById(frameId) {
		return axios.get(FRAME_API_BASE_URL + "/" + frameId);
	}

	deleteFrame(frameId) {
		return axios.delete(FRAME_API_BASE_URL + "/" + frameId);
	}
}

export default new FrameService();