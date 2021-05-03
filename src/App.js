import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListCustomerComponent from "./component/customer/ListCustomerComponent";
import AddCustomerComponent from "./component/customer/AddCustomerComponent";
import EditCustomerComponent from "./component/customer/EditCustomerComponent";

function App() {
  return (
      <div className="container">
          <Router>
              <div className="col-md-6">
                  <h1 className="text-center" style={style}>React Customer Application</h1>
                  <Switch>
                      <Route path="/" exact component={ListCustomerComponent} />
                      <Route path="/customers" component={ListCustomerComponent} />
                      <Route path="/add-customer" component={AddCustomerComponent} />
                      <Route path="/edit-customer" component={EditCustomerComponent} />
                  </Switch>
              </div>
          </Router>
      </div>
  );
}

const style = {
    color: 'red',
    margin: '10px'
}

export default App;
