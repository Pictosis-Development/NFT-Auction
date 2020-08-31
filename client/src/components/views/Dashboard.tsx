import React from 'react';
import styled from 'styled-components';
import { Section } from '../common/Section';
import GridCards from '../common/GridCards';
import Card from '../common/Card';
import TableSectionDashboard from '../common/TableSectionDashboard';
const ProfileHeader = styled.div`
    padding-top: 2em;
    width: 100%;
    height: 40%;
    display: grid;
    justify-items: center;
    align-items: center;
    text-align: center;
    margin-bottom: 5em;
    h3 {
        font-size: 2em;
    }
`


function Dashboard() {
    return (
        <Section background="#F5F5F5">
            <ProfileHeader>
                <div className="profile-info">
                    <img src="profile.svg" alt="profile"/>
                    <h3>Username</h3>
                    <p>Wallet address...</p>
                </div>
            </ProfileHeader>
            <TableSectionDashboard />
            <GridCards>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </GridCards>
        </Section>
    )
}

export default Dashboard;