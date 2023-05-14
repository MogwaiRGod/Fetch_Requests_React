// import './style/checklist.css';
// import { useState } from "react";

// export default function CheckList(props) {
//     // tableau de chaînes contenant toutes les tâches
//     let allTasks = [props.tasks[0]]
//     allTasks[1] = "Ajoutez-en ou supprimez-en !";
    
//     // input <=> tâche (chaîne) entrée par l'utilisateur
//     // => vide à l'initialisation
//     const [inputTask, setInputTask] = useState("");

//     // à l'envoi du formulaire <=> au clic du bouton
//     // on gère la valeur de l'input
//     const handleValue = (event) => {
//         // pour ne pas envoyer le formulaire et rediriger vers une autre page
//         event.preventDefault();

//         // on récupère l'input entré par l'utilisateur (chaîne)
//         const userIpt = event.target.iptTask.value;

//         // on l'ajoute à la liste de tâches
//         allTasks.push(userIpt);
//         // console.log(allTasks);

//         // remise à zéro du champ
//         setInputTask('');
//     };

//     return (
//         <>
//             <form className='checkList' onSubmit={ handleValue } >
//                 <h1>{ props.name }</h1>
//                 <input 
//                     name="iptTask"
//                     placeholder="Entrer une tâche" 
//                     defaultValue={ inputTask } 
//                 />
//                 <button type="submit">+</button>
//             </form>
//             <List contents={ allTasks } />
//         </> 
//     );
// }

// export function List(tasksContent) {
//     // console.log(tasksContent.contents)
//     return (
//         <ul>
//             {
//                 tasksContent.contents.map((content) => new Task(content))
//             }
//         </ul>
//     );
// }

// export function Task(content) {
//     return (
//         <li className="task" key={ content }>
//             <input type="checkbox" />
//             <p>{ content }</p>
//             <button>X</button>
//         </li>
//     );
// }

// export function CheckBox() {
//     // status : état de la checkbox
//     // peut prendre deux valeurs : 'checked' ou 'unchecked'
//     // à l'initialisation : 'unchecked'

//     const [status, setStatus] = useState("checked");

//     // fonction gérant le statut de la checkbox
//     const handleChange = (event) => {
//         event.preventDefault();
//         console.log("oui");
//         console.log(status);
//     };


//     if (status == 'checked') {
//         return (
//             <input type="checkbox" onclick={ handleChange } checked/>
//         );
//     }
//     else {
//         return (
//             <input type="checkbox" onclick={ handleChange } />
//         );
//     }

// }