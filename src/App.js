import React from "react";
import TabContainer from "./TabContainer";
import { Container, Row, Col } from 'react-bootstrap';

function App() {
    return (
        <div>
            <div>
                <br />
                <Container>
                    <Container>
                        <Row>
                            <Col>
                                <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}> Project 4 Friends Updates </h1>
                            </Col>
                        </Row>
                    </Container>
                </Container>
                <br />
            </div>

            <Container>
                <Container>
                    <Row>
                        <Col>
                            <TabContainer />
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}

export default App