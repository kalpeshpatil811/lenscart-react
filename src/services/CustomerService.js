import axios from "axios";

const Customer_API_BASE_URL = "http://localhost:9091/lenscart/customer";

class CustomerService {
	login(customer) {
		return axios.post(Customer_API_BASE_URL + "/login", customer);
	}

	addCustomer(customer) {
		return axios.post(Customer_API_BASE_URL, customer);
	}

	logout() {
		return axios.get(Customer_API_BASE_URL + "/logout");
	}

	getCustomerById(customerId) {
		return axios.get(Customer_API_BASE_URL + "/" + customerId);
	}

	updateCustomer(customer) {
		return axios.put(Customer_API_BASE_URL, customer)
	}

	deleteCustomerById(customerId) {
		return axios.delete(Customer_API_BASE_URL + "/" + customerId)
	}

	// getByCustomerName(customerName) {
	//  	return axios.get(Customer_API_BASE_URL + "customer/" + customerName);
	//  }
}

export default new CustomerService();
