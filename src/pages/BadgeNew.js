import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/platziconf-logo.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import api from '../api';

class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
    },
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };
  handleSubmit = async e => {
    //detenemos evento:
    e.preventDefault();
    this.setState({
      loading: true,
      error: null,
    })
    try {
      // pasaremos aqui los datos del nuevo badge
      await api.badges.create(this.state.form);
      this.setState({
        loading: false,
        // aqui no usaremos datos, no queremos consumir ninguna info.
      })
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      })
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
              // a cada linea le poner un condicional , un valor default 
                firstName={this.state.form.firstName || 'FIRST NAME' }
                lastName={this.state.form.lastName  || 'LAST NAME'}
                twitter={this.state.form.twitter  || 'TWITTER'}
                jobTitle={this.state.form.jobTitle  || 'JOB TITLE'}
                email={this.state.form.email || 'EMAIL'}
                avatarUrl="https://www.gravatar.com/avatar/4f510ea7bacbcfe159dd96ea1385e7b0?d=identicon"
              />
            </div>

            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
                onSubmit={this.handleSubmit}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
