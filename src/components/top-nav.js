import React from 'react';
import { connect } from 'react-redux';

import './top-nav.css';

export default function TopNav(props) {
    return (
        <nav>
            <ul className="clearfix">
                <li>
                    <a className="what" href="#">
                        What?
                    </a>
                </li>
                <li>
                    <a className="new" href="#">
                        + New Game
                    </a>
                </li>
            </ul>
        </nav>
    );
}

