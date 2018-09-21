import React from 'react';
import styled from 'react-emotion';

import {Column, RowFit, Row, RowCenter, SubTitle, Note, Text, Section, SectionHeader, Frame} from "../elements";
import {ButtonIconSimple} from "../components/components";

const RowBetween = styled(Row)`
    justify-content: space-between;
`;


const Projects = () => {
    return (
        <Section>
            <SectionHeader>PROJECTS</SectionHeader>
            <Column className="mr-auto ml-10 p-10">
                <Row>
                    <Systems /><Note>Systems</Note>
                </Row>
                <Row>
                    <Software /><Note>Software</Note>
                </Row>
                {/*<Row>*/}
                    {/*<Mobile /><Note>Mobile</Note>*/}
                {/*</Row>*/}
                <Row>
                    <DataSci /><Note>Data Science</Note>
                </Row>
                <Row>
                    <Ml /><Note>Machine Learning</Note>
                </Row>
                <Row>
                    <Ui /><Note>UI/UX</Note>
                </Row>
                <Row>
                    <Api /><Note>API Design</Note>
                </Row>
                <Row>
                    <Open /><Note>Open Source</Note>
                </Row>
            </Column>
            <RowCenter>
                <ProjectCard title={'WORKSHOP'}
                             link={'https://github.com/ebadgio/workshop'}
                             description={'Website for editing and sharing creative writing works such as short stories, poems, screenplays, personal essays, etc. Core feature: a Medium style rich text editor complete with auto-saving.'}
                             tags={<RowFit><Api /><Ui /></RowFit>}/>
                <ProjectCard title={'WEB PROXY'}
                             description={'Developed a fully functional concurrent web proxy written in C. Implemented the concurrent functionality using a producer/consumer pre-threading approach.'}
                             tags={<RowFit><Systems /><Software /></RowFit>}/>
                <ProjectCard title={'TEXT DOCUMENT CLASSIFIER'}
                             description={'Used Google’s open-source TensorFlow machine learning tool to implement some deep learning architectures in order to classify sequences of raw text into their origin documents.'}
                             tags={<RowFit><DataSci /><Ml /><Software/></RowFit>}/>
                <ProjectCard title={'WALNUT'}
                             link={'https://github.com/ebadgio/walnut'}
                             description={'Walnut is Web app focused on building community engagement. This is the first full stack web app I ever worked on. It was a great way to develop strong MERN stack skills to build on moving forward.'}
                             tags={<RowFit><Api /><Ui /></RowFit>}/>
                <ProjectCard title={'KAIROS FACE RECOGNITION'}
                             link={'https://github.com/ebadgio/kairos-api-demo'}
                             description={'Built a basic React.js web app in order to learn how to use the Kairos face recognition api. Check out the demo on my github.'}
                             tags={<RowFit><Api /></RowFit>}/>
                <ProjectCard title={'TINY SHELL'}
                             description={'Built a "tiny" Unix shell program that supports job control and recognizes and interprets basic built-in Unix commands such as "quit", "fg", "bg", and "jobs". '}
                             tags={<RowFit><Systems /><Software /></RowFit>}/>
                <ProjectCard title={'PART-OF-SPEECH TAGGING'}
                             description={'Designed and implemented a stochastic part-of-speech tagger in Python, base around first and second order Hidden Markov Models. With a 2,000,000 word training corpus, 97.6% accuracy was obtained using my trigram Viterbi model.'}
                             tags={<RowFit><Software /><DataSci /></RowFit>}/>
                <ProjectCard title={'NODE REACT STARTERS'}
                             link={'https://github.com/ebadgio/node-react-starter'}
                             description={'Created two Node.js/React.js web app starter templates: a bare bones, light weight one; and a more robust one too. I use these whenever I\'m starting a new node/react site.'}
                             tags={<RowFit><Open /></RowFit>}/>
                <ProjectCard title={'FLASK BLOG TEMPLATE'}
                             link={'https://github.com/ebadgio/flask-blog-template'}
                             description={'Made this template to use while teaching my Stack Hack students web dev. It\'s a basic blogging web app template made with Python Flask on the backend. It\'s available for everyone as a starting point for their app!'}
                             tags={<RowFit><Open /><Api /><Ui /></RowFit>}/>
            </RowCenter>
        </Section>
    )
};

const Tag = styled('div')`
    height: 10px;
    width: 10px;
    border-radius: 50%;
    margin: 10px;
`;

// '#424242'; // Systems
// '#FFAB00'; // Software
// '#ff6e40'; // Mobile
// '#1de9b6'; // Data Science
// '#00b0ff'; // Machine Learning
// '#8C9EFF'; // UI/UX
// '#b388ff'; // API Design
// '#bdbdbd'; // Open Source

const Software = styled(Tag)`
    background: #FFAB00;
`;

const Systems = styled(Tag)`
    background: #424242;
`;

const Mobile = styled(Tag)`
    background: #ff6e40;
`;

const DataSci = styled(Tag)`
    background: #1de9b6;
`;

const Ml = styled(Tag)`
    background: #00b0ff;
`;

const Api = styled(Tag)`
    background: #b388ff;
`;

const Ui = styled(Tag)`
    background: #8C9EFF;
`;

const Open = styled(Tag)`
    background: #bdbdbd;
`;

const Wrapper = styled(Column)`
    width: 320px;
    box-sizing: border-box;
    padding: 10px;
    margin: 20px;
    max-width: 100%;
`;

const ProjectCard = ({title, description, link, tags}) => {
    return (
        <Wrapper>
            <SubTitle>{title}</SubTitle>
            <Text style={{minHeight: '155px'}}>{description}</Text>
            <RowBetween style={{height: '42px'}}>
                {link ?
                <a href={link} target="_blank">
                    <ButtonIconSimple>
                        <i className="icon-link" data-feather="github"/>
                    </ButtonIconSimple>
                </a> :
                <Note>Course Work</Note>}
                {tags}
            </RowBetween>
        </Wrapper>
    )
};

export default Projects;