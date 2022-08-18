import axios from "axios";

const CART_API_BASE_URL = "http://localhost:9091/lenscart/cart";

class CartService {
	getAllCartItems() {
		return axios.get(CART_API_BASE_URL);
	}

	addToCart(cart) {
		return axios.post(CART_API_BASE_URL, cart);
	}

	getAllCartItemsByCustomerId(custId) {
		return axios.get(CART_API_BASE_URL + "/" + custId);
	}

	removeFromCart(itemId) {
		return axios.delete(CART_API_BASE_URL + "/" + itemId);
	}

	removeAllBycustomerId(custId) {
		return axios.delete(CART_API_BASE_URL + "/c/" + custId);
	}
}

export default new CartService();
