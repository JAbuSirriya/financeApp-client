import React, { Component } from 'react';
import { Card } from 'react-bootstrap';


export default class  extends Component {
    
    render() {
        const { cashOnHandBalance, checkingBalance, savingBalance} = this.props;

        // return [
        //     'Primary',
        //     'Secondary',
        //     'Success',
        //   ].map((variant, idx) => (
        //     <Card
        //       bg={variant.toLowerCase()}
        //       key={idx}
        //       text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
        //       style={{ width: '18rem' }}
        //       className="mb-2"
        //     >
        //       <Card.Header>Header</Card.Header>
        //       <Card.Body>
        //         <Card.Title>{variant} Card Title </Card.Title>
        //         <Card.Text>
        //           Some quick example text to build on the card title and make up the bulk
        //           of the card's content.
        //         </Card.Text>
        //       </Card.Body>
        //     </Card>
        //   ));
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
