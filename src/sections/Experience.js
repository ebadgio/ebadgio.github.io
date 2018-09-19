import React from 'react';
import styled from 'react-emotion';

import {Column, Title, Subtitle, FaintText, Text, ColumnCenter, Section, SectionHeader, RowWrap} from "../elements";
class Experience extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <Section style={{alignItems: 'center'}}>
                <SectionHeader>EXPERIENCE</SectionHeader>
                <Card company={'SAP'}
                      image={'/ebadgio.github.io/assets/sap-logo.png'}
                      position={'SOFTWARE ENGINEERING INTERN'}
                      dates={'JUNE 2018 - AUGUST 2018 | NEWTOWN SQUARE, PA'}>
                    <Text>
                        <li>
                            Worked on the development of an SAP HANA based Datahub for
                            SaskTel, a Canada based telecommunications company.
                        </li>
                        <li>
                            Analyzed the performance of the Datahub’s daily contract loading
                            process using SAP HANA performance tracing tools.
                        </li>
                        <li>
                            Researched SQL performance tuning techniques and used these
                            techniques to eliminate several performance bottlenecks
                            discovered during analysis.
                        </li>
                        <li>
                            Built a continuous integration testing framework for the Datahub
                            with a combination of an SAP developed server-side JavaScript
                            runtime called XSJS and SAP HANA’s native SQLScript. The
                            framework was added as a package to the production codebase.
                        </li>
                    </Text>
                </Card>
                <Card company={'STACK HACK TUTORING'}
                      image={'/ebadgio.github.io/assets/stack-hack-logo.jpg'}
                      id={'sh-logo'}
                      position={'FOUNDER • LEAD TUTOR'}
                      dates={'MAY 2018 - PRESENT | PHILADELPHIA, PA'}>
                    <Text>
                        <li>
                            Designed the entire syllabus and course materials to tutor Python
                            programming and full stack web development, which includes
                            instructional videos, exercises, and a capstone web-dev project.
                        </li>
                        <li>
                            Providing lessons to six students and counting.
                        </li>
                        <li>
                            Saw over $2500 revenue after just two months.
                        </li>
                        <li>
                            Managing two assistant tutors, who I hired as contractors.
                        </li>
                    </Text>
                </Card>
                <Card company={'THE BLACK SHEEP'}
                      image={'/ebadgio.github.io/assets/the-black-sheep.png'}
                      position={'NEW BUSINESS DEVELOPMENT MANAGER'}
                      dates={'NOVEMBER 2016 - MARCH 2017 | HOUSTON, TEXAS'}>
                    <Text>
                        <li>
                            Gathered new business leads and gauged their interest in
                            executing a marketing campaign.
                        </li>
                        <li>
                            Cultivated relationships with interested clients.
                        </li>
                    </Text>
                </Card>
                <Card company={'FS INVESTMENTS'}
                      image={'/ebadgio.github.io/assets/fs-investments.png'}
                      position={'INTERN'}
                      dates={'JUNE 2014 - AUGUST 2014 | PHILADELPHIA, PA'}>
                    <Text>
                        <li>Worked with a marketing team to improve social media presence across several platforms</li>
                        <li>Analyzed and helped stratify marketing initiative data</li>
                        <li>Edited and restructured a library database for the due-diligence team</li>
                    </Text>
                </Card>
            </Section>
        )
    }
}

const Wrapper = styled(RowWrap)`
    width: 800px;
    box-sizing: border-box;
    padding: 20px 0;
    max-width: 100%;
    margin-bottom: 20px;
`;

const Card = ({image, children, id, company, position, dates}) => {
    return (
        <Wrapper>
            <div>
                <img className="card-image" id={id} src={image}/>
                <Title>{company}</Title>
            </div>
            <div className="ml-auto" style={{width: '500px'}}>
                <Subtitle>{position}</Subtitle>
                <FaintText>{dates}</FaintText>
                {children}
            </div>
        </Wrapper>
    );
};

export default Experience;