import React from 'react'
import styled from 'styled-components'
import './SlideImg.css'

import { Navigation, Pagination } from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SwiperBox = styled.div`
  width: 95%;
  height: 95%;
  margin: 0 auto;
  margin-top: 20px;
  position: relative;
  cursor: pointer;
`;

const SwiperSubTitle = styled.div`
  position: absolute;
  left: 60px;
  bottom: 50px;
  z-index: 3;
  font-size: 20px;
  color: #fff;
  font-weight: bold;
`;

const BoxShadow = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 2;
  background: rgba(0,0,0,0.2);
  width: 100%;
  height: 20%;
`;

const SlideImg = () => {

    const SwiperImg = () => {


        return(
          <>
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              style={{height:"50%"}}
              className='swiper_img'
            >
      
              <SwiperSlide>
                <SwiperBox>
                    <img src={require(`./../../img/swi1.png`)} alt={`swi1`} style={{width:"100%",height:"100%",borderRadius:"10px"}}/>
                    <img src={require(`./../../img/swi1-1.png`)} alt={`swi1-1`} style={{width:"30%",height:"20%",position:"absolute", left:"50px", bottom:"150px"}} />
                    <BoxShadow></BoxShadow>
                    <SwiperSubTitle>
                      <p>큰 자기 유재석 & 아기자기 조세호와</p>
                      <p style={{marginTop:"20px"}}>겉따속차! 예능 대부 이경규</p>
                    </SwiperSubTitle>
                </SwiperBox>
              </SwiperSlide>
      
              <SwiperSlide>
                <SwiperBox>
                    <img src={require(`./../../img/swi2.webp`)} alt={`swi2`} style={{width:"100%",height:"100%",borderRadius:"10px"}}/>
                    <img src={require(`./../../img/swi2-1.webp`)} alt={`swi2-1`} style={{width:"30%",height:"20%",position:"absolute", left:"50px", bottom:"150px"}} />
                    <BoxShadow></BoxShadow>
                    <SwiperSubTitle>
                      <p>방탄소년단(BTS) 제이홉의</p>
                      <p style={{marginTop:"20px"}}>'춤' 초심과 뮤지션 인생을 돌아보다</p>
                    </SwiperSubTitle>
                </SwiperBox>
              </SwiperSlide>
      
              <SwiperSlide>
                <SwiperBox>
                    <img src={require(`./../../img/swi3.webp`)} alt={`swi3`} style={{width:"100%",height:"100%",borderRadius:"10px"}}/>
                    <img src={require(`./../../img/swi3-1.webp`)} alt={`swi3-1`} style={{width:"30%",height:"20%",position:"absolute", left:"50px", bottom:"150px"}} />
                    <BoxShadow></BoxShadow>
                    <SwiperSubTitle>
                      <p>틀어진 관계들</p>
                      <p style={{marginTop:"20px"}}>오해의 끝은?</p>
                    </SwiperSubTitle>
                </SwiperBox>
              </SwiperSlide>
      
            </Swiper>
          </>
        )
      }


    return (
        <>
            <SwiperImg />
        </>
    )
}


export default SlideImg