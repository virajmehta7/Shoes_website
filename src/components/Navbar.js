import {Input} from '@material-ui/core';
import { Menu, Person, Search, ShoppingBasket } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    height: 60px;
`;


const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;


const Left = styled.div`
    flex: 1;
`;
const Logo = styled.div`
    font-weight: bold;
    font-size: 30px;
`;


const Center = styled.div`
    flex: 1;
    text-align: center;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;
const MenuItem = styled.div`
    font-size: 18px;
    color: black;
    :hover {
        cursor: pointer;
        text-decoration: underline;
        text-decoration-thickness: 2px;
        text-underline-position: under
    }

    @media screen and (max-width: 740px) {
        display: none;
    }

`;


const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;
const SearchBar = styled.div`
    border: 0.5px solid transparent;
    border-radius: 50px;
    background-color: #FAFAFA;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;

    @media screen and (max-width: 740px) {
        display: none;
    }

`;

const SMenuIcon = styled.div`
    display: flex;
    @media screen and (min-width: 740px) {
        display: none;
    }
`;


const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo>VM.</Logo>
                </Left>
                <Center>
                    <MenuItem>Men</MenuItem>
                    <MenuItem>Women</MenuItem>
                    <MenuItem>Kids</MenuItem>
                    <MenuItem>Sale</MenuItem>
                </Center>
                <Right>
                    <SearchBar>
                        <Search style={{paddingRight: 5, fontSize: '26'}}/>
                        <Input
                            disableUnderline
                            placeholder='Search'
                        />
                    </SearchBar>
                    <Person style={{paddingRight: 20, paddingLeft: 25}}/>
                    <ShoppingBasket style={{paddingRight: 20}}/>
                    <SMenuIcon>
                        <Menu/>
                    </SMenuIcon>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar