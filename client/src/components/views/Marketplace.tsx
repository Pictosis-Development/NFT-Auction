import React from 'react';
import { Section } from '../common/Section';
import styled from "styled-components";
import TableSection from '../common/TableSection';
import Select from '../common/Select'
import GridCards from '../common/GridCards';

import Card from '../common/Card';

const HeaderMarketplace = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;
    padding: 0 5%; 
    ul {
        display: flex;
    }
`


function Marketplace() {
    return (
        <Section background="black">
            <HeaderMarketplace>
                <TableSection />
                <Select />
            </HeaderMarketplace>
            <GridCards>
                <Card imgSrc="https://cdn.discordapp.com/attachments/748730208667959386/749706140400746496/image0.gif" name="Tourist" amt="500.5"/>
                <Card imgSrc="https://cdn.discordapp.com/attachments/748730208667959386/749704798407753758/image8.gif" name="Traveling" amt="700.8"/>
                <Card imgSrc="https://cdn.discordapp.com/attachments/748730208667959386/749704797938253849/image7.gif" name="Rolling" amt="900.3"/>
                <Card imgSrc="https://cdn.discordapp.com/attachments/748730208667959386/749704797380280510/image6.gif" name="Selfie" amt="25"/>
                <Card imgSrc="https://cdn.discordapp.com/attachments/748730208667959386/749704797090742423/image5.gif" name="Diversity" amt="80"/>
                <Card imgSrc="https://cdn.discordapp.com/attachments/748730208667959386/749704796784689445/image4.gif" name="Splash of Jungle" amt="120"/>
                <Card imgSrc="https://cdn.discordapp.com/attachments/748730208667959386/749704796524511264/image3.gif" name="Oh yeah!" amt="945"/>
                <Card imgSrc="https://cdn.discordapp.com/attachments/748730208667959386/749704796205875250/image2.gif" name="Uma" amt="1122"/>
                <Card imgSrc="https://cdn.discordapp.com/attachments/748730208667959386/749704795895627826/image1.gif" name="Dale Fruta" amt="1560"/>
                <Card imgSrc="https://cdn.discordapp.com/attachments/748730208667959386/749704795446837399/image0.gif" name="Diablo PÍllaro " amt="1990"/>
             
            </GridCards>
        </Section>
    )
}

export default Marketplace