import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Filter from '../Filter'

const Content = () => {
    return (
        <Container>
            <Filter />

            <Row className="mt-5">
                {/* coluna esquerda */}
                <Col md="8">
                    <h1>Coisas</h1>

                    <Row>
                        <Col>

                            {/* linha 1 */}
                            <Row>
                                <Col>
                                    <ul>
                                        <li>Lista 1</li>
                                        <li>Lista 2</li>
                                        <li>Lista 3</li>
                                        <li>Lista 4</li>
                                    </ul>
                                </Col>
                            </Row>

                            {/* linha 2 */}
                            <Row>
                                <Col>
                                    <h1>Coisas 2</h1>
                                    <div>
                                        <a href="">oi</a> · <a href="">oi2</a> · <a href="">oi2</a>
                                    </div>
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                </Col>

                {/* coluna direita */}
                <Col>lado</Col>
            </Row >
        </Container >
    )
}

export default Content;