import React, { Component } from 'react';
import './styles/nofound.css'

class NotFound extends Component {

    render() {
        return (
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="row">
                        <h2 className="nofound mt-10 mb-10">404 No Found</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default NotFound;