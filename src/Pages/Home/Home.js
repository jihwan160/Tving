import React from 'react'
import Gnb from './Gnb'
import SlideImg from './SlideImg'
import Category from './Category'
import Contents from './Contents'
import {api_key} from '../../myAPi'
import Footer from './Footer'

const Home = () => {


  const url_1 = `http://api.themoviedb.org/3/trending/movie/week?api_key=${api_key}&language=ko-KR`
  return (
    <>
        <Gnb content={gnbImg} />
        <SlideImg />
        <Category />
        <Contents url_1={url_1} />
        <Footer />
    </>
  )
}

export default Home

const gnbImg = {
  gnbImg1 : '../../img/tving-logo.svg',
  gnbImg2 : '../../img/tving_icon.webp'
}