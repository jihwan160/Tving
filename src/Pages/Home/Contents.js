import React, { useEffect, useState } from 'react'

import { Navigation } from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css';
import 'swiper/css/navigation';
import styled from 'styled-components';


const ContentsCover = styled.div`
    margin: 40px 0;
    padding: 0 40px;
    color: #fff;
    height: 400px;
`;

const SlideList = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: baseline;
    font-size: 100px;
    font-weight: bold;
    cursor: pointer;
`;




const Contents = ({url_1}) => {

    const ContentsList = () => {

        const [moives,setMovies] = useState([])

        const option = {
            method: 'GET',
            headers : {
                'Content-Type' : 'application/json; charset=utf-8'
            }
        }
        useEffect(()=>{
            fetch(url_1,option)
            .then(response => response.json())
            .then(response => {
                setMovies(response.results)
            })
        }, [])

        return(
            <ContentsCover>
                <h2 style={{marginBottom:"40px"}}>인기 순위</h2>
                <Swiper
                    modules={[Navigation]}
                    navigation
                    spaceBetween={50}
                    slidesPerView={6}
                >
                    {moives.map((anql,key) => (
                        <SwiperSlide style={{width:"100%",height:"350px"}}>
                            <SlideList key={anql.id}>
                                <img src={`https://image.tmdb.org/t/p/w500/${anql.poster_path}`} alt={key} style={{width:"100%",height:"100%"}}/>
                            </SlideList>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </ContentsCover>
        )
    }

    return (
        <>
            <ContentsList />
        </>
    )
}

export default Contents