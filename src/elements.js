import React from 'react';
import styled from 'react-emotion';

export const RowFit = styled('div')`
    display: flex;
	align-items: center;
`;

export const Row = styled(RowFit)`
	width: 100%;
`;

export const RowWrap = styled(Row)`
    flex-wrap: wrap;
`;

export const RowApart = styled(Row)`
    justify-content: apart;
`;

export const Column = styled('div')`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const ColumnCenter = styled(Column)`
    align-items: center;
`;

export const Section = styled(Column)`
    box-sizing: border-box;
    padding: 40px;
    max-width: 1400px;
    margin-bottom: 40px;
`;

export const SectionHeader = styled('h2')`
    color: #757575;
    margin-bottom: 20px;
    align-self: center;
`;

export const Divider = styled('div')`
    width: 100%;
    border-top: 1px solid #e9e9e9;
    margin: 10px 0;
`;

export const Frame = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Text = styled('p')`
    font-size: 16px;
    color: #424242;
    line-height: 22px;
`;

export const FaintText = styled('p')`
    font-size: 16px;
    color: #757575;
`

export const Note = styled('span')`
    font-size: 12px;
    color: #bdbdbd;
`;