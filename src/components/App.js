import React from 'react';

import Sidebar from './Sidebar';

export default class App extends React.Component {
    renderSidebar() {
        return (
            <Sidebar />
        )
    }
    renderComponent() {
        return (
            <div className="container-fluid">
                <div className="side-body">
                    {this.props.children}
                </div>
            </div>
        );
    }

    render() {
        return (
            <div id="wrapper">
                {this.renderSidebar()}
                {this.renderComponent()}
            </div>
        )
    }
}