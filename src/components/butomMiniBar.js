import React, { Component } from 'react';
import './styles/buttombar.css'


class ButtomMiniBar extends Component {

    render() {
        let classIcon = "icon " + this.props.classIcon;
        return (<div>
            <a class="buttomBar" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                <div>
                    <i className={classIcon}></i>
                </div>
                <div>
                    <p className="title">{this.props.title}</p>
                </div>
            </a>
        </div>
        )
    }

}

export default ButtomMiniBar;














