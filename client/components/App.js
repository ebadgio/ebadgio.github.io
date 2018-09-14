import React from 'react';

import {ColumnCenter} from "../elements";
import Navbar from "./Navbar";
import Landing from "./Landing";

class App extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
           <ColumnCenter>
               <Navbar/>
               <Landing/>

           </ColumnCenter>
        )
    }

}

export default App;