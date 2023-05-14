import { useState, useEffect } from 'react';
import '../App.css';

export default function FetchQuery(props) {
  // variables du composant à observer (<=> si leur état est modifié)
  // data : données du composant
  const [data, setData] = useState(null);
  // error : erreurs soulevées par l'API
  const [error, setError] = useState(null);
  // loading : booléen indiquant si l'API est en train de charger ou pas càd si les données requêtées sont en acheminement
  // => à l'initialisation : le chargement est en cours
  const [loading, setLoading] = useState(true);

  // récupération des valeurs des propriétés
  let url = props.url;
  let name = props.name;

  // si une limite a été définie
  if (props.limit != "null") {
    const limit = props.limit;

    // on modifie l'URL passée en argument
    url+= `?_limit=${ limit }`;
  }

  /*
   * useEffect : hook (méthode auto) permettant au composant de déclencher un side-effect
   * un élément du composant va déclencher un changement d'état d'un composant (ou autre) *extérieur*
  */

  // utilisation de useEffect pour effectuer une requete fetch
  useEffect(
    () => {

      /* traitement des données (requête fetch)
      par défaut : méthode GET */
      fetch(/* chemin de la ressource à récupérer */ url)
      
      .then((response) => {
        // s'il n'y a pas de réponse à la requête
        if (!response.ok) {
          throw new Error("L'API ne répond pas :(");
        }
        return response.json();
      })

      /* actualData : données récupérées par la requête */
      .then((actualData) => {
        // on assigne les données récupérées aux données du composant (data)
        setData(actualData)
        // si on est là : pas d'erreur
        setError(null)
      })

      // en cas d'erreur
      .catch((err) => {
        // on assigne le message d'erreur à error
        setError(err.message)
      })

      // finally : effectué à la fin même si une erreur a été attrapée <=> quoi qu'il arrive
      .finally(() => {
        // si on est là : le traitement est terminé => chargement terminé
        setLoading(false);
      })
    },

    // (OPTIONNEL) tableau des dépendances déclenchant l'effet (effet = callback)
    []
  ); // fin useEffect

  // selon le nom du display demandé
  // on va retourner un composant spécifique
  switch(name) {
    case 'DisplayPosts':
      return (
        <div>
          <BaseComponent nameDisplay={ name } loadingStatus={ loading } errorMessage={ error } />
          <ul>
            { /* quand les données on été récupérées <=> data not null -> on map les données */ }
            { data && <BasePosts data={ data }/> }
          </ul>
        </div>
      );
    
    case 'DisplayUsers':
      return (
        <div>
          <BaseComponent nameDisplay={ name } loadingStatus={ loading } errorMessage={ error } />

          <table>
            <thead>
              <tr>
                <th>Nom d'utilisateur</th>
                <th>Nom</th>
                <th>Mél</th>
                {/* JSON.parse car sinon ne traite pas le contenu de la chaîne comme un booléen */}
                { JSON.parse(props.pic.display) && <th>Avatar</th> }
              </tr>
            </thead>
            <tbody>
              {
                data && data.map(({ id, username, name, email }) => (
                  <tr key={ id }>
                    <td><a href={ `/user/${ id }` }>{ username }</a></td>
                    <td>{ name }</td>
                    <td>{ email }</td>
                    { 
                      JSON.parse(props.pic.display) && <td>
                        <img src={ props.pic.imgSrc + name + props.pic.imgColor } />
                      </td> 
                    }
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
    ); // fin return

    case 'Comments':
      return (
        <div>
          <BaseComponent nameDisplay={ name } loadingStatus={ loading } errorMessage={ error } />
          <ul>
            {
              data && data.map(({ id, name, email, body }) => (
                <li key={ id }>
                  <h3>{ name }</h3>
                  <h4>{ email }</h4>
                  <p>{ body }</p>
                </li>
              ))
            }
          </ul>
        </div>
      ); // fin return
  } // fin switch
} // fin FetchQuery

export function BasePosts({ data }) {
  return (
    <>
      {
        //  NOTE : les arguments de map sont les *noms effectifs des clefs* du tableau */
        
        // on map les données
        data.map(({ id, title, body }) => (
          <li key={ id }>
            <h5>{ id }</h5>
            <h4><a href={ `/post/${ id }` }>{ title }</a></h4>
            <p>{ body }</p>
          </li>
        ))
      }
    </>
  );
}

export function BaseComponent({ nameDisplay, loadingStatus, errorMessage }) {
  return (
    <>
      <h2>{ nameDisplay }</h2>
      <BaseLoading loadingStatus={ loadingStatus } />
      <BaseError errorMessage={ errorMessage } />
    </>
  );
} // fin BaseComponent

export function BaseLoading({ loadingStatus }) {
  return (
    <>
      {/* NOTE : syntaxe : évaluation qui va afficher également des balises
      booléen && balise */}

      {/* si loading est vrai -> affichage de la div correspondante */}
      { loadingStatus && <div>Données en chargement, veuillez patienter...</div> }  
    </>
  );
} // fin BaseLoading

export function BaseError({ errorMessage }) {
  return (
    <>
      {/* si error est not null <=> si une erreur s'est produite -> affichage de la div correspondante */}
      { errorMessage && <div>Une erreur est survenue : { errorMessage }</div> }
    </>
  );
} // fin BaseError