import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    height: 85vh;
    padding: 20px;
    position: relative;
`;

const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`;

const Title = styled.h1`
    font-size: 30px;
    color: black;
    justify-content: center;
    flex: 1;
    display: flex;
    padding-top: 10px;

    @media screen and (max-width: 740px) {
        font-size: 20px;
    }
`;

const Button = styled.button`
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    background-color: #689EB8;
    border: none;
    font-size: 30px;
    border-radius: 25px;
    padding: 20px 60px;
    align-items: center;
    justify-content: center;
    display: flex;
    cursor: pointer;

    @media screen and (max-width: 740px) {
        font-size: 25px;
        padding: 20px 30px;
    }
`;

const Shop = () => {
    return (
        <Container>
            <Image src ="https://images.unsplash.com/photo-1587855049254-351f4e55fe2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80" />
            <Button>SHOP NOW</Button>
            <Title>
                GO FASTER, GO STRONGER, NEVER STOP.
            </Title>
        </Container>
    )
}

export default Shop
