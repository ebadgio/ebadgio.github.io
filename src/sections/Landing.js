import React from 'react';
import styled from 'react-emotion';

import {Frame, Column} from "../elements";

const ColumnFit = styled(Column)`
    width: fit-content;
`;

class Landing extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    componentDidMount() {
        setTimeout(() => this.setState({animate: true}), 100);
        setTimeout(() => this.setState({animate1: true}), 300);
        setTimeout(() => this.setState({animate2: true}), 500);
        setTimeout(() => this.setState({animate3: true}), 700);
        setTimeout(() => this.setState({animate4: true}), 900);
        setTimeout(() => this.setState({animate5: true}), 1100);
        setTimeout(() => this.setState({animate6: true}), 1300);
        setTimeout(() => {document.getElementById('landing-arrow').style.opacity = '1'}, 1500);
        document.getElementById('landing-arrow-cont').addEventListener('click', () => {
            document.getElementById('bio').scrollIntoView({behavior: "smooth", block: "start"});
        })
    }

    render() {
        return (
            <Cover>
                <ColumnFit>
                    <div style={{display: 'flex'}}>
                        <Circle style={this.state.animate ? {background: '#673AB7', marginTop: '-30px'} : {marginTop: '-30px'}} />
                        <Circle style={this.state.animate1 ? {background: '#3F51B5', marginLeft: '40px', marginRight: '40px'} : {marginLeft: '40px', marginRight: '40px'}} />
                        <Circle style={this.state.animate2 ? {background: '#2196F3'} : {}} />
                    </div>
                    <CoverHeader style={this.state.animate6 ? {opacity: 1}: {}}>Eli Badgio</CoverHeader>
                    <div style={{display: 'flex'}}>
                        <Circle style={this.state.animate3 ? {background: '#FFC107'} : {}} />
                        <Circle style={this.state.animate4 ? {background: '#FF9800', marginLeft: '40px', marginRight: '40px'} : {marginLeft: '40px', marginRight: '40px'}} />
                        <Circle style={this.state.animate5 ? {background: '#FF5722', marginTop: '40px'} : {marginTop: '40px'}} />
                    </div>
                    <div id="landing-arrow-cont">
                        <i id="landing-arrow" data-feather="arrow-down"/>
                    </div>
                </ColumnFit>
            </Cover>
        )
    }

}

const Cover = styled(Frame)`
    height: 100vh;
    background: #212121;
    width: 100%;
    color: #fff;
    position: relative;
    min-height: 500px;
`;

const Circle = styled('div')`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    transition: background .25s ease;
`;

const CoverHeader = styled('h1')`
    color: #fff;
    margin: 40px;
    transition: opacity .35s ease;
    opacity: 0;
`;

export default Landing;