import React from 'react';

import {Column, Section, RowApart, Text, Row, RowFit, SectionHeader} from "../elements";
import {Avatar, ButtonOutlinePrimary, ButtonIcon} from "../components/components";

class Bio extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <Section>
                <SectionHeader>ABOUT ME</SectionHeader>
                <RowApart>
                    <Avatar src="/ebadgio.github.io/assets/eli-2-web.jpg" id="avatar"/>
                    <Column id="links">
                        <ButtonOutlinePrimary>
                            <i data-feather="download" className="mr-10" style={{height: '16px', width: '16px'}}/>
                            Resume
                        </ButtonOutlinePrimary>
                        <RowFit>
                            <a className="mr-10">
                                <ButtonIcon>
                                    <i className="icon-link" data-feather="github"/>
                                </ButtonIcon>
                            </a>
                            <a className="mr-10">
                                <ButtonIcon>
                                    <i className="icon-link" data-feather="linkedin"/>
                                </ButtonIcon>
                            </a>
                            <a className="mr-10">
                                <ButtonIcon>
                                    <i className="icon-link" data-feather="facebook"/>
                                </ButtonIcon>
                            </a>
                            <a>
                                <ButtonIcon>
                                    <i className="icon-link" data-feather="mail"/>
                                </ButtonIcon>
                            </a>
                        </RowFit>
                    </Column>
                </RowApart>
                <br />
                <Text style={{maxWidth:'800px'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo
                    d tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia
                    m, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pa
                    riatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit a
                    nim id est laborum.
                </Text>
            </Section>
        )
    }
}

export default Bio;