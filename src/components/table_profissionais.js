import React, { Component } from 'react';
//aqui também pode ser import React from 'react'
import App from './app';


export default class TableProfissionais extends Component {
    //também pode ser export default class TabelProfissionais extends React.Component {}
    
    render() {
        console.log("PROPS:", this.props);
        return ( //aqui usa parênteses para inserir HTML (padrão para não dar problema em casos específicos, mas poderia ser sem 
        <div>    
          {/*   <table>
                <tr>
                    <th>Nome</th>
                    <th>GitHub</th>
                </tr>
                <tr>
                    <td>{this.props.dados[0].nome}</td>
                
                    <td>{this.props.dados[0].github}</td>
                </tr>
                <tr>
                    <td>{this.props.dados[1].nome}</td>
                
                    <td>{this.props.dados[1].github}</td>
                </tr>
            </table> 
            ou utilizando o map*/}
              <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>GitHub</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.dados.map((profissional)=>{ //map é um foreach
                    return ( //key puxa os ids da classe , no caso professional
                    <tr key={profissional.id}> 
                        <td>{profissional.nome}</td>                
                        <td>{profissional.github}</td>
                    </tr>
                    )
                    })}
                </tbody>
            </table>
        </div>
        )
    }
}

; //exporta para poder usar em outros lugares do sistema