import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import '../App.css';

const Input = (props) => {
    return(
        <Container style={{marginBottom:"2%"}}>
            <Row>
                <Col/>
                <Col xs={8}>
                    <label>{props.currQuestion.Question}</label>
                    <input name="Zip" className="form-control input-lg" data-model="Location"></input>
                </Col>
                <Col/>
            </Row>
        </Container>
    )
}

export default Input;