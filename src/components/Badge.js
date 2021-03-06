//importamos react para poder usar JSx.
import React from 'react';
import './styles/Badge.css';
// empaqueta archivos
import confLogo from '../images/badge-header.svg';
// import { Z_ASCII } from 'zlib';
import Gravatar from '../components/Gravatar';

class Badge extends React.Component {
  // todos los componentes requieren de un metodo obligatorio,
  // este definirá cual será el elemento que veremos en patalla.
    render() {
  // al hacer render, debemos especificar que queremos regresar.
    return (
      <div className="Badge">
      <div className="Badge__header">
       {/* nos da un valor para que envalueesto seria una prop,crea un codigo un hash  */}
        <img src={confLogo} alt="Logo de la conferencia" />
      </div>
      <div className="Badge__section-name">
         <Gravatar
          className="Badge__avatar"
          email={this.props.email}
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
