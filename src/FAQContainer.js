import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

class FAQContainer extends React.Component {
    render() {
        return (
            <Container>
                <Container>
                    <Row>
                        <Col>
                            <Card sx={{ maxWidth: 1500 }}>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        What is “Project 4 Friends?”
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" align="justify">
                                        Project 4 Friends is an RPG/simulation game, currently in development.
                                        <br />
                                        <br />
                                        In this game, you will play as a chocolatier living in a haunted castle. In order to thrive in your new role, you will have to gather rare ingredients, make delicious chocolates, and sell them in a chocolate shop.
                                        <br />
                                        <br />
                                        There’s a lot more to the game than that, but it’s still early in development so I don’t want to go too deep into it right now.
                                    </Typography>

                                    <br />

                                    <Typography gutterBottom variant="h5" component="div">
                                        Who’s making this game?
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" align="justify">
                                        Project 4 Friends is being developed by Melvin Soh (aka Soh Wei Yang), the creator of Lonely Slime.
                                        <br />
                                        <br />
                                        (So far, I have been working alone on this game, and I have no plans to get anyone else involved at this time. However, when it’s close to being done I will most likely get help for console ports and localizations. I will also be self-publishing this game.)
                                    </Typography>

                                    <br />

                                    <Typography gutterBottom variant="h5" component="div">
                                        When does it come out?
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" align="justify">
                                        I can’t commit to a release date yet. It’s still relatively early in development and I want to be able to work in peace without the pressure of a release date, or even an estimated release date.
                                    </Typography>

                                    <br />

                                    <Typography gutterBottom variant="h5" component="div">
                                        How long has it been in development?
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" align="justify">
                                        I started working on this game a little over 1 year ago, in 2021. Since then, I’ve been working on it mostly in evenings and on the weekends, because I’m still actively working on other things.
                                        <br />
                                        <br />
                                        It’s actually not the first or only “new project” I’ve been working on, but it’s the one that I believe I will finish first.                                    
                                    </Typography>

                                    <br />

                                    <Typography gutterBottom variant="h5" component="div">
                                        What languages will it have?
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" align="justify">
                                        The only language I know for sure at this point, is English. That being said, I intend to localize to other languages. But I’m not even close to doing that yet, and I don’t want to put the cart before the horse, so to speak.                                
                                    </Typography>

                                    <br />

                                    <Typography gutterBottom variant="h5" component="div">
                                        What platforms will it come out on?
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" align="justify">
                                    The only platform I am 100% certain about is PC. However, I have every intention of bringing it to the other major platforms as well.                                    
                                    </Typography>

                                </CardContent>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Container>
        )
    }
}

export default FAQContainer