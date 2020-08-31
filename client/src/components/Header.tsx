import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../components/common/Button';
import ToggleCircle from './common/ToggleCircle';
import ProfileInfo from './ProfileInfo';

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    width: 100%;
    background: #FFF;
    padding: 0 2em;
    text-transform: uppercase;
    z-index: 1000;
`

const LeftHeader = styled.div`
`

const RightHeader = styled.div`
    display: flex;
    align-items: center;
    ul {
        display: flexbox;
        margin-right: 1em;
        li {
            font-size: 0.8em;
            list-style: none;
            color: black;
            margin: 0;
            margin-right: 2em;
            transition: all 0.2s;
            &:hover {
                color: #FF00FF;
            }
        }
        a {
            color: inherit;
            text-decoration: none;
            font-weight: bold;
        }
    }
`

const Title= styled.a`
    img {
        width: 50%;
    }
`

function Header() {

    const [login, setLogin] = useState(localStorage.getItem('token'));

    const  notLoginMenuStyles = {
        background: 'black',
        
    }
    
    return (
        <HeaderWrapper
            style={!login ? notLoginMenuStyles : {}}
        >
            <LeftHeader>
                <Title href="/">
                    <img style={!login ? {filter: 'invert(1)'} : {}} className="logo" alt="nervos" src="../pictosis.svg"/>
                </Title>
            </LeftHeader>

            <RightHeader
                style={!login ? {display: 'none'} : {}}
            >
                <ul>
                    <li><a href="/marketplace">Marketplace</a></li>
                    <li><a href="/dashboard">My nfts</a></li>
                </ul>
                <Button href="/create">Create Nfts</Button>
                <ToggleCircle></ToggleCircle>
                <ToggleCircle
                    image="../profile.svg"
                >
                    <ProfileInfo 
                        image="../profile.svg"
                    />
                </ToggleCircle>
            </RightHeader>

        </HeaderWrapper>
    )
}

export default Header;