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
                  The Core Group has developed a blockchain based digital identity platform with a full
                  KYC verification which will be released soon. </p>
                  <p>
                    This feature rich decentralized mobile application will be your singular digital identity for all 
                    services developed b Core Group and several other global intagrations.
                  </p>
                  <p>
                    Want to get ahead of the game? Register yourself so long and we will inform you when the full
                    KYC application is completed
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