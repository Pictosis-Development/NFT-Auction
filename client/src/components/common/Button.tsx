import styled from "styled-components";

const Button = styled.a`
    width: ${props => props.width || '100%'};
    padding: ${props => props.padding || '0.5em 1em' };
    font-size: ${props => props.fontSize || '1em'};
    background-color: #FF00FF;
    color: #F5F5F5;
    border-radius: 15px;
    cursor: pointer;
    outline: none;
    border: none;
    font-weight: 600;
    text-decoration: none;
    color: white;
    text-align: center;
    &:hover {
        opacity: 0.8;
    }
    &:active {
        opacity: 1;
    }
`
export default Button;