import React from 'react'
import './Detail.css'
import { useLocation } from 'react-router-dom'
import Gnb from '../Home/Gnb';
import styled from 'styled-components';
import Footer from '../Home/Footer';


const DetailPageArea = styled.div`
    width: 100%;
    height: 100%;
    padding: 40px;
    font-size: 30px;
    font-weight: bold;
    color: #fff;
`;

const Desc = styled.div`
    font-size: 20px;
    font-weight: normal;
    margin: 20px 0;
`;

const Df = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 40px;
    border-bottom: 1px solid #dedede;
`;

const Detail = () => {
    const location = useLocation();
    const detailDesc = location.state.anql;

    const DetailPage = () =>{
        return(
            <DetailPageArea>
                <Df>
                    <div style={{width:"30%"}}>
                        <p>제목 : {detailDesc.title}</p>
                        <Desc>개봉일 : {detailDesc.release_date}</Desc>
                        <Desc>평점 : {Math.floor(detailDesc.vote_average)}점</Desc>
                        <Desc style={{lineHeight:"40px"}}>줄거리 : {detailDesc.overview}</Desc>
                    </div>
                    <div style={{width:"20%", height:"100%"}}>
                        <img src={`https://image.tmdb.org/t/p/original${detailDesc.poster_path}`} className='backImg'/>
                    </div>
                </Df>
                <div style={{paddingTop:"40px"}}>
                    <img src={`https://image.tmdb.org/t/p/original${detailDesc.backdrop_path}`} className='backImg'/>
                </div>
            </DetailPageArea>
        )
    }

    return (
        <>
            <Gnb />
            <DetailPage />
            <Footer />
        </>
    )
}

export default Detail