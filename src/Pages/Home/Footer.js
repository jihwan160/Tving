import React from 'react'
import styled from 'styled-components'
import './Footer.css'

const Cover = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 40px 20px;
    `;

const FooterTop = styled.div`
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #fff;
    padding-top: 20px;
`;

const FooterTopLeft = styled.div`
    display: flex;
`;

const FooterTopRight = styled.div`
    display: flex;
    align-items: center;
`;

const FooterMid = styled.div`
    color: #a9a9a9;
    font-size: 12px;
    font-weight: normal;
    margin-top: 20px;
`;

const Footer = () => {
    
    const FooterArea = () => {
        return(
            <Cover>
                <FooterTop>
                    <FooterTopLeft>
                        <li style={{marginRight:"30px",cursor:"pointer"}}>고객센터</li>
                        <li style={{marginRight:"30px",cursor:"pointer"}}>이용약관</li>
                        <li style={{marginRight:"30px",cursor:"pointer",fontWeight:"bold"}}>개인정보처리방침</li>
                        <li style={{marginRight:"30px",cursor:"pointer"}}>청소년 보호정책</li>
                        <li style={{marginRight:"30px",cursor:"pointer"}}>법적고지</li>
                        <li style={{marginRight:"30px",cursor:"pointer"}}>이벤트</li>
                        <li style={{marginRight:"30px",cursor:"pointer"}}>인재채용</li>
                    </FooterTopLeft>
                    <FooterTopRight>
                        <select>
                            <option hidden>브랜드 바로가기</option>
                            <option>tvN</option>
                        </select>
                        <span className='line'>|</span>
                        <select>
                            <option hidden>그룹 계열사 바로가기</option>
                            <option>tvN</option>
                        </select>
                    </FooterTopRight>
                </FooterTop>
                <FooterMid>
                    <p className='footerDesc'>
                        <span>대표이사 : 최주희</span>
                        <span className='st'>사업자정보확인</span>
                        <span>사업자등록번호 : 188-88-01893</span>
                        <span>통신판매신고번호 : 2020-서울마포-3641호</span>
                    </p>
                    <p className='footerDesc'>
                        <span>사업장 : 서울특별시 마포구 상암산로 34, DMC디지털큐브 15층(상암동)</span>
                        <span>호스팅사업자 : 씨제이올리브네트웍스(주)</span>
                    </p>
                    <p className='footerDesc'>
                        <span>고객센터 (평일 09시~17시/점심시간 13시~14시)</span>
                        <span className='st'>1:1 게시판 문의</span>
                        <span>대표메일 : tving@cj.net</span>
                        <span>전화번호(ARS) : 1670-1525 (챗봇/채팅 상담 연결)</span>
                    </p>
                    <p className='footerDesc'>
                        <span>ENM 시청자 상담실 (편성 문의 및 시청자 의견) : 080-080-0780</span>
                        <span>Mnet 고객센터(방송편성문의) : 1855-1631</span>
                    </p>
                </FooterMid>
                <p className='copyright'>Copyright © 주식회사 티빙 All right reserved.</p>
            </Cover>
        )
    }
    
    
    
    return (
        <>
            <FooterArea />
        </>
    )
}

export default Footer