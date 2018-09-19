import React from 'react';
import styled from 'react-emotion';

import {Section, SectionHeader} from "../elements";


const ColoredSection = styled(Section)`
    background: #82b1ff;
`;

class Skills extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <ColoredSection>
                <SectionHeader style={{color: '#fff'}}>SKILLS</SectionHeader>
            </ColoredSection>
        )
    }
}

export default Skills;