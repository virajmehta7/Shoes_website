import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    flex: 1;
    margin: 5px;
    height: 70vh;
    position: relative;
    cursor: pointer;

    @media screen and (max-width: 740px) {
        height: 50vh;
    }
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.6;
`;

const Title = styled.h1`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    color: black;
    padding: 10px;
    font-size: 40px;
    font-weight: bold;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 740px) {
        font-size: 30px;
    }
`;

const CategoryItem = ({item}) => {
    return (
        <Container>
            <Image src={item.img}/>
            <Title>{item.title}</Title>
        </Container>
    )
}

export default CategoryItem
