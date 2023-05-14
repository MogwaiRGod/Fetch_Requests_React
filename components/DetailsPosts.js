import { useState, useEffect } from 'react';
import { BaseComponent, BasePosts } from '../components/FetchQuery';

export default function DetailsPost(props) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(
    () => {
        // on filtre les posts par l'id de l'utilisateur
        fetch('https://jsonplaceholder.typicode.com/posts?userId=' + props.id)
        
        .then((response) => {
        if (!response.ok) {
            throw new Error("L'API ne répond pas :(");
        }
        return response.json();
        })

        .then((actualData) => {
            setData(actualData);
            setError(null);
        })

        .catch((err) => {
            setError(err.message);
        })

        .finally(() => {
            setLoading(false);
        })
    },
        []
    ); // fin fetch

    return (
        <div>
            { data && <BasePosts data={ data } /> }
            <BaseComponent loadingStatus={ loading } errorMessage={ error } />
        </div>
    );  
}