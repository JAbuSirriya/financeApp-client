import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Form, Button, Col } from 'react-bootstrap';
import { baseApiUrl } from '../config';



export default class Login extends Component {
    state = {
        password: '',
        email: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        axios.post(`${baseApiUrl}/users/login`, this.state).then((response)=> {
            console.log(response.data.token);
            localStorage.setItem("token", response.data.token);
            window.location.href = "/transactions/add";
        }).catch(() => {
            alert('Unknown user credentials');
            
        })
    }


    handleInputChange = (event)  => {
        const { name, value } = event.target;
    
    
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <Form onSubmit={this.onSubmit} className="add-transaction-form">
  <Form.Group controlId="formBasicEmail">
  <Form.Label>Email</Form.Label>
    <Form.Control name="email" onChange={this.handleInputChange} type="email" placeholder="Enter Email" />
    <Form.Label>Password</Form.Label>
    <Form.Control name="password" onChange={this.handleInputChange} type="password" placeholder="Enter Password" />
    
    
  </Form.Group>

  <Form.Row>
      <Col xs="4">
      <Button variant="success" type="submit">
    Log In
  </Button>
      </Col>
      <Col xs="4">
      <Link to="/register">New User?</Link>
      </Col>
  
  

  </Form.Row>
  
</Form>
        )
    }
}

