import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Form, Button, Col } from 'react-bootstrap';
import { baseApiUrl } from '../config';



export default class Login extends Component {
    state = {
        password: '',
        email: '',
        name: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        axios.post(`${baseApiUrl}/users/register`, this.state).then((response)=> {

            localStorage.setItem("token", response.data.token);
            window.location.href = "/transactions/add";
        }).catch(() => {
            alert('Something went wrong');
            
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
  <Form.Label>Name</Form.Label>
    <Form.Control name="name" onChange={this.handleInputChange} type="text" placeholder="Enter Name" />
  <Form.Label>Email</Form.Label>
    <Form.Control name="email" onChange={this.handleInputChange} type="email" placeholder="Enter Email" />
    <Form.Label>Password</Form.Label>
    <Form.Control name="password" onChange={this.handleInputChange} type="password" placeholder="Enter Password" />
    
    
  </Form.Group>

  
  <Form.Row>
      <Col xs="4">
      <Button variant="info" type="submit">
    Sign Up
  </Button>
      </Col>
      <Col xs="4">
      <Link to="/">Existing User?</Link>
      </Col>
  
  

  </Form.Row>
</Form>
        )
    }
}

