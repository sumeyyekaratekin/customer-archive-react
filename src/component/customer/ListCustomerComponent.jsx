import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class ListCustomerComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            customers: [],
            message: null
        }
        this.deleteCustomer = this.deleteCustomer.bind(this);
        this.editCustomer = this.editCustomer.bind(this);
        this.addCustomer = this.addCustomer.bind(this);
        this.reloadCustomerList = this.reloadCustomerList.bind(this);
    }

    componentDidMount() {
        this.reloadCustomerList();
    }

    reloadCustomerList() {
        ApiService.fetchCustomers()
            .then((res) => {
                this.setState({customers: res.data.result})
            });
    }

    deleteCustomer(customerId) {
        ApiService.deleteCustomer(customerId)
           .then(res => {
               this.setState({message : 'Customer deleted successfully.'});
               this.setState({customers: this.state.customers.filter(customer => customer.id !== customerId)});
           })

    }

    editCustomer(id) {
        window.localStorage.setItem("customerId", id);
        this.props.history.push('/edit-customer');
    }

    addCustomer() {
        window.localStorage.removeItem("customerId");
        this.props.history.push('/add-customer');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Customer Details</h2>
                <button className="btn btn-danger" style={{width:'100px'}} onClick={() => this.addCustomer()}> Add Customer</button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th className="hidden">Id</th>
                            <th>name</th>
                            <th>email</th>
                            <th>phoneNumber</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.customers.map(
                        customer =>
                                    <tr key={customer.id}>
                                        <td>{customer.name}</td>
                                        <td>{customer.email}</td>
                                        <td>{customer.phoneNumber}</td>
                                        <td>
                                            <button className="btn btn-success" onClick={() => this.deleteCustomer(customer.id)}> Delete</button>
                                            <button className="btn btn-success" onClick={() => this.editCustomer(customer.id)} style={{marginLeft: '20px'}}> Edit</button>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>
        );
    }

}

export default ListCustomerComponent;