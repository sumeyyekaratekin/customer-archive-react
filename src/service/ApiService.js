import axios from 'axios';

const CUSTOMER_API_BASE_URL = 'http://localhost:8080/customers';

class ApiService {

    fetchCustomers() {
        return axios.get(CUSTOMER_API_BASE_URL);
    }

    fetchCustomerById(id) {
        return axios.get(CUSTOMER_API_BASE_URL + '/' + id);
    }

    deleteCustomer(id) {
        return axios.delete(CUSTOMER_API_BASE_URL + '/' + id);
    }

    addCustomer(customer) {
        return axios.post(""+CUSTOMER_API_BASE_URL, customer);
    }

    editCustomer(customer) {
        return axios.put(CUSTOMER_API_BASE_URL + '/' + customer.id, customer);
    }

}

export default new ApiService();