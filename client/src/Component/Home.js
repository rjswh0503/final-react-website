
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from "react-bootstrap";


const Home = () => {
    return (
        <Container>
            <Row>
                <Col>
                <Card>
                    <Card.Body>
                        <Card.Title>리액트 웹사이트</Card.Title>
                        <Card.Text>리액트와 부트스트랩을 활용한 웹사이트</Card.Text>
                        <Link to="/movie">
                            <Button variant="warning">영화 목록</Button>
                        </Link>
                    </Card.Body>
                </Card>
                </Col>
            </Row>

        </Container>
        
    )
}



export default Home;
