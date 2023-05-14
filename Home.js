import DisplayPosts from './components/DisplayPosts.js';
import DisplayUsers from './components/DisplayUsers.js';
import Nav from './components/Nav.js';
import { useState, useEffect } from 'react';

export default function Home() {
    const [inputLimit, setLimit] = useState("null");

    const setValue = (event) => { 
        setLimit(event.target.value);
    }

    return (
        <div id="container-home">
            <Nav />
            <h1>Requêtes fetch vers API</h1>

            {/* NON FONCTIONNEL :( */}
            <label>Nombre de posts</label>
            <select id="dropdown" onChange={ setValue }>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="null">Tous</option>
            </select>

            {/* DisplayPosts avec une limite de 5 */}
            <DisplayPosts url='https://jsonplaceholder.typicode.com/posts' limit={ inputLimit } />
            
            {/* DisplayUsers avec une limite de 5 ET avec image de profil */}
            <DisplayUsers name="DisplayUsers" url="https://jsonplaceholder.typicode.com/users" pic="true"/>
        
            {/* DisplayUsers avec une limite de 5 SANS image de profil */}
            <DisplayUsers name="DisplayUsers" url="https://jsonplaceholder.typicode.com/users" pic="false"/>
            
        </div>
    );
} // fin Home