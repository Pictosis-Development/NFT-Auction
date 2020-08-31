import React, { useContext } from 'react';
import styled from "styled-components";

import { Section, Container } from '../common/Section';
import Button from '../common/Button';


import { ModalContext, ModalActions, Modals, WalletModalPanels } from "../../store/ModalStore";
import { WalletContext } from "../../store/WalletStore";

const HomeContent = styled.div`
    padding-top: 10em;
    padding-bottom: 6em;
    display: grid;
    justify-items: center;
    img {
        width: 500px;
        margin-bottom: 2em;
    }
    button {
        margin-top: 2em;
    }
`

function Home() {

    const { walletState } = useContext(WalletContext);
    const { modalDispatch } = useContext(ModalContext);

    const walletText = {
        address: "-",
    };

    const openWalletModal = () => {
        if (walletState.activeAccount) {
          modalDispatch({
            type: ModalActions.setModalState,
            modalName: Modals.walletModal,
            newState: {
              visible: true,
              activePanel: WalletModalPanels.VIEW_ACCOUNT,
            },
          });
        } else {
          modalDispatch({
            type: ModalActions.setModalState,
            modalName: Modals.walletModal,
            newState: {
              visible: true,
              activePanel: WalletModalPanels.CONNECT_ACCOUNT,
            },
          });
        }
    };

    if (walletState.activeAccount) {
        walletText.address = walletState.activeAccount.address;
    }


    return (
        <Section background="black">
                <HomeContent>
                    <img src="homeImage.svg" alt="home"/>
                    <Button 
                        width="30%"
                        onClick={openWalletModal}
                    >
                        Connect Wallet
                    </Button>
                    <Button width="30%">Sign Up</Button>
                </HomeContent>
        </Section>
    )
}

export default Home