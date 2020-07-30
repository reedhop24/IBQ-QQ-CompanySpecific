import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

const clearForm = () => {
    document.getElementById('file-form').reset();
    alert("Filetype must be xlsx");
}

const Upload = (props) => {
    return(
        <Container style={{marginBottom:"5%", marginTop:"2%"}}>
            <Row style={{marginBottom:"2%"}}> 
                <Col/>
                <Col xs={8}>
                    <form id="file-form">
                        <input type="file" style={{textAlign:"center"}} onChange={
                            (event) => event.target.files[0].name.split('.')[1] === "xlsx" ? 
                            props.uploadFile(event.target.files[0]) 
                            : clearForm()
                        }></input>
                    </form>
                </Col>
                <Col/>
            </Row>
            <Row>
                <Col/>
                <Col xs={8}>
                    <button className="button-forward" onClick={() => props.submit()}>Submit Questions</button>
                </Col>
                <Col/>
            </Row>
        </Container>
    )
}

export default Upload;