import React from 'react';
import { Link } from 'react-router-dom';
import Gravatar from '../components/Gravatar';
import './styles/BadgesList.css';

class BadgesListItem extends React.Component {
  render() {
    return (
      <div className="BadgesListItem">
        <Gravatar
          className="BadgesListItem__avatar"
          email={this.props.badge.email}
          alt={`${this.props.badge.firstName} ${this.props.badge.lastName}`}
         />
        <div>
          <strong>
            {this.props.badge.firstName} {this.props.badge.lastName}
          </strong>
          <br />@{this.props.badge.twitter}
          <br />
          {this.props.badge.jobTitle}
        </div>
      </div>
    );
  }
}
  // para poder filtrar, usamos custom hook:
  // valor incial es la lsita completa de los badges
   // en corchetes: si alguno de estoso dos datos cambia, se debe volver a calcular,
function useSearchBadges(badges) {
  const [ query, setQuery ] = React.useState('');
  const [ filteredBadgers, setfilterBadges ] = React.useState(badges)
  React.useMemo(() => {
    const result = badges.filter(badge => {
      return badge.firstName.toLowerCase().includes(query.toLowerCase())
    })
    setfilterBadges(result)
  }, [badges,query]);
  return { query, setQuery,filteredBadgers }
}
function BadgesList(props) {
  const badges = props.badges;
  const { query, setQuery, filteredBadgers } = useSearchBadges(badges);
  // si filtramos y no encuentra valor, llegamos al valor 0, entramos 
  // a este caso, dosopciones:
  // hacer una copia del input  y pegarlo arriba
    if (filteredBadgers.length === 0) {
      return (
          <div>
            <div className="form-group">
            <label>please,filter badger platzi lover </label>
            <input
              type='text'
              className="form-control"
              // lo que sea que este en el estado del query, 
              //se va a desplegar en el value
              value={query}
              onChange={e => {
              setQuery(e.target.value)
              }}
            />
            </div>
            <h3>No badges were found</h3>
            <Link className="btn btn-primary" to="/badges/new">
              Create new badge
            </Link>
          </div>
      );
    }
    return (
      <div className="BadgesList">
        <div className="form-group">
        <label>Filter Badges</label>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={e => {
            setQuery(e.target.value);
          }}
        />
      </div>
        <ul className="list-unstyled">
          {filteredBadgers.map(badge => {
            return (
              <li key={badge.id}>
                <Link 
                  to={`/badges/${badge.id}/edit`}
                  className="text-reset text-decoration-none"
                  >
                  <BadgesListItem badge={badge} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
}

export default BadgesList;
