import React, { useState } from 'react'
import {
  Row,
  Col,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
} from 'reactstrap'
import { Link } from 'react-scroll'
import './Navbar.scss'
import logo from '../../assets/img/logo.png'

const MainNavbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <Row>
      <Navbar light expand='md'>
        <Col sm='3' md='2'>
          <NavbarBrand href='/'>
            {' '}
            <img src={logo} alt='corepassport' />
          </NavbarBrand>
        </Col>
        <Col sm='6' md='10' className='text-sm-right'>
          <NavbarToggler onClick={ toggle } />
          <Collapse isOpen={ isOpen } navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <Link
                  activeClass='active'
                  to='header'
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  duration={1000}
                  delay={1000}
                >
                  Home
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  activeClass='active'
                  to='about'
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={530}
                  duration={1000}
                  delay={1000}
                >
                  About
                </Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Services
                </DropdownToggle>
                <Link
                  className='sticky-item'
                  activeClass='active'
                  to='services'
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  duration={1000}
                  delay={1000}
                >Services</Link>
                <DropdownMenu right>
                  <Link
                    activeClass='active'
                    to='core'
                    smooth={true}
                    offset={-130}
                  >
                    Core Token
                  </Link>
                  <Link
                    activeClass='active'
                    to='ping'
                    smooth={true}
                    offset={-130}
                  >
                    Ping exchange
                  </Link>
                  <Link
                    activeClass='active'
                    to='wall'
                    smooth={true}
                    offset={-130}
                  >
                    Wall money
                  </Link>
                  <Link
                    activeClass='active'
                    to='pay'
                    smooth={true}
                    offset={-200}
                  >
                    Core Pay
                  </Link>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
               Use cases
                </DropdownToggle>
                <Link
                  className='sticky-item'
                  activeClass='active'
                  to='case'
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  duration={1000}
                  delay={1000}
                >Use Cases</Link>
                <DropdownMenu right>
                  <Link
                    activeClass='active'
                    to='ttk'
                    smooth={true}
                    offset={-150}
                  >
                    TokTokKey
                  </Link>
                  <Link
                    activeClass='active'
                    to='santiliana'
                    smooth={true}
                    offset={-130}
                  >
                    Santiliana
                  </Link>
                  <Link
                    activeClass='active'
                    to='metalum'
                    smooth={true}
                    offset={-130}
                  >
                    Metallum
                  </Link>
                  <Link
                    activeClass='active'
                    to='ting'
                    smooth={true}
                    offset={-130}
                  >
                    Ting
                  </Link>
                  <Link
                    activeClass='active'
                    to='miners'
                    smooth={true}
                    offset={-130}
                  >
                    CMiners
                  </Link>
                  <Link
                    activeClass='active'
                    to='wallace'
                    smooth={true}
                    offset={-130}
                  >
                    Wallace
                  </Link>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <Link
                  activeClass='active'
                  to='network'
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={50}
                  duration={1000}
                >
                  Network
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  activeClass='active'
                  to='partners'
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={50}
                  duration={1000}
                >
                  Partners
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  activeClass='active'
                  to='contact'
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={50}
                  duration={1000}
                  delay={1000}
                >
                  Contact
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Col>
      </Navbar>
    </Row>
  )
}

export default MainNavbar
