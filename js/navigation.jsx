import React from 'react';
import ReactDOM from 'react-dom';
import { Link, NavLink } from 'react-router-dom';

export const Navigation = () => {

    return (
    	<div>
        <div>
            <ul>
                <li><NavLink to="/">Title Page</NavLink></li>
                <li><NavLink to="/blankItems">Items</NavLink></li>
            </ul>
        </div>
        </div>
    );
};
