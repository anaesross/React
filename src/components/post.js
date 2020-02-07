import React, { Component } from 'react';

class Post extends Component {
    render() {
        return ( //aqui usa parênteses para inserir HTML (padrão para não dar problema em casos específicos, mas poderia ser sem 
            <div>
                <h2>{this.props.titulo}</h2>
                <p>{this.props.texto}</p>
            </div>
        )
    }
}

export default Post; //exporta para poder usar em outros lugares do sistema