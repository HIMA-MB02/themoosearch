import React from 'react';
import Layout from './components/layout';
import Router from 'next/router'

export default class MovieDetails extends React.Component {

    static async getInitialProps({ query }) {
        return {
            searchId: query.id
        }
    }

    constructor(props) {
        super(props);

        this.state = {
            searchId: this.props.searchId,
            movie: {

            }
        }
    }

    componentDidMount() {
        const data = fetch(`https://www.omdbapi.com/?apikey=9ab3c92d&i=${this.state.searchId}`);
        data.then(res => {
            return res.json()
        }).then(movie => {
            this.setState({
                movie: movie
            })
        })
    }

    render() {
        return (
            <Layout>
                <style jsx>{`
                    .card {
                        padding: 10px;

                        min-height: 100px;
                    }
                    .col-md-3 {
                        padding: 5px;
                    }
                `}</style>
                <br /><br />
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={this.state.movie.Poster} />
                        </div>
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col">
                                    <h2>
                                        {this.state.movie.Title}
                                    </h2>
                                    <p className="text-muted">
                                        {this.state.movie.Genre} | {this.state.movie.Year} | Rating: {this.state.movie.imdbRating}/10
                                    </p>
                                    <p>
                                        Plot: <br />{(this.state.movie.Plot) ? this.state.movie.Plot : 'N/A'}
                                    </p>
                                    <p>
                                        Actors: <br />
                                        {(this.state.movie.Actors) ? this.state.movie.Actors : 'N/A'}
                                    </p>
                                    <p>
                                        Awards:<br />
                                        {(this.state.movie.Awards) ? this.state.movie.Awards : 'N/A'}
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3">
                                    <p className="card bg-primary">
                                        Director:<br />
                                        {(this.state.movie.Director) ? this.state.movie.Director : 'N/A'}
                                    </p>
                                </div>
                                <div className="col-md-3">
                                    <p className="card bg-primary">
                                        Released: <br />{(this.state.movie.Released) ? this.state.movie.Released : 'N/A'}
                                    </p>
                                </div>
                                <div className="col-md-3">
                                    <p className="card bg-primary">
                                        Language: <br />
                                        {(this.state.movie.Language) ? this.state.movie.Language : 'N/A'}
                                    </p>
                                </div>
                                <div className="col-md-3">
                                    <p className="card bg-primary">
                                        Runtime:<br />
                                        {(this.state.movie.Runtime) ? this.state.movie.Runtime : 'N/A'}
                                    </p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-3">
                                    <p className="card bg-primary">
                                        Country: <br />{(this.state.movie.Country) ? this.state.movie.Country : 'N/A'}
                                    </p>
                                </div>
                                <div className="col-md-3">
                                    <p className="card bg-primary">
                                        Box Office Earnings: <br />
                                        {(this.state.movie.BoxOffice) ? this.state.movie.BoxOffice : 'N/A'}
                                    </p>
                                </div>
                                <div className="col-md-3">
                                    <p className="card bg-primary">
                                        Produced By: <br />
                                        {(this.state.movie.Production) ? this.state.movie.Production : 'N/A'}
                                    </p>
                                </div>
                                <div className="col-md-3">
                                    <p className="card bg-primary">
                                        Writen by: <br />
                                        {(this.state.movie.Writer) ? ((this.state.movie.Writer).length > 20 ? this.state.movie.Writer.substring(0, 20) + '...' : this.state.movie.Writer) : 'N/A'}
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </Layout>
        )
    }
}
