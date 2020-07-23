import React, { PureComponent } from 'react'
import { Container, Row, Col } from 'reactstrap'
import ReadMoreReact from 'read-more-react'

import coretoken from '../../assets/img/core-token.png'
import ping from '../../assets/img/ping.png'
import wallmoney from '../../assets/img/wall-money.png'
import corepay from '../../assets/img/core.png'
import './Services.scss'

export default class Services extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      height: 0,
    }
  }

  componentDidMount() {
    let height = this.text.clientHeight + 20
    this.setState({ height })
    let height1 = this.text1.clientHeight + 20
    this.setState({ height1 })
  }

  render() {
    const { height, height1 } = this.state
    const hexHeight = { height: height }
    const coreHeight = { height: height1 }

    return (
      <section id='services' className='services'>
        <Container>
          <Row>
            <Col xs='12'>
              <h2>Services</h2>
              <p className='subtext'>
                One of the key requirements of digitized transactions is the
                ability to digitize both tangible and intangible assets. The
                Core Group provides a full digitization enabler for people,
                businesses, foundations, funds, and governmental institutions.
              </p>
              <p className='subtext'>
                In terms of the Core Group’s design objectives, all our
                solutions are cost-effective, easy to use, immediate and secure.
              </p>
              <p className='subtext'>
                The Core Group platform consists of the following components:
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs='12' md='6'>
              <div className='services_box services_logo-left services_logo-core'>
                <img src={coretoken} alt='core-token' id='core'></img>
              </div>
            </Col>
            <Col xs='12' md='6'>
              <div className='services_box text-md-left'>
                <p>
                  Core Token is a tokenizing and Smart Contract platform,
                  enabling anything of value to be digitized in order to enter a
                  Blockchain environment. Core Token can be used as the basis of
                  a stable and resourceful investment platform, creating
                  sustainable income streams for token holders. Core Token has
                  been successfully deployed in several businesses all over the
                  world and in a wide range of industries.
                </p>
                <ReadMoreReact
                  text=' Core Token is a tokenizing and Smart Contract platform,
                  enabling anything of value to be digitized in order to enter a
                  Blockchain environment. Core Token can be used as the basis of
                  a stable and resourceful investment platform, creating
                  sustainable income streams for token holders. Core Token has
                  been successfully deployed in several businesses all over the
                  world and in a wide range of industries.'
                  min={70}
                  ideal={80}
                  max={90}
                  readMoreText='Read more'
                />
                <a
                  href='https://coretoken.net/'
                  target='blank'
                  className='btn-secondary'
                  rel='noopener noreferrer'
                >
                  Website
                </a>
                <a
                  href='https://drive.google.com/open?id=16Q7ZErTSZvg3AUvuxLD82SPiKSt2ojfN'
                  className='btn-secondary services_btn'
                  rel='noopener noreferrer'
                  target='blank'
                >
                  One page
                </a>
              </div>
            </Col>
            <Col xs='12' className='d-md-none'>
              <div
                className='services_box services_logo-right'
                style={hexHeight}
              >
                <img src={ping} alt='ping' id='ping'></img>
              </div>
            </Col>
            <Col xs='12' md='6'>
              <div className='services_box text-md-right'>
                <p ref={text => (this.text = text)}>
                  A Hybrid exchange (HEX) is the link that will unite the
                  advantages of a centralized exchange, such as cooperation with
                  large investors and the trust of many users with the
                  advantages of a decentralized exchange. Ping Exchange is a
                  hybrid-decentralized exchange with a specific focus on a
                  user-friendly, trading platform which also provides the
                  ability for peer-to-peer, community barter trades. Trading on
                  the Ping Exchange platform with our broker software is
                  exceptionally fast, once again in line with our global design
                  objectives.
                </p>
                <ReadMoreReact
                  text=' A Hybrid exchange (HEX) is the link that will unite the
                  advantages of a centralized exchange, such as cooperation with
                  large investors and the trust of many users with the
                  advantages of a decentralized exchange. Ping Exchange is a
                  hybrid-decentralized exchange with a specific focus on a
                  user-friendly, trading platform which also provides the
                  ability for peer-to-peer, community barter trades. Trading on
                  the Ping Exchange platform with our broker software is
                  exceptionally fast, once again in line with our global design
                  objectives.'
                  min={70}
                  ideal={80}
                  max={90}
                  readMoreText='Read more'
                />
                <a
                  href='https://pingexchange.com/'
                  className='btn-secondary'
                  rel='noopener noreferrer'
                  target='blank'
                >
                  Website
                </a>
              </div>
            </Col>
            <Col md='6' className='d-none d-md-block'>
              <div
                className='services_box services_logo-right'
                style={hexHeight}
              >
                <img src={ping} alt='ping' id='ping'></img>
              </div>
            </Col>
            <Col xs='12' md='6'>
              <div className='services_box services_logo-left'>
                <img src={wallmoney} alt='wall-money' id='wall'></img>
              </div>
            </Col>
            <Col xs='12' md='6'>
              <div className='services_box text-md-left'>
                <p>
                  Wall Money is a Banking as a Service (BaaS) platform that
                  extends banking outside traditional banking branches or
                  channels. Users may transact through mobile, tablet, desktop,
                  web and/or decentralized point-of-sale terminals. Clients have
                  access to our full suite of seamlessly integrated FIAT
                  currency, cryptocurrency, and digital asset platforms.
                </p>
                <ReadMoreReact
                  text='  Wall Money is a Banking as a Service (BaaS) platform that
                  extends banking outside traditional banking branches or
                  channels. Users may transact through mobile, tablet, desktop,
                  web and/or decentralized point-of-sale terminals. Clients have
                  access to our full suite of seamlessly integrated FIAT
                  currency, cryptocurrency, and digital asset platforms.'
                  min={70}
                  ideal={80}
                  max={90}
                  readMoreText='Read more'
                />
                <a
                  href='https://wall.money/'
                  className='btn-secondary'
                  rel='noopener noreferrer'
                  target='blank'
                >
                  Website
                </a>
              </div>
            </Col>
            <Col xs='12' className='d-md-none'>
              <div
                className='services_box services_logo-right'
                style={coreHeight}
              >
                <img
                  src={corepay}
                  alt='core-pay'
                  className='core-pay'
                  id='pay'
                ></img>
              </div>
            </Col>
            <Col xs='12' md='6'>
              <div className='services_box text-md-right'>
                <p ref={text1 => (this.text1 = text1)}>
                  CorePay is a feature-rich software payment gateway with many
                  use-cases. Using our solution, sellers are capable of
                  accepting anything of value as consideration for a
                  transaction, including FIAT currency, Cryptocurrency, and even
                  Barter swaps. Some applications worth mentioning are in
                  eCommerce, Point-of-sale applications, Donation remittance,
                  general money remittance and more.
                </p>
                <ReadMoreReact
                  text=' CorePay is a feature-rich software payment gateway with many
                  use-cases. Using our solution, sellers are capable of
                  accepting anything of value as consideration for a
                  transaction, including FIAT currency, Cryptocurrency, and even
                  Barter swaps. Some applications worth mentioning are in
                  eCommerce, Point-of-sale applications, Donation remittance,
                  general money remittance and more.'
                  min={70}
                  ideal={80}
                  max={90}
                  readMoreText='Read more'
                />
                <a href='/#'
                  className='btn-secondary'
                  rel='noopener noreferrer'
                  target='blank'
                >
                  Website
                </a>
              </div>
            </Col>
            <Col md='6' className='d-none d-md-block'>
              <div
                className='services_box services_logo-right'
                style={coreHeight}
              >
                <img
                  src={corepay}
                  alt='core-pay'
                  className='core-pay'
                  id='pay'
                ></img>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}
