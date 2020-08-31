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
        color: #C8C8C8;
        font-size: 0.8em;
        transition: all 0.2s;
        font-weight: bold;
        &:hover {
            border-bottom: 2px solid black;
            color: black;
        }
    }
`

const menuItems = [
    'Info',
    'Owners',
    'History'
]

function TableSectionToken() {

    const [active, setActive] = useState('Info')

    const activeStyle = { color: 'black', borderBottom: '2px solid black' }

    return(
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

export default TableSectionToken;