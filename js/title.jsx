import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Navigation } from './navigation.jsx';

import './../less/title.less';

export const Title = () => {

    const title="Blank App";
    const aboutBlank="She's a blank app";

    return (
        
        <div className="blank-app-title" >
            <Navigation/>
        	<h1>{title}</h1>
        	<p>{aboutBlank}</p>
        	<Link to="/blankItems">Items</Link>
        </div>
    );
};
