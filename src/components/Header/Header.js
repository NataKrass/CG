import React, { PureComponent } from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import Navbar from '../Navbar'
import './Header.scss'

export default class Header extends PureComponent {
  constructor() {
    super()

    this.state = {
      scrolled: false,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY <= 900
      if (isTop !== true) {
        this.setState({ scrolled: true })
      } else {
        this.setState({ scrolled: false })
      }
    })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll')
  }

  render() {
    return (
      <header id='header' className={this.state.scrolled ? 'header sticky' : 'header'}>
        <Container fluid>
          <Navbar />
        </Container>
        <Container>
          <Row>
            <Col className='text-center'>
              <h1>
                Decentralized <span>Software</span> Solutions
                <span> Platform</span>
              </h1>
              <p>
                A global decentralized ecosystem providing a fully functional
                Blockchain platform touching all 17 SDGs
              </p>
              <Button>Get Started</Button>
            </Col>
          </Row>
        </Container>
      </header>
    )
  }
}
  
