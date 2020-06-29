import React, { PureComponent } from 'react'

import './Graphic.scss'


export default class Setting extends PureComponent {
  constructor(props) {
    super(props)
    this.tag = React.createRef()
  }
  test() {
    console.log(this.tag)
       }

  
  render() {

    return (
     <div>
      <div id='tag-cloud' ref={ this.tag } >graphic</div>
      <button onClick={this.test.bind(this)}>click</button>

     </div>
    )
  }
  
}