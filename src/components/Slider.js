import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    height: 85vh;
    width: 100%;
    display: flex;
    position: relative;
`;

const Image = styled.img`
    height: 100%;
    width: 100%;
`;

const Title = styled.h1`
    font-size: 34px;
    position: absolute;
    top: 80px;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-weight: 800;
    font-style: italic;
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
`;

const Slider = () => {
    return (
        <Container>
            <Image src ="https://images.unsplash.com/photo-1587855049254-351f4e55fe2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80" />
            <Title>
                Go Faster, Go Stronger, Never Stop.
            </Title>
            <Button>SHOP NOW</Button>
        </Container>
    )
}

export default Slider
