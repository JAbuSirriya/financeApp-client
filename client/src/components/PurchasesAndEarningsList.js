import React from 'react';
import { Table, Form, Col } from 'react-bootstrap';



const PurchasesAndEarningsList = ({ purchases }) => {
    const [localPurchases , setPurchases] = React.useState(purchases);

    React.useEffect(() => {
        setPurchases(purchases);
    }, [purchases]);
    const handleChange = (e) => {
        const { value } = e.target;
        if(value){
            setPurchases(p => p.filter(purchase => {
                const searchStr = Object.entries(purchase).filter(v => ['amount', 'description', 'accountType'].includes(v[0])).map(v => v[1]).join(' ');
                
                 return searchStr.includes(value);
    
                    }))
        }else{
            setPurchases(purchases);
        }
        
    }
    
    
        return (
            <>
            <Form>
                <Form.Row>
                    <Col xs="8"></Col>
                    <Col xs="4">
                        <Form.Control onChange={handleChange} placeholder="Search Transactions..." />
                    </Col>
                </Form.Row>
            </Form>
            <br/>
            <Table className="tx-table" bordered striped  hover variant="dark" >
                <thead>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Account Type</th>
                </thead>
                <tbody>
                    {localPurchases.map(v => (
                        <tr>
                            <th>
                                    {v.description}
                            </th>
                            <th>
                                        {v.amount}
                            </th>
                            <th>
                                        {v.accountType}
                            </th>
                        </tr>
                    ))}
                </tbody>
            </Table>
            </>
        )
}

export default PurchasesAndEarningsList;
