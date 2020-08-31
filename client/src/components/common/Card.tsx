import React from 'react'
import styled from "styled-components";
import Button from '../common/Button'

const CardWrapper = styled.div`
    padding: 1em 0.7em;
    background: #FFF;
    border-radius: 15px;
    margin: 0;
    -webkit-box-shadow: 0px 0px 10px -1px rgba(130,130,130,1);
    -moz-box-shadow: 0px 0px 10px -1px rgba(130,130,130,1);
    box-shadow: 0px 0px 10px -1px rgba(130,130,130,1);
`

const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    img {
        width: 25px;
        border-radius: 50%;
        cursor: pointer;
    }
    .menu-card {
        cursor: pointer;
        display: flex;
        align-items: center;
        div {
            height: 4px;
            width: 4px;
            background: #74747B;
            border-radius: 50px;
            margin-right: 1px;
        }
    }
`
const CardImage = styled.div`
    height: 120px;
    width: 100%;
    background: #74747B;
    margin-top: 1em;

    img {
        height: 100%;
        max-width: 100%;
    }
`

const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    .status {
        margin-top: 0.5em;
        float: left;   
        width: 60%;
        font-size: 0.6em;
    }
    .name {
        h4 {
            margin: 0;
            margin-top: 0.5em;
            float: left;
        }
    }
    .price {
        display: flex;
        margin-top: 0.5em;
        align-items: center;
        width: 100%;
        img {
            margin: 0;
            width: 15px;
            height: 15px;
            margin-right: 0.5em;
        }
        p {
            margin: 0;
            font-size: 0.8em;
            font-weight: bold;
        }
        .quantity {
            color: #C8C8C8;
            font-size: 0.8em;
            margin-left: 0.5em;
        }
    }
    
`

const Link = styled.a`
    color: black;
    text-decoration: none;
`

function Card(props) {
    const imgSrc = props.imgSrc || null;
    const nftName = props.name || "NFT"
    const amt = props.amt || "5.5"
    return (
        <Link href="/token/1">
        <CardWrapper>
            <CardHeader>
                <img src="profile.svg" alt="profile"/>
                <div className="menu-card">
                    <div className="dot-one"></div>
                    <div className="dot-two"></div>
                    <div className="dot-three"></div>
                </div>
            </CardHeader>
            <CardImage>
                {imgSrc && <img src={imgSrc}/>}
            </CardImage>
            <CardInfo>
                <Button
                    className="status"
                    background="#FF00FF"
                    color="#F5F5F5"
                    padding="0.2em 0.6em"
                    fontSize="0.8em"
                >
                    On Sale
                </Button>
                <div className="name">
                    <h4>{nftName}</h4>
                </div>
                <div className="price">
                    <img src="nervos-logo.png" alt=""/>
                    <p>CKB {amt} </p>
                    <p className="quantity">• 1/1</p>
                </div>
            </CardInfo>
        </CardWrapper>
        </Link>
    )
}

export default Card;