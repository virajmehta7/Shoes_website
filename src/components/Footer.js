import React from 'react'
import styled from 'styled-components';
import { Facebook, Instagram, Twitter } from "@material-ui/icons";

const Container = styled.div`
    display: flex;
    padding: 20px;
    background-color: black;
    justify-content: space-between;
    align-items: center;
`;

const Left = styled.div`
    flex: 1;
    padding: 20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
`;

const Right = styled.div`
    flex: 1;
`;

const Logo = styled.div`
    font-weight: bold;
    font-size: 30px;
    color: white;
`;

const Desc = styled.div`
    color: white;
    padding-top: 10px;
`;

const Heading = styled.div`
    padding-top: 10px;
    font-weight: bold;
    color: white;
`;

const List = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    color: white;
    padding-top: 10px;
`;

const ListItem = styled.li`
    width: 100%;
    color: white;
    padding-top: 5px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>VM.</Logo>
                <Desc>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus molestie consequat fringilla. In vel viverra dui. In ac augue ac turpis auctor aliquam. Mauris suscipit iaculis tempor. Nullam eu nisi in leo facilisis pellentesque. Morbi a pulvinar neque, in dignissim purus. Phasellus sit amet eros ligula.
                </Desc>
            </Left>
            <Center>
                <Heading>
                    Get Help
                </Heading>
                <List>
                    <ListItem>Order Status</ListItem>
                    <ListItem>Delivery</ListItem>
                    <ListItem>Returns</ListItem>
                    <ListItem>Payment Options</ListItem>
                    <ListItem>Careers</ListItem>
                    <ListItem>News</ListItem>
                </List>
            </Center>
            <Right>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter />
                    </SocialIcon>
                </SocialContainer>
            </Right>
        </Container>
    )
}

export default Footer
