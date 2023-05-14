import FetchQuery from './FetchQuery.js';

export default function DisplayPosts(props) {
    return (
        <FetchQuery 
            name="DisplayPosts" 
            url={ props.url } 
            limit={ props.limit } 
        />
    );
} // fin composant DisplayPost