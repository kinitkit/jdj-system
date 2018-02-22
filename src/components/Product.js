import React from 'react';

export default class Product extends React.Component {
    componentWillMount() {
    }

    render() {
        console.log(this.props);
        return (
            <div>
                Product
            </div>
        );
    }
} 