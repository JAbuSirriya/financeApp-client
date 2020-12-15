import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

const aggregate = val => val.reduce((acc, val) => acc + (+val.amount), 0);
export default class EarningsAndExpenses extends Component {
    render() {
        return (
            <div className="expense-income-container">
                <Card
                bg={'danger'}
                text={'white'}
                style={{ width: '18rem' }}
                className="mb-2"
                >
                <Card.Body>
                <Card.Title>Expenses</Card.Title>
                <Card.Text>
                {aggregate(this.props.expenses)}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
            bg={'success'}
              text={'white'}
              style={{ width: '18rem' }}
              className="mb-2"
            >
                <Card.Body>
                <Card.Title>Income</Card.Title>
                <Card.Text>
                {aggregate(this.props.income)}
                </Card.Text>
              </Card.Body>
            </Card>
                
            </div>
        )
    }
}
