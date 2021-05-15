import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config'


const useFirestore = () => {

    const [docs, setDocs] = useState([]);

    useEffect(() => {

        const getData = async () => {

            const unsub = await projectFirestore.collection('bookMark')
                .orderBy('createdAt', 'desc')
                .onSnapshot(snap => {
                    let documents = [];
                    //snap containes list of documents in image collection retrieved from firestore.
                    snap.forEach(doc => {
                        documents.push({ ...doc.data(), id: doc.id })
                    });
                    setDocs(documents);
                    console.log(documents);

                });
            return () => unsub();


            // this is a cleanup function that react will run when
            // a component using the hook unmounts
        }
        getData();

    }, [setDocs])

    return { docs };
}

export default useFirestore;