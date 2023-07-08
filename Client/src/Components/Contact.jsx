import React from 'react'
import {Table,Container,Row,Col,Image } from 'react-bootstrap'
import {FiPhoneCall} from 'react-icons/fi'
import {ImMobile}  from 'react-icons/im'
import {AiOutlineMail}  from 'react-icons/ai'
export const Contact = () => {
  return (
    <>
    <Container style={{marginTop:'50px'}}>
    <Row>
        <Col md={6}>
            <h1>The pizza Shop</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, tempora, reiciendis cumque dolorum hic mollitia necessitatibus asperiores accusamus, quas molestias quo. Eveniet, earum tempore. Recusandae nam et molestias vero ab, voluptatum cum iste esse id, expedita inventore perferendis excepturi mollitia itaque vitae modi, repudiandae ipsam? Exercitationem necessitatibus aperiam voluptate sequi repellat a corrupti amet enim vero dolores expedita quas minus, repudiandae magni! Aliquam provident earum recusandae, atque ducimus obcaecati perferendis explicabo nihil odit, perspiciatis inventore tempora. Impedit sint architecto nisi dignissimos alias rerum beatae placeat a culpa. Natus vel necessitatibus autem ducimus ex impedit, amet quisquam fuga illo nesciunt eligendi.</p>
            <Table striped bordered hover className="text-center">
      <thead>
        <tr>
          <th className="bg-warning text-center" colspan={3}>---Contact Details---</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><FiPhoneCall/></td>
          <td>Phone</td>
          <td>1800-234567</td>
        </tr>
        <tr>
          <td><ImMobile/></td>
          <td>Call</td>
          <td>1234567890</td>
        </tr>
        <tr>
          <td><AiOutlineMail/></td>
          <td>Email</td>
          <td>customerhelpur@gmail.com</td>
        </tr>
      </tbody>
    </Table>
        </Col>
        <Col md={6}>
        <Image src="images/farmhouse.jpg" style={{width:'100%',height:'100%'}}/>

        </Col>
    </Row>
    </Container>
    </>
  )
}
