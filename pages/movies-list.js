import React from 'react'
import Layout from './components/layout';
import Fetch from 'isomorphic-unfetch'
import Router from 'next/router'

class Movie extends React.Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit() {
        let id = this.props.movie.imdbID;
        Router.push({ pathname: '/movie-details', query: { id: id } });
    }

    render() {
        return (
            <tr>
                <td >
                    <img style={{ height: '50%', width: 'auto' }} src={this.props.movie.Poster} />
                </td>
                <td>
                    <p style={{ marginTop: '90px' }}>
                        {this.props.movie.Title}
                    </p>
                </td>
                <td>
                    <p style={{ marginTop: '90px' }}>
                        {this.props.movie.Year}
                    </p>
                </td>
                <td>
                    <p style={{ marginTop: '90px' }}>
                        {(this.props.movie.Type == 'movie') ? 'Movie' : (this.props.movie.Type == 'series') ? 'Series' : ''}
                    </p>
                </td>
                <td>
                    <p style={{ marginTop: '90px' }}>
                        <button onClick={this.onSubmit} className="btn btn-primary">Details</button>
                    </p>
                </td>
            </tr>
        )
    }
}

export default class MoviesList extends React.Component {
    static async getInitialProps({ query }) {
        return {
            searchQuery: query.value
        }
    }
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            searchField: (this.props.searchQuery)
        }
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.componentDidMount();
    }

    onSubmit(e) {
        e.preventDefault();
        Router.push({ pathname: '/movies-list', query: { value: this.state.searchField } });
        const data = fetch(`https://www.omdbapi.com/?apikey=9ab3c92d&s=${this.state.searchField}`);
        data.then(res => {
            return res.json()
        }).then(movies => {
            this.setState({
                data: movies.Search
            })
        })

    }

    componentDidMount() {
        const data = fetch(`https://www.omdbapi.com/?apikey=9ab3c92d&s=${this.state.searchField}`);
        data.then(res => {
            return res.json()
        }).then(movies => {
            this.setState({
                data: movies.Search
            })
        })
    }

    getList() {
        let movies = this.state.data;
        if (this.state.data == undefined) {
            return (
                <tr className="text-center">
                    <td colSpan='5'>
                        No results found!
                    </td>
                </tr>
            );
        }
        return movies.map((movie, i) => {
            return <Movie movie={movie} key={i} />
        })
    }

    handleChange(e) {
        this.setState({
            searchField: e.target.value
        })
    }

    render() {
        return (
            <Layout>
                <br />
                <div className="container text-center">
                    <div className="row">
                        <div className="col-md-8">
                            <h1 className="text-left">
                                Searched for "{this.props.searchQuery}"
                            </h1>
                        </div>

                        <div className="col-md-4">
                            <form method="post" class="form-inline" onSubmit={this.onSubmit}>
                                <input form-control mr-sm-2 type="text" placeholder="Search for a title" value={this.state.searchField} name="search" id="search" onChange={this.handleChange} />                                <button class="btn btn-primary" type="submit">Search</button>
                            </form>
                        </div>
                    </div>


                    <table className="table table-hover table-responsive table-striped text-center">
                        <thead>
                            <tr style={{ width: '100px' }}>
                                <th style={{ minWidth: '200px' }}>
                                    Poster
                                </th>
                                <th style={{ minWidth: '200px' }}>
                                    Title
                                </th>
                                <th style={{ minWidth: '200px' }}>
                                    Year
                                </th>
                                <th style={{ minWidth: '200px' }}>
                                    Type
                                </th>
                                <th style={{ minWidth: '200px' }}>

                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.getList()}
                        </tbody>
                    </table>
                </div>
            </Layout>
        );
    }
}
