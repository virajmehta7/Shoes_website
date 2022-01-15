import React from 'react'
import styled from 'styled-components';
import { products } from '../data';
import ProductItem from './ProductItem';

const Container = styled.div`
    display: flex;
    padding: 20px;
    padding-top: 60px;
    flex-wrap: wrap;
`;

const Product = () => {
    return (
        <Container>
            {products.map(item=>(
                <ProductItem item={item} key={item.id} />
            ))}
        </Container>
    )
}

export default Product
