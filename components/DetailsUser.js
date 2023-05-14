import DetailsPost from "./DetailsPosts";

export default function DetailsUser(props) {
    return (
        <>
            <h1>Posts de { props.name }</h1>
            <DetailsPost id={ props.id }/>
        </>
    );  
}