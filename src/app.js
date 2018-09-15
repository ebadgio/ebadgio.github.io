import React from 'react';
import ReactDOM from 'react-dom';

import {ColumnCenter} from "./elements";
import Navbar from "./components/Navbar";
import Landing from "./sections/Landing";
import Bio from "./sections/Bio";
import Experience from "./sections/Experience";

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <ColumnCenter>
                <Navbar/>
                <Landing/>
                <Bio />
                <Experience/>
            </ColumnCenter>
        )
    }

}

ReactDOM.render(<App />,
document.getElementById('root'));