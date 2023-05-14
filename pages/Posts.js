import '../App.css';
import Nav from '../components/Nav.js';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { BaseComponent, BasePosts } from '../components/FetchQuery';
import Comments from '../components/Comments';

export default function Posts() {
    const id = useLocation().pathname.substring(6);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(
    () => {
        fetch('https://jsonplaceholder.typicode.com/posts/' + id)
        
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
            <Nav />
            <h1>Post</h1>
            { data && <BasePosts data={ [data] } /> }
            <BaseComponent loadingStatus={ loading } errorMessage={ error } />
            <Comments url={ `https://jsonplaceholder.typicode.com/posts/${ id }/comments` } />
        </div>
    );
}