import React, { useState } from 'react';
import styled from 'styled-components';

const BodyToggleCircle = styled.div`
    margin-left: 0.5em;
    z-index: 1000;
    img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        cursor: pointer;
    }
`

const ToggleBody = styled.div`
    border-radius: 5px;
    right: 2%;
    position: absolute;
    box-shadow: 0.4px 0.4px 2px 0.5px #74747B;
    padding: 1em;
    background: #FFF;
`

const ToggleCircle = props => {
    const { children, image, imageAlt } = props;
    const [toggle, setToggle] = useState(false);

   return (
    <BodyToggleCircle>
        <img
            onClick={() => setToggle(!toggle) }
            src={image}
            alt={imageAlt}/>
        {   
            toggle ?
            <ToggleBody>
                { children }
            </ToggleBody>
            : null 
        }
    </BodyToggleCircle>
   )
}

export default ToggleCircle;