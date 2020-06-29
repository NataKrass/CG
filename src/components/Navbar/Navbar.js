import React, { useState } from 'react'
import { Row, Col,   Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu } from 'reactstrap'

import './Navbar.scss'
import logo from '../../assets/img/logo.png'

const MainNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <Row>
      <Navbar light expand='md'>
        <Col sm='2'>
          <NavbarBrand href='/'>
            {' '}
            <img src={logo} alt='corepassport' />
          </NavbarBrand>
        </Col>
        <Col sm='10'>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink href='/'>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#about'>About</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Servises
                </DropdownToggle>
                <DropdownMenu right>
                  <a href='#services'>Core Token</a>
                  <a href='#services'>Ping exchange</a>
                  <a href='#services'>Wall Money</a>
                  <a href='#services'>CorPay</a>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Use Cases
                </DropdownToggle>
                <DropdownMenu right>
                  <a href='#case'>TokTokKey</a>
                  <a href='#case'>Santiliana</a>
                  <a href='#case'>Metalum</a>
                  <a href='#case'>Ting</a>
                  <a href='#case'>CMiners</a>
                  <a href='#case'>Wallace</a>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href='#network'>Network</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#servises'>Servises</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#contact'>Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Col>
      </Navbar>
    </Row>
  )
}

export default MainNavbar