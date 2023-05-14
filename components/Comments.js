import FetchQuery from './FetchQuery.js';

export default function Comments(props) {
    return (
        <FetchQuery 
            name="Comments" 
            url={ props.url } 
        />
    );
} // fin composant DisplayUsers