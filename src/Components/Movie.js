
import addStorage from "../addStorage";



const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const Movie = ({ title, posterPath, voteAverage, overview, bookmarked = true, available, setBookedTitle, bookedTitle }) => {



    const clickHandler = () => {


        addStorage(title, posterPath, voteAverage, overview, bookmarked = true);
        setBookedTitle([...bookedTitle, title]);

    }

    return (
        <div className="movie-container">
            <div className="movie-image">
                <img src={posterPath ? (IMGPATH + posterPath) : "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW92aWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"} alt="" />
            </div>
            <div className="about">
                <div className="movie-title">{title}</div>
                <div className="movie-vote">{voteAverage}</div>

            </div>
            <div className="overview">
                <h1>Overview</h1>
                <p>{overview}</p>
            </div>
            <div className='book-button'>
                {available && <button className="bookmark-button" onClick={clickHandler}>BookMark</button>}
                {!bookmarked && <button className="bookmark-button" onClick={clickHandler}>BookMark</button>}
            </div>
        </div >
    )
}

export default Movie;