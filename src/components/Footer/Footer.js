import React, { PureComponent } from 'react'
import { Container, Row, Col } from 'reactstrap'
import logo from '../../assets/img/logo.png'
import './Footer.scss'

export default class Footer extends PureComponent {
  static propTypes = {}

  render() {

    return (
      <footer>
        <Container fluid>
          <Row>
            <Col className='text-center'>
              <a href='/#' rel='noopener noreferrer' target='blank'>
                <img src={logo} alt='logo'></img>
              </a>
              <p>Copyright © 2020 GTIFin s.r.o. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    )
  }
}
