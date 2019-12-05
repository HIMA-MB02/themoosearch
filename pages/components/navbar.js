import React from 'react';
import Link from 'next/link';

export default class Navbar extends React.Component {

    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <Link href="/"><a className="navbar-brand">MooSearch</a></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarColor02">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link href="/"><a className="nav-link">Home</a></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}