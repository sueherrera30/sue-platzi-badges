//importamos react para poder usar JSx.
import React from 'react';
import './styles/Badge.css';
import confLogo from '../images/badge-header.svg';
// import { Z_ASCII } from 'zlib';

class Badge extends React.Component {
  // todos los componentes requieren de un metodo obligatorio,
  // este definirá cual será el elemento que veremos en patalla.
    render() {
  // al hacer render, debemos especificar que queremos regresar.
    return (
      <div className="Badge">
      <div className="Badge__header">
        <img src={confLogo} alt="Logo de la conferencia" />
      </div>

      <div className="Badge__section-name">
        <img
          className="Badge__avatar"
          src={this.props.avatarUrl}
          alt="Avatar"
        />
        <h1>
          {this.props.firstName} <br /> {this.props.lastName}
        </h1>
      </div>

      <div className="Badge__section-info">
        <h3>{this.props.jobTitle}</h3>
        <div>@{this.props.twitter}</div>
      </div>

      <div className="Badge__footer">#platziconf</div>
    </div>
    )
  }
}

// exportamos para poderlo usar en otro momento.
export default Badge;
