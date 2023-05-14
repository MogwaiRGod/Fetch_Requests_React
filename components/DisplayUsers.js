import FetchQuery from './FetchQuery.js';

export default function DisplayUsers(props) {
    const imgSrc = 'https://source.boringavatars.com/pixel/120/'
    const imgColor = '?colors=c0b698,647e37-300013,6e9a81,d2c8a7';

    return (
        <FetchQuery 
            name="DisplayUsers" 
            url={ props.url } 
            pic={ {
                display: props.pic,
                imgSrc: imgSrc,
                imgColor: imgColor
            } }
        />
    );
} // fin composant DisplayUsers