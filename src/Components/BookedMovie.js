import useFirestore from '../hooks/useFirestore';
import Movie from './Movie';


const BookedMovie = () => {

    const { docs } = useFirestore('bookMark');
    console.log(docs);

    return (

        <div>
            <div className='movies'>
                {docs.map(movie => {

                    return <Movie key={movie.id} title={movie.title} posterPath={movie.posterPath} voteAverage={movie.voteAverage} overview={movie.overview} bookMarked={movie.bookmarked} />
                })}
            </div>
        </div>
    )
}

export default BookedMovie;