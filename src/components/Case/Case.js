import React, { PureComponent } from 'react'
import { Container, Row, Col } from 'reactstrap'

import logo from '../../assets/img/logo-dark.png'
import logoOne from '../../assets/img/ttk.png'
import logoTwo from '../../assets/img/sant.png'
import logoThree from '../../assets/img/metallum.png'
import logoFour from '../../assets/img/ting.png'
import logoFive from '../../assets/img/cminers.png'
import logoSix from '../../assets/img/wallace.png'
import './Case.scss'

export default class Mission extends PureComponent {
  static propTypes = {}

  render() {
    return (
      <section id='case' className='case'>
        <Container fluid>
          <Row>
            <Col xs='12'>
              <h2>Use cases</h2>
              <p className='subtext'>
                Core Group has various use cases based on the Core Group
                digitization platform. The following uses cases are either
                implemented or in processes of “onboarding”:
              </p>
              <div className='case_logo'>
                <img src={logo} className='case_logo' alt='core-group'></img>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <div className='case_left'>
              <div className='case_left-post has-thumb'>
                <a href='https://toktokey.com/'>
                  {' '}
                  <img src={logoOne} alt='toktokey'></img>
                </a>
              </div>
              <div className='case_left-post'>
                <h3>Distribution business</h3>
                <p>
                  The Santiliana project is a fuel distribution network, an
                  established successful business for more than 20 years in
                  Romania. It operates high volume, serviced, modular micro
                  diesel and/or gasoline filling stations. The locations are
                  carefully selected to ensure high volume turnover of stocks in
                  3 to 4 days. Al operations and business sales processes,
                  fiscal governance and administration are fully implemented on
                  the Core Blockchain Network and the Core Token Smart Contract
                  Platform.
                </p>
              </div>
              <div className='case_left-post has-thumb'>
                <img src={logoThree} alt='metallum'></img>
              </div>
              <div className='case_left-post'>
                <h3>Streaming platform</h3>
                <p>
                  Utilizing the Core Tube streaming and TokToKey e-commerce
                  backends, Ting is one of the most advanced borderless and
                  inclusive platforms to distribute content and merchandise
                  specifically aimed for merchants and people to be able to
                  promote their products on their individual custom channels to
                  the entire world. This means that anyone, including excluded
                  communities have access and opportunities to buy and sell
                  their products.
                </p>
              </div>
              <div className='case_left-post has-thumb'>
                <a href='https://cminers.com/'>
                  <img src={logoFive} alt='cminers'></img>
                </a>
              </div>
              <div className='case_left-post'>
                <h3>Community network</h3>
                <p>
                  Wallace is a humanitarian liquidity blockchain based community
                  network. It empowers new generations with access to an
                  accountability and impact investment measurement platform.
                  Built on Core Blockchain and Core Mesh Technology, Wallace is
                  a self-sustainable decentralized ecosystem with a 98% global
                  reach, making it the only blockchain based network with access
                  for everyone in the world to a fully inclusive digital
                  economy. Wallace provides access to health, education, social,
                  financial services platforms rewarding the Wallace Community
                  with access to stable income and job opportunities regardless
                  of your geographical position.
                </p>
              </div>
            </div>
            <div className='case_right'>
              <div className='case_right-post'>
                <h3>E-Commerce</h3>
                <p>
                  TokTokKey is a Blockchain based eCommerce platform with an
                  immediate call to action features. The mobile and web
                  application provides a “see-now-buy-now” ability through
                  content recognition and product browsing, with comparisons.
                  The system also supports a conventional eCommerce desktop
                  application for normal online shopping, with full
                  merchant/store management facilities. Multiple merchants can
                  be paid instantaneously with a single transaction in the
                  currency of their choice.
                </p>
              </div>
              <div className='case_right-post has-thumb'>
                <img src={logoTwo} alt='santiliana'></img>
              </div>
              <div className='case_right-post'>
                <h3>Trading system</h3>
                <p>
                  Metalum is a blockchain-based metals trade ecosystem. Metalum
                  is as a collaborative digital marketplace with analytical
                  features linked to the metals supply chain from production
                  processes, assaying, trade financing, warehousing, logistics,
                  shipping, delivery etc. The P2P trading platform closes deals
                  cost effectively and automate trusted business confirmations
                  instantly using the secure Core Token Smart Contract Platform.
                  The Metalum smart contract based trading platform also
                  implemented a digital letter of credit platform allowing
                  metals trading houses, individual traders and or other
                  platforms to submit, in a secure blockchain based digital
                  trade system, data and documents, creating traceable secure
                  tradable financial instruments.
                </p>
              </div>
              <div className='case_right-post has-thumb'>
                <img src={logoFour} alt='ting'></img>
              </div>
              <div className='case_right-post'>
                <h3>Crypto mining</h3>
                <p>
                  CMiners crypto mining is powered by waste energy recovered
                  from multiple resources such as solar, hydro, wind and
                  mechanical accumulator installations as well as waste
                  processing installations. The technology can best be described
                  as creating wealth from waste energy. Together with CMiners
                  waste energy optimisation, CMiners blockchain based Grid
                  Balancing Technology is revolutionizing the processes and
                  affordability of Proof of Work based blockchains and crypto
                  mining industry as a whole. The use of renewable energy as a
                  source of electricity, not only reducing the electricity costs
                  and grid power consumption but, it also reduces the
                  environmental impact of crypto mining.
                </p>
              </div>
              <div className='case_right-post has-thumb'>
                <a href='https://www.wallace.world/'>
                  <img src={logoSix} alt='wallace'></img>
                </a>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    )
  }
}
