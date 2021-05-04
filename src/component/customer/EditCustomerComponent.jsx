import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class EditCustomerComponent extends Component {

    constructor(props){
        super(props);
        this.state ={
            id: '',
            name: '',
            email: '',
            phoneNumber: '',
        }
        this.saveCustomer = this.saveCustomer.bind(this);
        this.loadCustomer = this.loadCustomer.bind(this);
    }

    componentDidMount() {
        this.loadCustomer();
    }

    loadCustomer() {
        ApiService.fetchCustomerById(window.localStorage.getItem("id"))
            .then((res) => {
                let customer = res.data;
                this.setState({
                id: customer.id,
                name: customer.name,
                email: customer.email,
                phoneNumber: customer.phoneNumber,
                })
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    saveCustomer = (e) => {
        e.preventDefault();
        let customer = {id: this.state.id, 
            name: this.state.name, 
            email: this.state.email, 
            phoneNumber: this.state.phoneNumber};

        ApiService.editCustomer(customer)
            .then(res => {
                this.setState({message : 'Customer added successfully.'});
                this.props.history.push('/customers');
            });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Edit Customer</h2>
                <form>

                    <div className="form-group">
                        <label>Customer Name:</label>
                        <input type="text" placeholder="name" name="name" className="form-control" readonly="true" defaultValue={this.state.name}/>
                    </div>

                    <div className="form-group">
                        <label>Email:</label>
                        <input placeholder="email" name="email" className="form-control" value={this.state.email} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label>PhoneNumber:</label>
                        <input placeholder="phoneNumber" name="phoneNumber" className="form-control" value={this.state.phoneNumber} onChange={this.onChange}/>
                    </div>
                   

         
                    <button className="btn btn-success" onClick={this.saveCustomer}>Save</button>
                </form>
            </div>
        );
    }
}

export default EditCustomerComponent;