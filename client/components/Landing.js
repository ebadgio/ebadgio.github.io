import React from 'react';
import styled from 'react-emotion';

import {Frame} from "../elements";

class Landing extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Cover>

            </Cover>
        )
    }

}

const Cover = styled(Frame)`
    height: 100vh;
    background: #212121;
    width: 100%;
    color: #fff;
`;

export default Landing;