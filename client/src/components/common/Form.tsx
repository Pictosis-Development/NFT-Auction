import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../common/Button';

const FormWrapper = styled.form`
    label, input {
        display: block;
        color: black;
    }
    input {
        width: 100%;
        margin-bottom: 2em;
        background: transparent;
        border: none;
        border-bottom: 2px solid #C8C8C8;
        padding: 1em 0;
        outline: none;
    }
    button {
        width: 30%;
    }
`

function Form() {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [royalties, setRoyalties] = useState('');

    return (
        <FormWrapper>
            <label>Name</label>
            <input onChange={(event) => setName(event.target.value)} value={name} type="text" placeholder="E.g. Pictosis + Nervos"/>

            <label>Description</label>
            <input onChange={(event) => setDescription(event.target.value)} value={description} type="text" placeholder="E.g. The first ever NFT minted on Nervos"/>

            <label>Royalties</label>
            <input onChange={(event) => setRoyalties(event.target.value)} value={royalties} type="text" placeholder="E.g. Pictosis + Nervos"/>

            <Button>CREATE</Button>
        </FormWrapper>
    )
}

export default Form;