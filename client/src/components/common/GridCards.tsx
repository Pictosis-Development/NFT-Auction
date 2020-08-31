import React from 'react';
import styled from "styled-components";

const Grid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 1em;
    padding: 0 5%;
    margin-top: '60px';
`

function GridCards(props) {
    const { children } = props;
    return (
        <Grid>
            {children}
        </Grid>
    )
}

export default GridCards;