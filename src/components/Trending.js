import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    padding: 20px;
    position: relative;
`;

const Heading = styled.h5`
    font-size: 30px;
    color: black;
    padding-top: 15px;
`;

const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: contain;
`;

const Title = styled.h1`
    font-size: 30px;
    color: black;
    justify-content: center;
    flex: 1;
    display: flex;
    font-weight: lighter;

    @media screen and (max-width: 740px) {
        font-size: 20px;
    }
`;

const Trending = () => {
    return (
        <Container>
            <Heading>Trending</Heading>
            <Image src ="https://hips.hearstapps.com/bpc.h-cdn.co/assets/16/11/1600x800/landscape-1458242073-new-nike-hyperadapt-shoes.jpg?resize=1200:*" />
            <Title>
                Nike HyperAdapt 1.0
            </Title>
        </Container>
    )
}

export default Trending
