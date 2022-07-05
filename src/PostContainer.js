import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, Row, Col } from 'react-bootstrap';

class PostContainer extends React.Component{
    constructor() {
        super()
        this.state = {
            posts: {}
        }
    }
    
    componentDidMount() {
        fetch("http://localhost:8080/posts")
        .then(response => response.json())
        // .then(data => console.log(data))
        .then(data => {
            this.setState({
                posts : data
            })
        })
    }

    render() {
        // console.log(this.state.posts)

        var postsPlaceholder = this.state.posts
        var listOfPosts = Object.keys(postsPlaceholder).map(function(k) { return postsPlaceholder[k] });
        // console.log(listOfPosts)
        
        for (var post of listOfPosts) {
            // console.log("Title: " + post.title)
            // console.log("Content: " + post.content)
        }

        return (
            <div>
                <Container>
                    <Container>
                        <Row>
                            <Col>
                                {listOfPosts.map((data, key) => {
                                    return (
                                        <div>
                                            <Card sx={{ maxWidth: 1500 }}>
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                {data.title}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary" align="justify">
                                                {data.content}
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Button size="large">Leave a Comment</Button>
                                            </CardActions>
                                            </Card>
                                            < br />
                                        </div>
                                    );
                                })}
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </div>
        )
    }
}

export default PostContainer