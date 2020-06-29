import React, { PureComponent } from 'react'
import { Container, Row, Col, Button } from 'reactstrap'

import Navbar from '../Navbar'
import './Header.scss'

export default class Header extends PureComponent {
  static propTypes = {}

  render() {
    return (
      <header className='header'>
        <Container fluid>
          <Navbar />
          <Row>
            <Col className='text-center'>
              <h1>
                Decentralized <span>Software</span> Solutions <b>Platform</b>
              </h1>
              <p>
                A global decentralized ecosystem providing a fully functional
                Blockchain platform touching all 17 SDGs
              </p>
              <Button>Get Started</Button>
            </Col>
          </Row>
        </Container>
      </header>
    )
  }
}
  
