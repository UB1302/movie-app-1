import Movie from './Components/Movie';
import BookedMovie from './Components/BookedMovie';
import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from "react-router-dom";



const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";

const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";



function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [bookedTitle, setBookedTitle] = useState([]);

  const fetchMovie = async (URL) => {

    await fetch(URL)
      .then((res) => res.json())
      .then(data => setMovies(data.results));
  }

  useEffect(() => {

    fetchMovie(APIURL);

  }, [])

  function submitHandler(e) {
    e.preventDefault();
    // console.log(searchTerm);
    if (searchTerm) {
      fetchMovie(SEARCHAPI + searchTerm);
      setSearchTerm('');
    }
  }

  function handleOnChange(e) {
    setSearchTerm(e.target.value);

  }
  const linkStyle = {
    color: "#CD8665",
    textDecoration: "none",
    paddingLeft: "5px",
    paddingRight: "5px",
    marginRight: "1rem",
    marginLeft: "1rem",
    fontWeight: "bold",
    fontSize: "25px"
  }



  return (
    <Router>
      <div className="App">

        <div className="nav">

          <div className="links">
            <Link to="/" style={linkStyle}>Home</Link>
            <Link to="/bookmarked" style={linkStyle}>BookMark</Link>
          </div>

          <div className="form">
            <form onSubmit={submitHandler}>
              <span className="input-container">
                <input className="input" type="search" value={searchTerm} placeholder="Search..." onChange={handleOnChange} />
              </span>

            </form>
          </div>

        </div>

        <Switch>
          <Route exact path="/">
            <div className='movies'>
              {movies.map(movie => {
                let available = true;
                if (bookedTitle.includes(movie.title)) { available = false }
                return <Movie key={movie.id} title={movie.title} posterPath={movie.poster_path} voteAverage={movie.vote_average} overview={movie.overview} available={available} setBookedTitle={setBookedTitle} bookedTitle={bookedTitle} />
              })}
            </div>
          </Route>
          <Route path="/bookmarked">
            <BookedMovie />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
