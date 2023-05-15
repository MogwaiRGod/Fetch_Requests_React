import FetchQuery from '../components/FetchQuery.js';
import Nav from '../components/Nav.js';
import { useState, useEffect, useInsertionEffect } from 'react';

export default function DisplayPosts(props) {
    const [iptLimit, setLimit] = useState(undefined);

    return (
        <>
            <Nav />
            <h1>Tous les posts</h1>
            
            {/* NON FONCTIONNEL :( */}
            <label>Nombre de posts</label>
            <select id="dropdown" onChange={ handleChange }>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="null">Tous</option>
            </select>
            
            <FetchQuery 
                name="DisplayPosts" 
                url={ props.url } 
                limit={ iptLimit } 
            />
        </>
    );
} // fin composant DisplayPost