import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';


const acountTypes = [{
    label: 'Checking Account',
    value: 'checking'
}, {
    label: 'Saving Account',
    value: 'saving'
}, {
    label: 'Cash On Hand',
    value: 'cash'
}]

export default class AddtoEarningPurchaseList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '',
            amount: '',
            accountType: 'checking'
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(e){
        e.preventDefault();
        const data = {description: this.state.description, amount: this.state.amount, accountType: this.state.accountType}
        this.props.handleSubmitClick(data);
    }


    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        debugger;
    
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <Form onSubmit={this.onSubmit} className="add-transaction-form">
  <Form.Group controlId="formBasicEmail">
  <Form.Label>Description</Form.Label>
    <Form.Control name="description" onChange={this.handleInputChange} type="text" placeholder="Enter Description" />
    <Form.Label>Amount</Form.Label>
    <Form.Control name="amount" onChange={this.handleInputChange} type="number" placeholder="Enter Amount" />
    <Form.Label>Account Type</Form.Label>
    <Form.Control as="select" name="accountType" value={this.state.accountType}>
    {acountTypes.map(v => (
                                <option value={v.value}>{v.label}</option>
                            ))}
      </Form.Control>
    
  </Form.Group>

  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
            // <div>
            //     <form onSubmit={this.onSubmit}>
            //         <div className="form-control">
            //             <label htmlFor="text">Text</label>
            //             <input name="description" type="text" 
            //             value={this.state.description}  placeholder="Enter text here"
            //             required  onChange={this.handleInputChange} />
            //         </div>
            //         <hr/>
            //         <div className="form-control">
            //             <label htmlFor="amount"
            //                 >Amount <br />
            //                 </label
            //         >
            //             <input name="amount" type="number" 
            //             value={this.state.amount}  placeholder="Enter amount here" 
            //             required onChange={this.handleInputChange}/>
                        
            //         </div>
            //         <hr/>
            //         <div className="form-control">
            //             <label htmlFor="accountType">
            //                  Account Type
            //                 </label>
                          
                        
                        
            //             <select value={this.state.accountType} name="accountType" id="accountType" onChange={this.handleInputChange}>
            //                 {acountTypes.map(v => (
            //                     <option value={v.value}>{v.label}</option>
            //                 ))}
            //             </select>
            //         </div>
            //         <br/>
            //         <button className="btn">Add transaction</button>
            //     </form>
            // </div>
        )
    }
}

