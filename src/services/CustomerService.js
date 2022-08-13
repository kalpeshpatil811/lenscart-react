import axios from "axios";

const Customer_API_BASE_URL = "http://localhost:9091/lenscart/";

class CustomerService {
	login(customer) {
		return axios.post(Customer_API_BASE_URL+"login",customer);
	}

	addCustomer(customer) {
		return axios.post(Customer_API_BASE_URL+"customer", customer);
	}

	// Logout() {
	// 	return axios.get(Customer_API_BASE_URL + "/logout");
	// }

	// getByCustomerName(customerName) {
	// 	return axios.get(Customer_API_BASE_URL + "/customer" + customerName);
	// }
}

export default new CustomerService();
