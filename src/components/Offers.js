import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    height: 40px;
    background-color: #689EB8;
    color: white;
    justify-content: center;
    display: flex;
    align-items: center;
    font-size: 18px;
`;

const Offers = () => {
    return (
        <Container>
            20% off on orders above Rs.9999
        </Container>
    )
}


export default Offers
