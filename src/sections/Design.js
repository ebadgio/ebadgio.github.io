import React from 'react';
import styled from 'react-emotion';

import {Column, RowWrap, RowCenter, Subtitle, Note, Text, Section, SectionHeader, SubHeader, Frame} from "../elements";

const ColFit = styled(Column)`
    margin: 20px;
    width: fit-content;
`;

class Design extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Section>
                <SectionHeader>WEB DEVELOPMENT</SectionHeader>
                {/*<SubHeader>*/}
                    {/*WEB*/}
                {/*</SubHeader>*/}
                <RowCenter>
                    <WebCard title={'MIRANDA MORRIS ART'}
                          snapshot={'/ebadgio.github.io/assets/mm-art.png'}
                          description={'I was hired by Miranda to develop a portfolio website to display her beautiful artwork.' +
                          ' I wanted viewers of her site to feel like they were at a real art gallery, so I focused on creating a flat ui, with pale grey shades/accents.'}
                          url={'https://www.mirandamorrisart.com'}
                          basicUrl={'MIRANDAMORRISART.COM'}/>
                    <WebCard title={'STACK HACK TUTORING'}
                          snapshot={'/ebadgio.github.io/assets/sh-landing.png'}
                          description={'Stack Hack Tutoring is a one on one summer programming course that I founded in summer of 2018.' +
                          ' When developing the website, I wanted to create a startupy/modern feel, so that site viewers would already feel like they are a part of tech.'}
                          url={'https://www.stackhacktutoring.com'}
                          basicUrl={'STACKHACKTUTORING.COM'}/>
                    <WebCard title={'WALNUT'}
                          snapshot={'/ebadgio.github.io/assets/walnut.png'}
                          description={'Walnut is social media web app that I and my team worked on for many months. We wanted to create a' +
                          ' site focused on building community engagement. Our ui was heavily influenced by Google Material ui principles.'}
                          url={'https://www.walnutnetwork.com'}
                          basicUrl={'WALNUTNETWORK.COM'}/>
                </RowCenter>
                {/*<SubHeader>*/}
                    {/*LOGO/GRAPHIC*/}
                {/*</SubHeader>*/}
                {/*<RowCenter>*/}
                    {/*<ColFit>*/}
                        {/*<LogoWrapper>*/}
                            {/*<Logo src={'https://s3.amazonaws.com/stack-hack-tutoring/coding-vector.svg'}/>*/}
                        {/*</LogoWrapper>*/}
                        {/*<Note>Code Dark</Note>*/}
                    {/*</ColFit>*/}
                    {/*<ColFit>*/}
                        {/*<LogoWrapper>*/}
                            {/*<Logo src={'https://s3.amazonaws.com/stack-hack-tutoring/coding-vector-light.svg'}/>*/}
                        {/*</LogoWrapper>*/}
                        {/*<Note>*/}
                            {/*Code Light*/}
                        {/*</Note>*/}
                    {/*</ColFit>*/}
                    {/*<ColFit>*/}
                        {/*<LogoWrapper className="box" style={{padding: '20px'}}>*/}
                            {/*<Logo src={'https://s3.amazonaws.com/walnut-logo/logo.svg'}/>*/}
                        {/*</LogoWrapper>*/}
                        {/*<Note>*/}
                            {/*Walnut Logo*/}
                        {/*</Note>*/}
                    {/*</ColFit>*/}
                    {/*<ColFit>*/}
                        {/*<LogoWrapper className="box" style={{padding: '20px'}}>*/}
                            {/*<Logo src={'https://s3.amazonaws.com/stack-hack-tutoring/stack-hack-logo-7.svg'}/>*/}
                        {/*</LogoWrapper>*/}
                        {/*<Note>*/}
                            {/*Stack Hack Logo*/}
                        {/*</Note>*/}
                    {/*</ColFit>*/}
                {/*</RowCenter>*/}
            </Section>
        )
    }
}

const Wrapper = styled(Column)`
    width: 420px;
    max-width: 100%;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 10px 3px;
    border-radius: 4px;
    @media (max-width: 420px) {
        margin-right: 0;
        margin-left: 0;
    }
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

const WebCard = ({snapshot, title, description, url, basicUrl}) => {
    return  (
        <a href={url} target="_blank" className="m-20" style={{maxWidth: '100%'}}>
            <Wrapper>
                <SnapshotWrapper>
                    <Snapshot src={snapshot}/>
                </SnapshotWrapper>
                <div className="w-fill p-10 box">
                    <Title>{title}</Title>
                    <Text style={{minHeight: '135px'}}>
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

const LogoWrapper = styled(Frame)`
    height: 150px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 10px 3px;
    border-radius: 4px;
    background: #fff;
    width: fit-content;
    margin-bottom: 10px;
    width: 217px;
`;

const LogoWrapperDark = styled(LogoWrapper)`
    background: #212121;
`;

const Logo = styled('img')`
    height: 100%;
`;

export default Design;