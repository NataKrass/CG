import React, { PureComponent } from 'react'
import { Container, Row, Col } from 'reactstrap'
import PropTypes from 'prop-types'

import './Faq.scss'
const data = [
  {
    title: 'What is Core Group?',
    paragraph: `Core Group is a company that specializes in decentralized software and blockchain solutions 
    that focuses on facilitating the traditional circular flow of economy seamlessly into the circular flow 
    of a digital economy. Core group has built various applications within the communications, data management, 
    identification, social interaction, and transactional environment.`,
  },
  {
    title: 'What Are Use Cases?',
    paragraph: `These are companies that are using the software solutions of the Core Group. 
    Core group has successfully partnered with various centralized and decentralized companies 
    to integrate their solutions into a decentralized blockchain environment.`,
  },
  {
    title: 'What is Cryptocurrency?',
    paragraph: `A cryptographic secured digital or virtual currency nearly impossible to counterfeit 
    or double-spend. It is a means of value which can be transferred or seen as payment or value used for 
    secure online payments. Cryptocurrency are systems denominated in terms of virtual “tokens” or “coins”,
     represented by ledger entries internal to the system. Most cryptocurrencies are decentralized networks based
      on blockchain networks. 'Crypto' refers to the mathematical algorithms used for encryption and cryptographic
       techniques that safeguard these entries suchs as elliptical curve encryption, public/private key pairs and hashing functions.`,
  },
  {
    title: 'What is Blockchain?',
    paragraph: `Blockchain is a decentralized ledger of records organized in blocks that are connected or 
    linked together by a cryptographic validation. It is a storage of consensus truth in a digital format. 
    The most important thing that needs to be taken and grasped of what blockchain does, is to understand that the 
    ledger is not stored in a centralized location or managed by a single entity or organization. It is distributed
     across multiple locations, on multiple computers, in broken up parts and duplicated, hence why it is 
     a distributed ledger. Blockchain is also not only used for cryptocurrency to transact a value, instead
      it is also used for validation, data transmittance, etc. The blockchain validation process results in 
      an immutable, irreversible data transaction, financial or physical data. These transactions are public 
      and recorded which cannot be deleted or hidden and are publicly available forever. This is to ensure 
      that everything is transparent and resilient. Open Source software that leverages blockchain networks 
      are called Dapps (Decentralized Applications). Core Group has built all their software solutions and Dapps 
      on the Core Blockchain Network and Core Token Smart Contract platform.`,
  },
  {
    title: 'What are Smart Contracts?',
    paragraph: `Smart Contracts are computer programs or payment protocols which automatically execute, control or document legally 
    relevant events and actions according to the terms of a written contract or agreement. 
    Smart Contracts are deployed in a blockchain to act as executors which in turn reduces the need of trusted intermediators, 
    arbitrators and enforcement costs, fraud losses, as well as the reduction of malicious and accidental exceptions. `,
  },
  {
    title: 'What are Decentralized Applications?',
    paragraph: `Decentralized applications are software solutions and processes that are:`,
  },
]

export default class Faq extends PureComponent {
  static get propTypes() {
    return {
      title: PropTypes.any,
      paragraph: PropTypes.any,
      list: PropTypes.any,
    }
  }

  render() {
    return (
      <section className='faq'>
        <Container>
          <Row>
            <Col>
              <div className='faq_box'>
                <h2>Have questions?</h2>
                <p className='subtext'>
                  Take a look through our frequently asked questions
                </p>

                <ul className='accordion-list'>
                  {data.map((data, key) => {
                    return (
                      <li {...{ className: 'accordion-list__item', key }}>
                        <AccordionItem {...data} />
                      </li>
                    )
                  })}
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}

class AccordionItem extends PureComponent {
  state = {
    opened: false,
  }

  render() {
    const {
      props: { paragraph, title },
      state: { opened },
    } = this

    return (
      <div
        {...{
          className: `accordion-item, ${opened && 'accordion-item--opened'}`,
          onClick: () => {
            this.setState({ opened: !opened })
          },
        }}
      >
        <div className='accordion-item__line'>
          <h4 className='accordion-item__title'>{title}</h4>
          <span className='accordion-item__icon' />
        </div>
        <div className='accordion-item__inner'>
          <div className='accordion-item__content'>
            <div className='accordion-item__paragraph'>
              {paragraph}
              <div className='accordion-item__list'>
                <ul>
                  <li>
                    <b>Open source:</b> Governed by an autonomous organization
                    where all changes and applications are decided by consensus
                    or a majority of the platforms users. The code base should
                    be available for scrutiny.
                  </li>
                  <li>
                    <b>Decentralized:</b> All operation records of the
                    application or software have to be stored on a public ledger
                    (databases) within a blockchain network. This avoids
                    centralized issues where data is withheld and records can be
                    tampered with without anyone knowing what, how, who, when
                    and where the records have been used. Decentralization also
                    decreases the risk of hacking and ransoms when a platform
                    has been infiltrated due to a single point of entree such as
                    a standard database. Decentralized applications do not only
                    store data on a singular database, instead it is broken up,
                    duplicated and stored on various individual nodes scattered
                    over the world, once someone wants to verify a particular
                    record, various duplicates of the broken up records are
                    cross referenced to ensure that the data has not been
                    tampered with.
                  </li>
                  <li>
                    <b>Incentivized:</b> everyone contributing towards the
                    network should be incentivised by rewarding with them either
                    tokens or cryptocurrency which is cryptographically
                    autonomously calculated.
                  </li>
                  <li>
                    <b>Protocol:</b> The community of the application has to
                    agree on a cryptographic algorithm to calculate the proof of
                    value. This is called either Proof of Work or Proof of
                    Stake. Proof of work is based on computers solving a
                    mathematical problem which is depicted by the cryptographic
                    algorithm.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
