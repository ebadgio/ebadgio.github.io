import React from 'react';
import styled from 'react-emotion';

import {Column, RowFit, Row, RowCenter, SubTitle, Note, Text, Section, SectionHeader, Frame} from "../elements";
import {ButtonIconLight} from "../components/components";

const DarkSection = styled(Section)`
    background: #424242;
    margin-bottom: 0;
    align-items: center;
`;

const Bottom = () => {
    return (
        <DarkSection>
            <RowFit>
                <a className="mr-10" href="https://github.com/ebadgio" target="_blank">
                    <ButtonIconLight>
                        <i className="icon-link" data-feather="github"/>
                    </ButtonIconLight>
                </a>
                <a className="mr-10" href="https://linkedin.com/in/eli-badgio" target="_blank">
                    <ButtonIconLight>
                        <i className="icon-link" data-feather="linkedin"/>
                    </ButtonIconLight>
                </a>
                <a className="mr-10" href="https://facebook.com/eli.badgio" target="_blank">
                    <ButtonIconLight>
                        <i className="icon-link" data-feather="facebook"/>
                    </ButtonIconLight>
                </a>
                <a href="mailto:eli.badgio@gmail.com">
                    <ButtonIconLight>
                        <i className="icon-link" data-feather="mail"/>
                    </ButtonIconLight>
                </a>
            </RowFit>
            <Note>&copy; Eli Badgio</Note>
        </DarkSection>
    );
};

export default Bottom;