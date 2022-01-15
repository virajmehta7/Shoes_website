import React from 'react'
import styled from 'styled-components';
import { categories } from '../data';
import CategoryItem from './CategoryItem';

const Container = styled.div`
    display: flex;
    padding: 20px;
    padding-top: 80px;

    @media screen and (max-width: 740px) {
        padding-top: 30px;
    }
`;

const Categories = () => {
    return (
        <Container>
            {categories.map(item=>(
                <CategoryItem item={item} key={item.id}/>
            ))}
        </Container>
    )
}

export default Categories
