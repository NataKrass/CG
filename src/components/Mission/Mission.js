import React, { PureComponent } from 'react'
import { Container, Row, Col } from 'reactstrap'

import './Mission.scss'

export default class Mission extends PureComponent {
  static propTypes = {}

  render() {
    return (
      <section id='mission'>
        <Container fluid>
          <Row>
            <Col xs='12'>
              <div className='heading'>
                <h2>Who is the platform for?</h2>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md='3' sm='6' xs='6'>
              <div className='mission_box mission_box-1'>
                <h4>Investors</h4>
              </div>
            </Col>
            <Col md='3' sm='6' xs='6'>
              <div className='mission_box mission_box-2'>
                <h4>Founders</h4>
              </div>
            </Col>
            <Col md='3' sm='6' xs='6'>
              <div className='mission_box mission_box-3'>
                <h4>Business</h4>
              </div>
            </Col>
            <Col md='3' sm='6' xs='6'>
              <div className='mission_box mission_box-4'>
                <h4>Startups</h4>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}