import React from 'react';
import styled from 'react-emotion';

import {Frame, RowApart} from "../elements";

class Navbar extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <Nav>
                <NavInner>
                    <NavTitle>
                        Eli Badgio
                    </NavTitle>
                    <div />
                </NavInner>
            </Nav>
        )
    }
}

const Nav = styled(Frame)`
    height: 57px;
    width: 100%;
    position: fixed;
    top:0;
    z-index: 1;
    color: #fff;
`;

const NavInner = styled(RowApart)`
    max-width: 1400px;
    padding: 0 20px;
`;

const NavTitle = styled('h2')`
    color: #fff;
`


export default Navbar;