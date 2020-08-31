import React from 'react';
import styled from 'styled-components';

const SelectWrapper = styled.select`
    padding: 0.5em 1em;
    background-color: #FFF;
    color: Black;
    border-radius: 15px;
    cursor: pointer;
    outline: none;
    border: none;
    font-weight: 600;

`

function Select() {
    return(
        <SelectWrapper>
            <option value="recently-added">Recently added</option>
            <option value="recently-added">Recently added</option>
            <option value="recently-added">Recently added</option>
            <option value="recently-added">Recently added</option>
            <option value="recently-added">Recently added</option>
        </SelectWrapper>
    )
}

export default Select;