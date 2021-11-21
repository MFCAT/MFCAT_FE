import { Container, Row, Col, Card, Form, Button } from "react-bootstrap"
import { FaCat } from "react-icons/fa";


const Create = () => {
    return (
        <Container fluid>
        <Row >
          <Col className="d-none d-sm-block">



          </Col>
          <Col >
          
          <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center" >
                        <Card className="border border-success">
                            {/* <Card.Header> <h3> CONNECT WALLET </h3></Card.Header> */}
                            <Card.Body>

                                <Form>
                                    <Form.Group className="mb-2" controlId="catname">
                                        <Form.Label > <h5>Give it a name</h5></Form.Label>
                                        <Form.Control type="text" />

                                    </Form.Group>

                                    <Form.Group className="mb-2" controlId="catdescription">
                                        <Form.Label><h5>Add a description</h5></Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>

                                    <Form.Group controlId="formFile" className="mb-2">
                                        <Form.Label><h5> Upload your cat</h5></Form.Label>
                                        <Form.Control type="file" />
                                    </Form.Group>

                                    <div className="d-grid gap-2 mt-3">
                                    <Button variant="secondary  " type="submit"><FaCat className="react-icons"/> Mint
                                    </Button>
                                   </div>

                                </Form>

                            </Card.Body>
                        </Card>
                    </div>
          
          
          </Col>
        </Row>
      </Container>
    )
}

export default Create
