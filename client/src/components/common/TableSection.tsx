import React, { useState } from 'react';
import styled from 'styled-components';

const List = styled.ul`
    display: flex;
    padding-left:0;
    li {
        cursor: pointer;
        list-style: none;
        margin: 0;
        margin-right: 2em;
        border-bottom: 2px solid transparent;
        padding-bottom: 0.2em;
        color: white;
        font-size: 0.8em;
        transition: all 0.2s;
        font-weight: bold;
        &:hover {
            border-bottom: 2px solid #FF00FF;
            color: #FF00FF;
        }
    }
`

const menuItems = [
    'Design',
    'CryptoArt',
    'Illustration',
    'Collectibles',
    'RareDigitalArt',
    'Photography',
    'DigitalArt',
    'Crowdstorms'
]

function TableSection() {
    const [active, setActive] = useState('CryptoArt')

    const activeStyle = { color: '#FF00FF', borderBottom: '2px solid #FF00FF' }

    return (
            <List>
                {
                    menuItems.map(item => 
                    <li
                        key={item}
                        style={active === item ? activeStyle : {}}
                    >
                        {item}
                    </li> 
                    )
                }
            </List>
    )
}

export default TableSection;