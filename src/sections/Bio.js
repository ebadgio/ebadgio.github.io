import React from 'react';

import {Column, Section, RowApart, Text, Link, Row, RowFit, SectionHeader} from "../elements";
import {Avatar, ButtonOutlinePrimary, ButtonIcon} from "../components/components";

class Bio extends React.Component {
    constructor() {
        super();
    }


    render() {
        return(
            <Section id="bio">
                <SectionHeader>ABOUT ME</SectionHeader>
                <RowApart id="bio-info">
                    <Avatar src="assets/eli-2-web.jpg" id="avatar"/>
                    <Column id="links">
                        <a href="assets/BadgioE_Resume09-18.pdf" target="_blank">
                            <ButtonOutlinePrimary>
                                <i data-feather="download" className="mr-10" style={{height: '16px', width: '16px'}}/>
                                Resume
                            </ButtonOutlinePrimary>
                        </a>
                        <RowFit>
                            <a className="mr-10" href="https://github.com/ebadgio" target="_blank">
                                <ButtonIcon>
                                    <i className="icon-link" data-feather="github"/>
                                </ButtonIcon>
                            </a>
                            <a className="mr-10" href="https://linkedin.com/in/eli-badgio" target="_blank">
                                <ButtonIcon>
                                    <i className="icon-link" data-feather="linkedin"/>
                                </ButtonIcon>
                            </a>
                            <a className="mr-10" href="https://facebook.com/eli.badgio" target="_blank">
                                <ButtonIcon>
                                    <i className="icon-link" data-feather="facebook"/>
                                </ButtonIcon>
                            </a>
                            <a href="mailto:eli.badgio@gmail.com">
                                <ButtonIcon>
                                    <i className="icon-link" data-feather="mail"/>
                                </ButtonIcon>
                            </a>
                        </RowFit>
                    </Column>
                </RowApart>
                <Text style={{color: '#757575'}} id="bio-roles">
                    FOUNDER <Link href="https://stackhacktutoring.com"
                                  target="_blank">@STACK HACK TUTORING</Link>
                    <br />
                    SUMMER 2018 SOFTWARE ENGINEERING INTERN <Link href="https://sap.com"
                                                        target="_blank">@SAP</Link>
                    <br />
                    FREELANCE WEB DEVELOPER
                </Text>
                <Text style={{maxWidth:'900px'}} id="bio-blurb">
                    Welcome to my website! Right now I am finishing up my senior year at Rice University,
                    where I am double majoring in Computer Science and Cognitive Science. I am passionate
                    about all things related to design (web, software, ui/ux etc.). In my spare time I like to work on websites, bike,
                    longboard, play ultimate frisbee, and just walk around. Keep scrolling to learn about some
                    of my work! If you are interested in seeing my work experience please check out my resume
                    or linkedin account!
                </Text>
            </Section>
        )
    }
}

export default Bio;