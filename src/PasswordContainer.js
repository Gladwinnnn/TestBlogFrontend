import * as React from 'react';
import FormContainer from './FormContainer';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Form from 'react-bootstrap/Form'
import { Col, Button } from 'react-bootstrap';
import axios from 'axios';

function Password(props) {
    return (
        <div>
            <Card>
                <CardContent>
                    <Form onSubmit={props.onSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label column sm="12">
                                You need password to access this area
                            </Form.Label>
                            <Col>
                                <Form.Control type='password' value={props.password} onChange={props.onChange} />
                            </Col>

                            <br />

                            <Button as="input" type="submit" value="Submit" />
                        </Form.Group>
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
}

function SecretPage(props) {
    return (
        <div>
            <Card sx={{ maxWidth: 1500 }}>
                <CardContent>
                    <FormContainer />
                </CardContent>
            </Card>
        </div>
    );
}

class PasswordContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            secretVisible: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLogOff = this.handleLogOff.bind(this);
    }

    checkPassword(password) {
        // if (password === 'potato') {
        //     return true;
        // }
        // return false;

        // fetch("http://localhost:8080/authenticate", {
        //     method: "POST",
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(password)
        // }).then(function (response) {
        //     console.log("test");
        //     console.log(response);
        //     return response;
        // });
        axios.post('http://localhost:8080/authenticate', {
            password: password
        })
            .then(response => {
                console.log(response.data)
                this.setState({secretVisible: response.data})
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({
            password: e.target.value,
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            secretVisible: this.checkPassword(this.state.password),
        });
    }

    handleLogOff(e) {
        e.preventDefault();
        this.setState({
            secretVisible: false,
        });
    }

    render() {
        const secretVisible = this.state.secretVisible;
        let pageToDisplay;
        if (secretVisible) {
            pageToDisplay = <SecretPage onTakeMeBackClicked={this.handleLogOff} />;
        }
        else {
            pageToDisplay = <Password password={this.state.password} onChange={this.handleChange} onSubmit={this.handleSubmit} />;
        }
        return (
            <div>
                {pageToDisplay}
            </div>
        );
    }
}

export default PasswordContainer