import React from 'react';
import styled from 'styled-components';

const NotForSaleWrapper = styled.div`
    font-size: 2em; 
`
function NotForSale() {
    return (
        <NotForSaleWrapper> 
            <h3>Not For Sale</h3>
        </NotForSaleWrapper>
    )
}

export default NotForSale;