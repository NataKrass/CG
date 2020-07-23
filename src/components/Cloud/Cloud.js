import React, { Component } from 'react'
import TagCloud from 'react-tag-cloud'
import PropTypes from 'prop-types'
import CloudItem from './CloudItem'
import './Cloud.scss'

class Cloud extends Component {

  static get propTypes() { 
    return { 
      text: PropTypes.any, 
    }
  }
  
  componentDidMount() {
    setInterval(() => {
      this.forceUpdate()
    }, 3000)
  }

  render() {
    return (
      <div className='app-outer'>
        <div className='app-inner'>
          <TagCloud
            className='tag-cloud'
            style={{
              fontFamily: 'sans-serif',
              fontWeight: 600,
              fontSize: 18,
              padding: 5,
              color: 'red',
            }}
          >
            <div
              style={{
                fontFamily: 'sans-serif',
                fontSize: 18,
                fontWeight: 'bold',
                color: '#999',
              }}
            >
              TokToKey{' '}
            </div>
            <CloudItem text='WallMoney ' />
            <CloudItem text='Ping Exchange ' />
            <CloudItem text=' TokToKey ' />
            <CloudItem text='CorePay ' />
            <CloudItem text='Ping ' />
            <CloudItem text=' Ping ' />
            <div className='dark'>WallMoney</div>
            <div className='light'>Ping Exchange</div>
            <CloudItem text='Core Passport ' />
            <CloudItem text='Ting Platform ' />
            <div className='light'>Core Passport</div>
            <div className='light'>Ting Platform</div>
            <CloudItem text='Wallace ' />
            <div className='lighter'>CorePay</div>
            <div className='lighter big'>Wallace</div>
            <div style={{ color: '#d4d4d4' }}>Ping</div>
          </TagCloud>
        </div>
      </div>
    )
  }
}

export default Cloud