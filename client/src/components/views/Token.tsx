import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

import NotForSale from '../common/TokenStatus/NotForSale';
import TableSectionToken from '../common/TableSectionToken';
import TableSectionInfoToken from '../common/TableSectionInfoToken';

const TokenWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 9fr 3fr;
`

const TokenContent = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    justify-items: center;
    align-items: center;
    figure {
        width: 400px;
        height: 400px;
        background: #C8C8C8;
    }
`

const TokenInfo = styled.div`
    padding: 2em 1em;
    background: #F5F5F5;
    .name {
        h3 {
            font-size: 2.5em; 
            margin-bottom: 0.1em;
        }
        p {
            margin-bottom: 1em;
            color: #74747B;
        }
    }
`

const Status = styled.div`
    margin-top: 1em;
    margin-bottom: 2em;
    button {
        margin-bottom: 1em;
        width: 20%;
        padding: 0.1em 0.5em;
    }
`

const Info = styled.div`
`

const ExpandButton = styled.div`
    display: grid;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: absolute;
    right: 30%;  
    margin-top: 2em;
    cursor: pointer;
    text-align: center;
    align-items: center;
    font-size: 1.5em;
    color: #74747B;
    border: 3px solid #74747B;
`

function Token() {

    const [expand, setExpand] = useState(false)

    const expandStyle ={
        width: '100vw',
        position: 'absolute',
        background: 'white'
    }

    const expandStyleButton = {
        right: '10%',
        top: '0'
    }

    return (
            <TokenWrapper>
                <TokenContent style={expand ? expandStyle : {}}>
                    <figure>
                        <img src="" alt=""/>
                    </figure>
                    <ExpandButton 
                        style={expand ? expandStyleButton : {}}
                        onClick={() => setExpand(!expand)}
                    >
                        {
                            !expand ? <i className="fas fa-expand-alt"></i> : <i className="fas fa-compress-alt"></i>
                        }
                    </ExpandButton>
                </TokenContent>
                
                <TokenInfo>
                    <div className="name">
                        <h3>Name</h3>
                        <p>The first ever NFT minted on Nervos</p>
                    </div>
                    <Status>
                        <Button fontSize="0.8em">status</Button>
                        <NotForSale />
                    </Status>
                    
                    <Info>
                        <TableSectionToken />
                        <TableSectionInfoToken
                            image="../profile.svg"
                            alt="profile"
                            role="owner"
                            username="username"
                        />
                        <TableSectionInfoToken
                            image="../profile.svg"
                            alt="profile"
                            role="owner"
                            username="username"
                        />
                    </Info>
                    <div className="action">

                    </div>
                </TokenInfo>
            </TokenWrapper>
    )
}

export default Token;