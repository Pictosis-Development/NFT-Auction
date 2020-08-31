import React, { useState } from 'react';
import styled from 'styled-components';


const List = styled.ul`
    display: flex;
    li {
        cursor: pointer;
        list-style: none;
        margin: 0;
        margin-right: 2em;
        margin-bottom: 2em;
        border-bottom: 2px solid transparent;
        padding-bottom: 0.2em;
        color: #C8C8C8;
        font-size: 0.8em;
        transition: all 0.2s;
        font-weight: bold;
        &:hover {
            border-bottom: 2px solid black;
            color: Black;
        }
    }
`


const menuItems = [
    'On Sale',
    'My NFTs',
    'Created'
]

function TableSectionDashboard() {
    const [active, setActive] = useState('My NFTs')

    const activeStyle = { color: 'black', borderBottom: '2px solid black' }

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

export default TableSectionDashboard;