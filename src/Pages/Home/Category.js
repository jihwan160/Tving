import React from 'react'
import styled from 'styled-components'

const SubCategory = styled.div`
    padding: 0 40px;
    margin: 40px 0;
`;

const SubCategoryUl = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    gap: 20px;
`;

const SubCategoryLi = styled.div`
    width: 100%;
    height: 120px;
    background: #262626;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.5s;
    border-radius: 6px;
    &:hover {
        transform: translateY(-10px);
        transition: all 0.5s;
    }
`;

const List = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
]

const Category = () => {
    
    const CategoryList = () => {
        return(
            <SubCategory>
                <SubCategoryUl>
                    {List.map((i,key) => (
                        <SubCategoryLi key={key}>
                            <div style={{width:"140px",height:"70px"}}>
                                <img src={require(`./../../img/SubSlide${i}.webp`)} alt={key+1} style={{width:"100%",height:"100%"}} />
                            </div>
                        </SubCategoryLi>
                    ))}
                </SubCategoryUl>
            </SubCategory>
            )
        }
    return (
        <>
            <CategoryList />
        </>
    )
}

export default Category