import React from 'react';
import styled from 'styled-components';

const InfoContent = styled.div`
    display: flex;
    padding: 1em 0;
    img {
        height: 50px;
    }
`

function TableSectionInfotoken(props) {

    const { image,
            alt,
            role,
            username
    } = props;
    
    return (
        <>
        <InfoContent>
            <img src={image} alt={alt}/>
            <div className="description">
                <p>{role}</p>
                <p>{username}</p>
            </div>
        </InfoContent>
        <hr/>
        </>
    )
}

export default TableSectionInfotoken;