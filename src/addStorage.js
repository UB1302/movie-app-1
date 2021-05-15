import { projectFirestore } from "./firebase/config"
import { timeStamp } from "./firebase/config";

const collectionRef = projectFirestore.collection('bookMark')
const addStorage = async (title, posterPath, voteAverage, overview, bookmarked) => {

    let createdAt = timeStamp();
    await collectionRef.add({ title, posterPath, voteAverage, overview, bookmarked, createdAt })
}

export default addStorage;