import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './styles/buttombar.css'


class ButtomBar extends Component {

    render() {
        let classIcon = "icon "+this.props.classIcon;
        return (
            <Link to={this.props.route} className="buttomBar">
                <div>
                    <i className={classIcon}></i>
                </div>
                <div>
                    <p className="title">{this.props.title}</p>
                </div>
            </Link>
        )
    }

}

export default ButtomBar;