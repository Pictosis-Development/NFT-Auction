import React from 'react'
import styled from 'styled-components';
import Button from './common/Button'

const MainProfileInfo = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: 4fr 8fr 4fr;
    img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
    }
    .username {
        h4 {
            margin: 0;
        }
        p {
            font-size: 0.7em;
            margin: 0;
        }
    }
    .copy {
        color: #C8C8C8;
        font-size: 0.5em;
        cursor: pointer;
        &::after {
            margin-left: 2px;
            content: 'Copy';
        }
    }
`

const BalanceProfileInfo = styled.div`
    display: flexbox;
    justify-content: space-between;
    margin-top: 1em;
    img {
        width: 15px;
        height: 15px;
        border-radius: 50%;
    }
    .ckb {
        display: flexbox;
        align-items: center;
    }
    .usd {
        font-size: 0.7em;
        color: #74747B;
        font-weight: bold;
    }
    p {
        margin: 0;
    }
`

const OptionsInfo = styled.div`
    margin-top: 1em;
    .option {
        display: flex;
        justify-content: space-between;
        cursor: pointer;
        margin-bottom: 0.5em;
        p, li {
            margin: 0;
        }
        li {
            list-style: none;
        }
        i {
            color: #C8C8C8;
        }
    }
`

function ProfileInfo(props) {

    const { image, username, address, ckbBalance, usdBalance } = props;

    return (
        <>
            <MainProfileInfo>
                <img src={image} alt=""/>
                <div className="username">
                    <h4>{username}</h4>
                    <p>{address}</p>
                </div>
                <i className="fas fa-copy copy"></i>
            </MainProfileInfo>

            <BalanceProfileInfo>
                <Button
                    background="#FF00FF"
                    color="#F5F5F5"
                    padding="0.2em 0.6em"
                    fontSize="0.5em"
                >
                    balance
                </Button>
                <div className="balance">
                   
                    <div className="cuantity">
                        <div className="ckb">
                            <img src="../nervos-logo.png" alt="nervos-logo"/>
                            <p>{ckbBalance} CKB</p>
                        </div>
                        <p className="usd">(${usdBalance})</p>
                    </div>
                </div>
            </BalanceProfileInfo>
            <hr/>
            <OptionsInfo>
                <div className="option">
                    <p>Setting</p>
                    <i className="fas fa-cog"></i>
                </div>
                <div onClick={() => {
                    localStorage.removeItem('token')
                }}
                className="option">
                    <p>Disconnect Wallet</p>
                    <i className="far fa-times-circle"></i>
                </div>
            </OptionsInfo>
        </>
    )
}
 
export default ProfileInfo;