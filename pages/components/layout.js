import React from 'react';
import Navbar from './navbar';
import Head from 'next/head'

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Head>
                    <title>MooSearch - OMDB API Implementation</title>
                    <link rel="stylesheet" href="https://bootswatch.com/4/darkly/bootstrap.min.css"></link>
                </Head>
                <Navbar />
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}