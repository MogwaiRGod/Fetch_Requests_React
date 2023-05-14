import {useState} from 'react';

export default function MyForm() {
    const [name, setName] = useState("");
    const [age, setAge] = useState('');
    const [inputs, setInputs] = useState({nom: "", age:""});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]:value }));

        setName(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(
            'nom: ', inputs.nom,
            'age: ', inputs.age
        )
        // cons ole.log(name);
        // <Truc data={ name } />
    };

    return (
        <form onSubmit={ handleSubmit }>
            <label>Entrer votre nom</label>
            <input 
                type="text"
                name="nom" 
                value={ inputs.nom }
                onChange={ handleChange }
            />
            <label>Entrer votre âge</label>
            <input 
                type="text" 
                name="age"
                value={ inputs.age }
                onChange={ handleChange }
            />
            <button type="submit">OK</button>
        </form>
    );
}

export function Truc({info}) {
    return <h1>{ info }</h1>
}