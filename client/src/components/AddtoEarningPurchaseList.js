import React, { Component } from 'react'
import axios from 'axios'

export default class AddtoEarningPurchaseList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '',
            amount: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(e){
        e.preventDefault()
        console.log(this.state.formData)
        const data = {description: this.state.description, amount: this.state.amount}
        axios.post('http://localhost:3000/purchases/', data)
        .then(res => {
            console.log(res)
        })
    }


    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-control">
                        <label htmlFor="text">Text</label>
                        <input name="description" type="text" 
                        value={this.state.description}  placeholder="Enter text here"
                        required  onChange={this.handleInputChange} />
                    </div>
                    <div className="form-control">
                        <label htmlFor="amount"
                            >Amount <br />
                            (negative - expense, positive - income)</label
                    >
                        <input name="amount" type="number" 
                        value={this.state.amount}  placeholder="Enter amount here" 
                        required onChange={this.handleInputChange}/>
                    </div>
                    <button className="btn">Add transaction</button>
                </form>
            </div>
        )
    }
}

