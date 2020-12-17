import React, { Component } from 'react';
import { Card } from 'react-bootstrap';


export default class  extends Component {
    
    render() {
        const { cashOnHandBalance, checkingBalance, savingBalance} = this.props;

        
        return (
                <div className='accounts'>
                <Card
              bg={'primary'}
              text={'white'}
              style={{ width: '18rem' }}
              className="mb-2"
            >
              <Card.Body>
                <Card.Title>Checking Account Balance </Card.Title>
                <Card.Text>
                ${checkingBalance}
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
                <Card.Title>Savings Account Balance </Card.Title>
                <Card.Text>
                ${savingBalance}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              bg={'secondary'}
              text={'white'}
              style={{ width: '18rem' }}
              className="mb-2"
            >
              <Card.Body>
                <Card.Title>Cash-On-Hand Balance</Card.Title>
                <Card.Text>
                ${cashOnHandBalance}
                </Card.Text>
              </Card.Body>
            </Card>
                
            </div>
        )
    }
}
