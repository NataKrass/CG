import React, { PureComponent } from 'react'
import { Container, Row, Col, Button } from 'reactstrap'

import logo from '../../assets/img/corepass.svg'
import Cloud from '../Cloud'
import './Setting.scss'

export default class Setting extends PureComponent {
  static propTypes = {}

  render() {
    return (
      <section className='setting'>
        <Container fluid>
          <Row>
            <Col xs='12' className='text-center'>
              <div className='setting_logo' rel='noopener noreferrer' target='blank'>
                <img src={logo} alt='logo'></img>
              </div>
            </Col>
            <Col xs='12' md='6'>
              <Cloud />
            </Col>
            <Col xs='12' md='6'>
              <div className='setting_content'>
                <h2>Setting a new standart in smart contract platfom</h2>
                <p>
                  The Core Group provides the digitalization and allows you to
                  get access to all the platforms of the group<br></br>
                  For quick access to the platform you just need to register in
                  Core Passport
                </p>
                <Button>Get started</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}