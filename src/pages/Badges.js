import React from 'react';
import { Link } from 'react-router-dom';
import api from '../api';
import './styles/Badges.css';
import confLogo from '../images/badge-header.svg';
import BadgesList from '../components/BadgesList';

class Badges extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };
  componentDidMount() {
    this.fetchBadges()
  }
  fetchBadges = async () => {
    this.setState({
      loading: true,
      error: null,
    })
    try {
      const data = await api.badges.list();
      this.setState(
        {
          loading: false,
           data: data ,
        }
      )
    } catch(error) {
      this.setState(
        {
          loading: false,
           error: error,
        }
      )
    }
  }

  const 
  render() {
    if(this.state.loading === true) {
      return 'Loading baby...wait a minute'
    }
    if(this.state.error) {
      return `error: ${this.state.error.message}`;
    }
    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={confLogo}
                alt="Conf Logo"
              />
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>

          <BadgesList badges={this.state.data}/>
         
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
