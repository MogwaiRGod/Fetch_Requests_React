import '../App.css';
import DetailsUser from '../components/DetailsUser';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { BaseLoading, BaseError } from '../components/FetchQuery';
import Nav from '../components/Nav.js';

export default function Users(props) {
    const id = useLocation().pathname.substring(6);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(
    () => {
        fetch('https://jsonplaceholder.typicode.com/users/' + id)
        
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
            { data && <DetailsUser id={ id } name={ data.name } /> }
            <BaseLoading loadingStatus={ loading } />
            <BaseError errorMessage={ error } />
        </div>
    ); // fin return
} // fin Users