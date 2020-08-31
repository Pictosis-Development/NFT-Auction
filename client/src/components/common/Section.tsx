import styled from "styled-components";

export const Section = styled.section`
    background-color: ${props => props.background};
    width: 100%;
    height: ${props => props.height ||'100%'};
    display: grid;
    justify-items: center;
    align-items: center;
    padding: 1em;
`

export const Container = styled.div`
    max-width: 80%;
    margin: 0 auto;
`