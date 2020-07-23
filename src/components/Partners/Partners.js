import React, { PureComponent } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import sliderItem1 from '../../assets/img/wall.jpg'
import sliderItem2 from '../../assets/img/mmun.png'
import sliderItem3 from '../../assets/img/revolgy.png'
import sliderItem4 from '../../assets/img/core-coin.svg'
import sliderItem5 from '../../assets/img/cryptohub-logo.png'
import sliderItem6 from '../../assets/img/core-mesh.png'
import sliderItem7 from '../../assets/img/evolution.svg'
import './Partners.scss'

export default class Partners extends PureComponent {
  static propTypes = {}

  render() {
    const settings = {
      dots: true,
      arrows: false,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 2500,
      slidesToShow: 4,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }
    return (
      <section id='partners' className='partners'>
        <Container>
          <Row>
            <Col>
              <h2>Partners</h2>
              <p className='subtext'>See our group of Companies below</p>

              <Slider {...settings}>
                <div className='slider-item'>
                  <a href='https://wallit.eu' target='_blank' rel='noopener noreferrer'>
                    <img src={sliderItem1} alt='wallit'></img>
                  </a>
                </div>
                <div className='slider-item'>
                  <a href='https://montessori-mun.org/' target='_blank' rel='noopener noreferrer'>
                    <img src={sliderItem2} alt='montessori' className='mmun'></img>
                  </a>
                </div>
                <div className='slider-item'>
                  <a
                    href='https://revolgy.com/'
                    target='_blank' rel='noopener noreferrer'
                  >
                    <img src={sliderItem3} alt='revolgy'></img>
                  </a>
                </div>
                <div className='slider-item'>
                  <a href='https://corecoin.cc/' target='_blank' rel='noopener noreferrer'>
                    <img src={sliderItem4} alt='corecoin'></img>
                  </a>
                </div>
                <div className='slider-item'>
                  <a target='_blank' rel='noreferrer' href='/#'>
                    <img src={sliderItem6} alt='core'></img>
                  </a>
                </div>
                <div className='slider-item'>
                  <a
                    href='https://github.com/cryptohub-digital'
                    target='_blank' rel='noopener noreferrer'
                  >
                    <img src={sliderItem5} alt='crytohub'></img>
                  </a>
                </div>
                <div className='slider-item'>
                  <a
                    href='https://github.com/cryptohub-digital'
                    target='_blank' rel='noopener noreferrer'
                  >
                    <img src={sliderItem7} alt='crytohub'></img>
                  </a>
                </div>
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}
