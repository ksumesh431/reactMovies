import React, { Component } from 'react';
import axios from "axios";
import { compareRateAscending, compareRateDescending, compareStockAscending, compareStockDescending } from './compareFunctions';
export default class Movies extends Component {
    constructor() {
        super();
        this.state = {
            movies: [],
            currSearchText: '',
            limit: 4,
            currPage: 1,
            genres: [{ _id: "abcd", name: "All Genres" }],
            cGenre: "All Genres",
            sortState: "Default"
        }
    }
    //`````````````````````````````````````````````````````````````````````//
    //`````````````````````````````````````````````````````````````````````//
    handleChange = (e) => {
        let val = e.target.value;
        console.log(val);
        this.setState({
            currSearchText: val
        })
    }
    handleLimit = (e) => {
        let lim = e.target.value;
        if (lim !== "" && lim > 0) {
            this.setState({
                limit: lim
            })
        }
    }
    onDelete = (id) => {
        let arr = this.state.movies.filter(function (movieObj) {
            return movieObj._id !== id;
        })
        // console.log(arr);
        this.setState({
            movies: arr
        });
    }
    handleSort = (e) => {
        const className = e.target.className;
        console.log(className)
        let nSortState;
        if (className === "fa fa-sort-asc") {
            nSortState = "compareStockAscending"
        } else if (className === "fa fa-sort-desc") {
            nSortState = "compareStockDescending"
        } else if (className === "fa fa-sort-asc rt") {
            nSortState = "compareRateAscending"
        } else if (className === "fa fa-sort-desc rt") {
            nSortState = "compareRateDescending"
        }
        this.setState({
            sortState: nSortState
        })
    }
    handleGenre = (genreName) => {
        this.setState({
            cGenre: genreName
        })
    }
    //`````````````````````````````````````````````````````````````````````//
    //`````````````````````````````````````````````````````````````````````//
    render() {
        console.log('render');
        let { movies, currSearchText, limit, currPage, genres, cGenre, sortState } = this.state; //ES6 destructuring
        //`````````````
        //`````````````
        // filter based on search text
        let filteredArr = [];
        if (currSearchText === '') {
            filteredArr = movies;
        }
        else {
            filteredArr = movies.filter(function (movieObj) {
                let title = movieObj.title.toLowerCase();
                console.log(title);
                return title.includes(currSearchText.toLowerCase());
            })
        }
        //``````````````
        //``````````````
        if (cGenre !== "All Genres") {
            filteredArr = filteredArr.filter((obj) => {
                return obj.genre.name === cGenre
            })
        }
        //``````````````
        //``````````````
        let numberofPage = Math.ceil(filteredArr.length / limit);
        let pageNumberArr = [];
        for (let i = 0; i < numberofPage; i++) {
            pageNumberArr.push(i + 1);
        }
        //``````````````
        //``````````````
        let SI = (currPage - 1) * limit;
        let EI = SI + limit - 1;
        filteredArr = filteredArr.slice(SI, EI + 1);
        //``````````````
        //``````````````
        if (sortState !== "Default") {
            if (sortState === "compareStockAscending") {
                filteredArr.sort(compareStockAscending);
            } else if (sortState === "compareStockDescending") {
                filteredArr.sort(compareStockDescending);
            } else if (sortState === "compareRateAscending") {
                filteredArr.sort(compareRateAscending);
            } else if (sortState === "compareRateDescending") {
                filteredArr.sort(compareRateDescending);
            }
        }
        //``````````````
        //``````````````

        return (
            <>
                {
                    (this.state.movies.length === 0) ?
                        <div className='container spin'>
                            {/* <div style={{ marginTop: 10 + "rem" }} className="d-flex justify-content-center">
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div> */}
                            <button style={{ marginTop: 10 + "rem" }} class="btn btn-primary" type="button" disabled>
                                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                Loading...
                            </button>
                        </div>
                        :
                        <div className='container'>
                            <div className='row'>
                                <div className='col-3'>
                                    <ul className="list-group">
                                        {
                                            genres.map(genreObj => {
                                                let classStyle = (genreObj.name !== cGenre) ? "list-group-item" : "list-group-item active"
                                                return (
                                                    <li onClick={() => { this.handleGenre(genreObj.name) }} key={genreObj._id} className={classStyle}>{genreObj.name}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className='col-9'>
                                    <div className='row'>
                                        <div className='col-9'>
                                            <h3>Search</h3>
                                            <input style={{ width: 100 + "%" }} type='search' value={this.state.currSearchText} onChange={this.handleChange} ></input>
                                        </div>
                                        <div className='col-3'>
                                            <h3>Limit</h3>
                                            <input style={{ width: 60 + "%" }} type='number' value={this.state.limit} onChange={this.handleLimit}></input>
                                        </div>
                                    </div>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Title</th>
                                                <th scope="col">Genre</th>
                                                <th scope="col">
                                                    <i onClick={this.handleSort} className="fa fa-sort-asc" aria-hidden="true"></i>
                                                    Stock
                                                    <i onClick={this.handleSort} className="fa fa-sort-desc" aria-hidden="true"></i>
                                                </th>
                                                <th scope="col">
                                                    <i onClick={this.handleSort} className="fa fa-sort-asc rt" aria-hidden="true"></i>
                                                    Rate
                                                    <i onClick={this.handleSort} className="fa fa-sort-desc rt" aria-hidden="true"></i>
                                                </th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                filteredArr.map((movieObj) => {
                                                    return (
                                                        <tr key={movieObj._id} >
                                                            <td></td>
                                                            <td>{movieObj.title}</td>
                                                            <td>{movieObj.genre.name}</td>
                                                            <td>{movieObj.numberInStock}</td>
                                                            <td>{movieObj.dailyRentalRate}</td>
                                                            <td><button onClick={() => {
                                                                this.onDelete(movieObj._id)
                                                            }} type="button" className="btn btn-danger">Delete</button></td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                    <nav>
                                        <ul className="pagination">
                                            {
                                                pageNumberArr.map((pageNumber) => {
                                                    let classStyle = (pageNumber === currPage) ? "page-item active" : "page-item";
                                                    return (
                                                        <li onClick={() => { this.setState({ currPage: pageNumber }) }} key={pageNumber} className={classStyle}><span className="page-link">{pageNumber}</span></li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                }
            </>
        )
    }
    //`````````````````````````````````````````````````````````````````````//
    //`````````````````````````````````````````````````````````````````````//
    async componentDidMount() {
        console.log("component did mount");
        let moviesObj = await axios.get('https://backend-react-movie.herokuapp.com/movies');
        let genreRes = await axios.get('https://backend-react-movie.herokuapp.com/genres');

        console.log(`moviesObj`, moviesObj.data.movies)
        this.setState({
            movies: moviesObj.data.movies,
            genres: [...this.state.genres, ...genreRes.data.genres]

        })
    }
}





