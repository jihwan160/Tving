import React from 'react'
import styled from 'styled-components'

import logo from './../../img/tving-logo.svg'
import icon from './../../img/tving_icon.webp'

import { Navigation, Pagination } from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const GnbLeft = styled.div`
  height: 100%;
  display : flex;
  align-items: center;
`;

const GnbRight = styled(GnbLeft)`
  display : flex;
  align-items: center;
`;

const Ul = styled.ul`
  display: flex;
  margin-left: 40px;
`;

const Li = styled.li`
  cursor: pointer;
  margin-right: 40px;
  color: #d9d9d9;
`

const GnbCover = styled.div`
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 75px;
  background: #000;
`

const SwiperBox = styled.div`
  width: 95%;
  height: 95%;
  margin: 0 auto;
  margin-top: 20px;
`;




const Gnb = () => {


const GnbArea = () => {

    return(
        <div>
            <GnbCover>
              <GnbLeft>
                <img src={logo} alt='logo' style={{height:"100%"}} />
                <Ul>
                  <Li>시리즈</Li>
                  <Li>영화</Li>
                  <Li>라이브</Li>
                  <Li>파라마운트+</Li>
                </Ul>
              </GnbLeft>
              <GnbRight>
                <div><i className="fa-solid fa-magnifying-glass" style={{cursor:"pointer",color:"#d9d9d9"}}></i></div>
                <div style={{marginLeft:"40px"}}><img src={icon} alt='logo' style={{width:"30px", height:"30px", cursor:"pointer"}} /></div>
              </GnbRight>
            </GnbCover>
        </div>
    )
}

const SwiperImg = () => {

  const imgList = [
      './../../img/swi_1.png',
      './../../img/swi_1.png',
    ]

  return(
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        style={{height:"700px"}}
      >
        {imgList.map((img,key) => (
          <SwiperSlide key={key}>
            <SwiperBox>
              <img src={img} alt={`swi_${key}`} style={{width:"100%",height:"100%",borderRadius:"10px"}}/>
            </SwiperBox>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

  return (
    <>
        <GnbArea />
        <SwiperImg />
    </>
  )
}

export default Gnb