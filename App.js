// import logo from './logo.svg';
// import {Table} from './components/Client';
// import Football from './components/Football';
// import MyForm from './components/MyForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home.js';
// import Page1 from './pages/Page1.js';
// import Page2 from './pages/Page2.js';
// import CheckListPage from './pages/CheckListPage.js';
import NotFound from './pages/NotFound';
import Users from './pages/Users';
import Posts from './pages/Posts';
import DisplayPosts from './pages/DisplayPosts';
import './App.css';

function App() {
  // router
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path={"/user/:id"} element={ <Users /> } />
          <Route path="/post/:id" element={ <Posts /> } />
          {/* route vers tous les posts */}
          <Route path="/posts" element={ <DisplayPosts url='https://jsonplaceholder.typicode.com/posts' /> } />
          {/* route vers tous les users */}
          <Route path="*" element={ <NotFound /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// function App() {
//     return (
//         <div>
//           <BrowserRouter>
//             <Routes>
//               <Route path="/" element={ <Home /> } />
//               <Route path="page1" element={ <Page1 /> } />
//               <Route path="page2" element={ <Page2 /> } />
//               <Route path="todo" element={ <CheckListPage /> } />
//               <Route path="*" element={ <NotFound /> } />
//             </Routes>
//           </BrowserRouter>
//         </div>
//     );
// }

// export default App;



// function App() {
//   const Theader = ["Premier prénom", "Deuxième prénom", "Troisième prénom"];

//   const Tbody = [
//     {
//       id: "1",
//       noms: ["Bibiche", "Raymonde", "Beyoncé"]
//     },
//     {
//       id: "2",
//       noms: ["Ginette", "Shakira", "Doudou"]
//     },
//     {
//       id: "3",
//       noms: ["A", "tes souhaits", "Tarek"]
//     }
//   ]

//   const Tclass = 'StarWarsTable' ;
//   const msg= "Le contenu, la valeur";
//   let but = Math.floor(Math.random() * 3); // 0 ou 1
  

//   return (
//     <div className="App">
//       <MyForm />
//       {/* <Football affichage={ msg } but='1' /> */}
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//       {/* <Client perso={MyName} /> */}
//       <Table Theader={Theader} Tbody={Tbody} Tclass={Tclass} />
//     </div>
//   );
// }

// export default App;


