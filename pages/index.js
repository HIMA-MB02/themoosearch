import React from 'react';
import Layout from './components/layout';
import Router from 'next/router'

export default class Index extends React.Component {

    constructor() {
        super();

        this.state = {
            searchField: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            searchField: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        Router.push({pathname:'/movies-list', query: {value: this.state.searchField}});
    }
    render() {
        return (
            <Layout>
                <br /><br />
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-3 text-center">
                            <h1>
                                MooSearch
                            </h1>
                            <p>
                                Search for any movie.
                            </p>
                            <form method="post" class="form-group" onSubmit={this.onSubmit}>
                                <input class="form-control" type="text" placeholder="Search" name="search" id="search" onChange={this.handleChange} /><br />
                                <button class="btn btn-primary" type="reset">Clear</button> &nbsp;&nbsp;
                                <button class="btn btn-primary" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}
