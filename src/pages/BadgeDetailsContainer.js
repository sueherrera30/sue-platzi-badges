import React from 'react';
import api from '../api';
import BadgeDetails from './BadgeDetails';


class BadgeDetailsContainer extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.read(this.props.match.params.badgeId);
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return 'lOADING THIS INFO BABY';
    }

    if (this.state.error) {
      return 'OOOH NO :( WE HAVE A ERROR MAN';
    }

    return (
     <BadgeDetails badge={this.state.data}/>
    );
  }
}

export default BadgeDetailsContainer;
