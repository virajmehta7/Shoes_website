import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    flex: 1;
    margin: 10px;
    min-width: 400px;
    cursor: pointer;
`;

const Image = styled.img`
    width: 100%;
    height: 75%;
    object-fit: cover;
`;

const Info = styled.div`
    width: 100%;
    height: 100%;
    display: inline;
`;

const Name = styled.h6`    
    color: black;
    font-size: 20px;
`;

const Price = styled.h6`
    color: black;
    font-size: 16px;
    font-weight: lighter;
`;

const ProductItem = ({item}) => {
    return (
        <Container>
            <Image src={item.img} />
            <Info>
                <Name>{item.name}</Name>
                <Price>{item.price}</Price>
            </Info>
        </Container>
    )
}

export default ProductItem
