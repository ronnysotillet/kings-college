import React from 'react';
import NavBar from './navbar';
import Foot from './foot';


function Layout(props) {

    return (<div className="main">
        <NavBar />
        {props.children}
        <Foot />
    </div>)
}

export default Layout;