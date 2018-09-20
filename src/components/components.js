import React from 'react';
import styled from 'react-emotion';

import {Frame} from "../elements";

const Wrapper = styled(Frame)`
    border-radius: 50%;
    overflow: hidden;
`;

export const Avatar = (props) => {
    return (
        <Wrapper id={props.id}>
            <img src={props.src} style={{height: '100%'}}/>
        </Wrapper>
    );
};

const Button = styled('div')`
    height: 40px;
	width: fit-content;
	border-radius: 6px;
	margin: 10px 0;
	cursor: pointer;
	padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-transition: color .35s ease, background .35s ease;
	transition: color .35s ease, background .35s ease;
	font-size: 16px;
	font-family: sans-serif;
`;

const ButtonOutline = styled(Button)`
    border: 1px solid;
`;

export const ButtonOutlinePrimary = styled(ButtonOutline)`
    color: #8c9eff;
    &:hover {
        color: #5870cb
    }
`;

export const ButtonPrimary = styled(Button)`
    background: #8c9eff;
    color: #fff;
    &:hover {
        background: #5870cb
    }
`;

export const ButtonIcon = styled(Button)`
    border-radius: 50%;
    box-sizing: border-box;
    padding: 10px;
    color: #bdbdbd;
    border: 1px solid;
    height: 42px;
    &:hover {
        color: #757575;
    }  
`;

export const ButtonIconSimple = styled(ButtonIcon)`
    border: none;
    margin: 0;
`;

export const ButtonIconLight = styled(ButtonIcon)`
    &:hover {
        color: #fff !important;
    }
`;
