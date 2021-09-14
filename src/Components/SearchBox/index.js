import React, { useState } from 'react'
import './SearchBox.css';

function SearchBox({placeholder, initialData}) {

    const [movieList, setMovieList] = useState(initialData);
    const [searchText, setSearchText] = useState("");

    const searchMovies = (event) => {
        if(event){
            event.preventDefault();
        }
        const list = initialData.filter(movie => movie.name.toLowerCase().includes(searchText.toLowerCase()));
        setMovieList(list);
    }
    return (
        <div className="search-box">
            <h3 className="component-type">Functional Component</h3>
            <span>This is a functional component that uses <b>useState hook</b> for internal state management, <b>React.Fragment</b> for multiple elements encapsulation</span>
            <br/><br/>
            <form onSubmit={searchMovies}>
                <input type="text" placeholder={placeholder} value={searchText} onChange = {(e) => setSearchText(e.target.value)} />
                <input className="theme-button" type="submit" value="Search" />
                <input className="theme-button reset" type="button" value="Reset" onClick = { () => {setSearchText("");setMovieList(initialData)}} />
            </form>
            <hr style={{borderStyle: "dashed"}}/>
            {
                movieList.map((movie) => {
                    return (
                        <React.Fragment key={movie.id}>
                            <h3>{movie.name}</h3>
                            <b>Release date: </b> {movie.year} &emsp;&emsp;&emsp;&emsp;
                            <b>Genre: </b> {movie.genre.join(", ")}<br/>
                            <hr/>
                        </React.Fragment>
                    )
                })
            }
        </div>
    )
}

export default SearchBox;