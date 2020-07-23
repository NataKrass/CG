import React, { PureComponent } from 'react'
import { Container, Row, Col } from 'reactstrap'

import globe from '../../assets/img/world.png'
import './Network.scss'

export default class Network extends PureComponent {
  static propTypes = {}

  render() {
    return (
      <section id='network' className='network'>
        <Container>
          <Row>
            <Col xs='12' className='text-center'>
              <h2>Network</h2>
              <p className='subtext'>
                The Core Group service offering is built on the Core Blockchain
                network. The network is raising the bar with its ED448
                cryptographic security and its fast, scalable and interoperable
                systems platform, allowing any other blockchain, side chain and
                permissioned chain to utilize all service offerings within the
                Core Group platform.
              </p>
              <img src={globe} alt='network'></img>
              <h2>Why we are the most safety platform?</h2>
            </Col>
          </Row>
          <Row>
            <Col xs='12' sm='6' lg='3'>
              <div className='benefit'>
                <p>
                  Core Coin is an open-source, public blockchain application
                  platform featuring Smart Contract (scripting) functionality.{' '}
                </p>
              </div>
            </Col>
            <Col xs='12' sm='6' lg='3'>
              <div className='benefit'>
                <p>
                  With a decentralized network, which supports Decentralized
                  applications (ÐApps) and supports tokens representing fiat
                  currency, cryptocurrency, commodities
                </p>
              </div>
            </Col>
            <Col xs='12' sm='6' lg='3'>
              <div className='benefit'>
                <p>
                  Supporting any other digitized units of value in a
                  marketplace.
                </p>
              </div>
            </Col>
            <Col xs='12' sm='6' lg='3'>
              <div className='benefit'>
                <p>
                  Core Coin brings financial information to the crypto World
                  with enhanced address structures, which can simplify
                  transferring holders of value to an intended beneficiary
                  address.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}
