import React from 'react';
import ReactDOM from 'react-dom';
//import Post from './components/post';
import App from './components/app';


import 'bootstrap/dist/css/bootstrap.css';
import './index.css';


// import App from './App';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    (
        <App />
       

        //Criando components:
        // <div className="content">
        //     <div className="card card-default">
        //         <div className="card-header">            
        //             <h1 className="card-title">Aula de React</h1>
        //                 <Post texto="texto do primeiro post" titulo="Primeiro"/>
        //                 <Post texto="texto do segundo post" titulo="Segundo"/>
        //                 <Post texto="texto do terceiro post" titulo="Terceiro"/>
        //         </div>
        //     </div>
        // </div>

    ),
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister(); 