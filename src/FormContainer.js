import * as React from 'react';
import Form from 'react-bootstrap/Form'
import { Container, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';

class FormContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event, field) {
        this.setState({ [field]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        console.log(this.state.title);
        console.log(this.state.content);

        axios.post('http://localhost:8080/addpost', {
            title: this.state.title,
            content: this.state.content
        })
            .then(response => {
                console.log(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    render() {
        return (
            <div>
                <Container>
                    <Container>
                        <Row>
                            <Col>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group className="mb-3" controlId="formTitle">
                                        <Form.Label>Title</Form.Label>
                                        <Form.Control type="text" maxLength="30" value={this.state.title} onChange={(event)=>this.handleChange(event, "title")} />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formContent">
                                        <Form.Label>Content</Form.Label>
                                        <Form.Control as="textarea" rows={10} cols={100} value={this.state.content} onChange={(event)=>this.handleChange(event, "content")} />
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