import React from 'react';
import styled from 'react-emotion';

import {Column, RowWrap, Subtitle, Note, Text, Section, SectionHeader, SubHeader} from "../elements";
const RowCenter = styled(RowWrap)`
    justify-content: center;
`;

class Design extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Section>
                <SectionHeader>DESIGN</SectionHeader>
                <SubHeader>
                    WEB
                </SubHeader>
                <RowCenter>
                    <Card title={'MIRANDA MORRIS ART'}
                          snapshot={'/ebadgio.github.io/assets/mm-art.png'}
                          description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo\n' +
                          '                    d tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia'}
                          url={'https://www.mirandamorrisart.com'}
                          basicUrl={'MIRANDAMORRISART.COM'}/>
                    <Card title={'STACK HACK TUTORING'}
                          snapshot={'/ebadgio.github.io/assets/sh-landing.png'}
                          description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo\n' +
                          '                    d tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia'}
                          url={'https://www.stackhacktutoring.com'}
                          basicUrl={'STACKHACKTUTORING.COM'}/>
                    <Card title={'WALNUT'}
                          snapshot={'/ebadgio.github.io/assets/walnut.png'}
                          description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo\n' +
                          '                    d tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia'}
                          url={'https://www.walnutnetwork.com'}
                          basicUrl={'WALNUTNETWORK.COM'}/>
                </RowCenter>
                <SubHeader>
                    LOGO/GRAPHIC
                </SubHeader>
            </Section>
        )
    }
}

const Wrapper = styled(Column)`
    width: 400px;
    max-width: 100%;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 10px 3px;
    max-width: calc(100% - 20px);
    border-radius: 4px;
`;

const SnapshotWrapper = styled('div')`
    width: 100%;
    max-height: 200px;
    overflow: hidden;
`;

const Snapshot = styled('img')`
    width: 100%;
`;

const Title = styled('h2')`
    color: #424242;
    margin-top: 10px;
    margin-bottom: 0;
`;

const Card = ({snapshot, title, description, url, basicUrl}) => {
    return  (
        <a href={url} target="_blank" className="m-20">
            <Wrapper>
                <SnapshotWrapper>
                    <Snapshot src={snapshot}/>
                </SnapshotWrapper>
                <div className="w-fill p-10 box">
                    <Title>{title}</Title>
                    <Text>
                        {description}
                    </Text>
                    <div className="mr-10 ml-auto" style={{width: 'fit-content'}}>
                        <Note>{basicUrl}</Note>
                    </div>
                </div>
            </Wrapper>
        </a>
    );
};

export default Design;