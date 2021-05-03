import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class AddCustomerComponent extends Component{

    constructor(props){
        super(props);
        this.state ={
            name: '',
            email: '',
            phoneNumber: '',
            message: null
        }
        this.saveCustomer = this.saveCustomer.bind(this);
    }

    saveCustomer = (e) => {
        e.preventDefault();
        let customer = {name: this.state.name, email: this.state.email, phoneNumber: this.state.phoneNumber};
        ApiService.addCustomer(customer)
            .then(res => {
                this.setState({message : 'Customer added successfully.'});
                this.props.history.push('/customers');
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return(
            <div>
                <h2 className="text-center">Add Customer</h2>
                <form>
                <div className="form-group">
                    <label>Customer Name:</label>
                    <input type="text" placeholder="name" name="name" className="form-control" value={this.state.name} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>Email:</label>
                    <input placeholder="Email" name="email" className="form-control" value={this.state.email} onChange={this.onChange}/>
                </div>

                <div className="form-group">
                    <label>phoneNumber:</label>
                    <input placeholder="phoneNumber" name="phoneNumber" className="form-control" value={this.state.phoneNumber} onChange={this.onChange}/>
                </div>

                <button className="btn btn-success" onClick={this.saveCustomer}>Save</button>
            </form>
    </div>
        );
    }
}

export default AddCustomerComponent;