import React from 'react';

export default class Home extends React.Component {
    componentWillMount() {
    }

    render() {
        console.log(this.props);
        return (
            <div>
                Home
            </div>
        );
    }
} 