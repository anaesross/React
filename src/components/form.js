import React from 'react'

export default class Form extends React.Component {
    render() {
        return (
            <form className="card">
                <div className="card-header">
                    <h2 className="card-title"> Formulário</h2>
                </div>
                <p className="form-group">
                    <label className="form-label">Nome</label><br />
                    <input className="form-control" type="text" />
                </p>
                <p className="form-group">
                    <label className="form-label">GitHub</label><br />
                    <input className="form-control" type="url" />
                </p>
                <p className="form-group">
                    <button className="btn btn-primary">Enviar</button>
                </p>

            </form>
        )
    }
}