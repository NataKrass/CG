import React, { PureComponent } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Map from '../Map'
import Twitter from '../SvgIcon/icons/Twitter'
import Git from '../SvgIcon/icons/Git'
import Linkedin from '../SvgIcon/icons/Linkedin'

import './Contact.scss'

export default class Contact extends PureComponent {
  constructor() {
    super()
    this.state = {
      center: [0, 0],
      isToggleOn: true,
      isActive: 0,
    }
  }

  handlerClick = id => {
    this.setState({ isActive: id })
  }

  changeCenter = (center, id) => () => {
    this.setState({ center })
    this.setState({ isActive: id })
  }

  render() {
   
    return (
      <section id='contact' className='contact'>
        <Container fluid>
          <Row>
            <Col>
              <h2>Contact us</h2>
              <p className='subtext'>
                Core group is a platform which operates worldwide
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs='12' md='6'>
              <div id='globe'>
                <Map
                  center={this.state.center}
                  isActive={this.state.isActive}
                />
              </div>
            </Col>
            <Col xs='12' md='6'>
              <div className='contact-content'>
                <h3>Our offices worldwide:</h3>
                <div className='contact-content_city'>
                <button className='btn' onClick={this.changeCenter([25, 46.5], 2)} >
                    {'Bratislava'}
                  </button>
                  <button
                    className='btn'
                    onClick={this.changeCenter([-85.1, 32.4], 3)}
                  >
                    {'Eustis'}
                  </button>
                  <button
                    className='btn'
                    onClick={this.changeCenter([13.1, -25.4], 5)}
                  >
                    {'Roodepoort'}
                  </button>
                  <button
                    className='btn'
                    onClick={this.changeCenter([25, 49.5], 1)}
                  >
                    {'Tallinn'}
                  </button>
                 
                  <button
                    className='btn'
                    onClick={this.changeCenter([35, 46.5], 4)}
                  >
                    {'Tbilisi'}
                  </button>
                  <button
                    className='btn'
                    onClick={this.changeCenter([25, 46.5], 6)}
                  >
                    {'Vaduz'}
                  </button>
                </div>
                <h3>Our head office:</h3>
                <ul className='contact-content_list'>
                  <li>
                    <a href='mailto:contact@coregroup.cc'>
                      contact@coregroup.cc
                    </a>
                  </li>
                  <li>
                    <p>Klariská 7, Bratislava, 81103, Slovakia</p>
                  </li>
                </ul>
                <p className='contact-content_description'>
                  We will be happy to assist you with any question regarding our
                  platform. Our representatives speak: English, French, German,
                  Russian, Slovak, Czech, Dutch, Romanian and Afrikaans.
                </p>
                <ul className='contact-content_social'>
                  <li>
                    <a href='/#' rel='noopener noreferrer' target='blank'>
                      <Twitter />
                    </a>
                  </li>
                  <li>
                    <a href='/#' rel='noopener noreferrer' target='blank'>
                      <Git />
                    </a>
                  </li>
                  <li>
                    <a href='/#' rel='noopener noreferrer' target='blank'>
                      <Linkedin />
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}
