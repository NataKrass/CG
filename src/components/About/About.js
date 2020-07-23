import React, { PureComponent } from 'react'
import { Container, Row, Col } from 'reactstrap'

import globe from '../../assets/img/globe1.png'
import './About.scss'

export default class About extends PureComponent {

  render() {
    return (
      <section id='about' className='about'>
        <Container>
          <Row>
            <Col md='6' sm='12'>
              <h2>
                About <br></br> Core Group
              </h2>
              <p className='about_text'>
                The Core Group has developed a software platform designed to
                support 21st-century communications, data management,
                identification, social interaction, and transactional solutions.
              </p>
            </Col>
            <Col md='6' sm='12'>
              <div className='about_img'>
                <img src={globe} alt='global'></img>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md='12' lg='4' sm='12'>
              <div className='about_box'>
                <div className='about_box-img about_box-img1'></div>
                <div className='about_box_text'>
                  <p className='text-center'>
                    The Core Group has built a global, decentralized, Blockchain
                    based, ecosystem that is immediately available but is also
                    fully capable of evolving to cater to the world of the future.
                  </p>
                </div>
              </div>
            </Col>

            <Col md='12' lg='4' sm='12'>
              <div className='about_box'>
                <div className='about_box_text'>
                  <p className='text-center'>
                    Our platform is aligned with all 17 Sustainable Developments
                    Goals (“SDGs”) of the United Nations which illustrates the
                    congruence of our platform with envisaged future global
                    societal needs.
                  </p>
                </div>
                <div className='about_box-img about_box-img2'></div>
              </div>
            </Col>
            <Col md='12' lg='4' sm='12'>
              <div className='about_box about_box-last'>
                <div className='about_box-img about_box-img3'></div>
                <div className='about_box_text'>
                  <p className='text-center'>
                    The Core Group’s mission is to provide seamless, secure,
                    transparent and trustworthy communication and transactional
                    environment for both current and future generations.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}
