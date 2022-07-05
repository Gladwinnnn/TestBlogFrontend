import * as React from 'react';
import Form from 'react-bootstrap/Form'
import { Container, Row, Col, Button } from 'react-bootstrap';

class FormContainer extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <Container>
                        <Row>
                            <Col>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formTitle">
                                        <Form.Label>Title</Form.Label>
                                        <Form.Control type="text" maxLength="30"/>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formContent">
                                        <Form.Label>Content</Form.Label>
                                        <Form.Control as="textarea" rows={10} cols={100} />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Submit Blog Post
                                    </Button>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </div>
        )
    }
}

export default FormContainer