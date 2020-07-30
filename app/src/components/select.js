import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

const Select = (props) => {
    console.log(props)
    const options = props.currQuestion.Values.split(',');
    return(
        <Container style={{marginBottom:"2%"}}>
            <Row>
                <Col/>
                <Col xs={8}>
                    <label>{props.currQuestion.Question}</label>
                    <div className="select-field">
                        <select className="form-control input-lg select2-hidden-accessible selectpicker">
                            {options.map((x) => {
                                return <option>{x}</option>;
                            })}
                        </select>
                    </div>
                </Col>
                <Col/>
            </Row>
        </Container>
    )
}

export default Select;