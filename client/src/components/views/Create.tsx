import React from 'react';
import styled from 'styled-components';
import { Section } from '../common/Section';
import Button from '../common/Button';
import Form from '../common/Form';

const CreateWrapper = styled.div`
    width: 50%;
    height: 100vh;
    display: grid;
    grid-template-columns: 2fr 1fr;
    padding: 5em 1em;
`

const InfoCreate = styled.div`
    h3 {
        font-size: 2em;
    }
`

const UploadImage = styled.div`
    margin-top: 2em;
    margin-bottom: 2em;
    .select-image {
        display: grid;
        justify-items: center;
        align-items: center;
        width: 100%;
        height: 150px;
        margin-top: 1em;
        border-radius: 15px;
        border: 2px dashed #C8C8C8;
        color: #C8C8C8;
        font-size: 0.6em;
        text-align: center;
        p {
            margin-bottom: 1em;
        }
    }
    h4 {
        font-weight: 600;
    }
    input[type="file"] {
        display: block;
        color: white;
        background-color:#FF00FF;
    }
`

const Preview = styled.div`
    padding: 4.5em 2em;
    .image {
        margin-top: 1em;
        border-radius: 15px;
        width: 100%;
        height: 300px;
        border: 2px solid #C8C8C8;
    }
`

function Create() {
    return (
        <Section background="#F5F5F5">
            <CreateWrapper>
                <InfoCreate>
                    <h3>Create single NFT</h3>
                    <UploadImage>
                        <h4>Upload image</h4>
                        <div className="select-image">
                            <div className="content">
                                <p>Select .gif, .png, .mp4. We recommend to upload <br/> files under 10mb.</p>
                                <input type="file"/>
                            </div>
                        </div>
                    </UploadImage>
                    <Form />
                </InfoCreate>
                <Preview>
                    <h4>Preview</h4>
                    <div className="image"></div>
                </Preview>
            </CreateWrapper>
        </Section>
    )
}

export default Create;