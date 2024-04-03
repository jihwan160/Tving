import React from 'react'
import Gnb from './Gnb'
import SlideImg from './SlideImg'
import Category from './Category'
import Contents from './Contents'
import {api_key} from '../../myAPi'

const Home = () => {


  const url_1 = `http://api.themoviedb.org/3/trending/movie/week?api_key=${api_key}&language=ko-KR`
  return (
    <>
        <Gnb />
        <SlideImg />
        <Category />
        <Contents url_1={url_1} />
    </>
  )
}

export default Home