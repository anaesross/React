import React, { Component } from 'react';
import TableProfissionais from './table_profissionais';
import Form from './form';


export default class App extends Component { //outra forma de exportar  a classe.

    constructor(props) {
        super(props)

        this.state = {
            profissionais: [
                {
                id: 1,
                nome: "Wagner Venceslau",
                github: "http://github.io/wagven"
                },
                {
                id: 2,
                nome: "Eduardo Rocha",
                github: "http://github.io/eduroc"
                }
                ]
        }
    }

   
    render() {
        //console.log("STATE:", this.state)
        return ( 
            //aqui usa parênteses para inserir HTML (padrão para não dar problema em casos específicos, mas poderia ser sem 
        
        <div>    
            <h1>Hello World!</h1>
            <TableProfissionais dados={this.state.profissionais}/>
            <Form />
            
            
        </div>
        )
    }
}


//precisa ser dentro de div porque ele só renderiza um de cada vez.
//export default App; //exporta para poder usar em outros lugares do sistema.