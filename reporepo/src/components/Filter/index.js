import React from 'react'
import { InputGroup, FormControl, Button, Row, Col } from 'react-bootstrap'

const Filter = () => {
    return (
        <Row className="d-flex align-content-stretch align-items-center mt-4">
            <Col>
                <Row>
                    <Col sm="12" md="6">
                        <label htmlFor="basic-url">Input 1</label>
                        <InputGroup>
                            <FormControl id="basic-url" aria-describedby="basic-addon3" />
                        </InputGroup>
                    </Col>
                    <Col sm="12" md="6">
                        <label htmlFor="basic-url">Input 2</label>
                        <InputGroup>
                            <FormControl id="basic-url" aria-describedby="basic-addon3" />
                        </InputGroup>
                    </Col>
                </Row>
            </Col>

            <Col md="auto" className="align-self-end">
                <Row className="d-flex align-content-stretch align-items-center">
                    <Col md="auto">Queijo aqui agora</Col>
                    <Col md="auto">
                        <Button>clique aqui</Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default Filter;