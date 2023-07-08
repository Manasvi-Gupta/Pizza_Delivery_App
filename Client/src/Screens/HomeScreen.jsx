import React from 'react'
import AllPizzas from '../pizza-data';
import {Container,Row,Col} from 'react-bootstrap'
import Pizza from '../Components/Pizza'
const HomeScreen = () => {
  return (
    <>
    <Container>
        <Row>
            {AllPizzas.map(pizza => ( 
               <Col md={4}>
                <Pizza pizza={pizza} />
               </Col>
            )) }
        </Row>
    </Container>
    </>
  )
}

export default HomeScreen