import React, { Component } from 'react';
import axios from 'axios';

import { profilePage } from '../../config';

import './index.css';

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itsc: 'hyliuad',
      name: 'Calpa',
      email: 'calpaliu@gmail.com',
      age: 10,
    };
    this.axios = axios;
  }

  componentDidMount() {
    axios.get(profilePage).then(({ data }) => {
      console.log(data);
      this.setState({ ...data.profile });
    });
  }

  handleChange(event, type) {
    const { value } = event.target;
    switch (type) {
      case 'name':
        this.setState({ name: value });
        break;
      case 'email':
        this.setState({ email: value });
        break;
      case 'age':
        this.setState({ age: value });
        break;
      default:
        console.log(value);
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const object = {
      profile: {
        itsc: this.state.itsc,
        name: this.state.name,
        email: this.state.email,
        age: this.state.age,
      },
    };

    // Varify Name
    if (this.state.name.trim() === '') {
      console.log('Error: name cannot be empty');
      return;
    }

    // Varify email
    if (!this.state.email.match('@')) {
      console.log('Error: without @');
      return;
    }

    // Varify Age
    if (this.state.age < 0 || this.state.age > 200) {
      console.log('Error: age must be > 0 and < 200');
      return;
    }
    this.axios.put(profilePage, object)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)} className="form">
        <p>
          ITSC: {this.state.itsc}
        </p>
        <label>
          Name:
          <input
            type="text"
            value={this.state.name}
            onChange={e => this.handleChange(e, 'name')}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            value={this.state.email}
            onChange={e => this.handleChange(e, 'email')}
          />
        </label>
        <label>
          AGE:
          <input
            type="text"
            value={this.state.age}
            onChange={e => this.handleChange(e, 'age')}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NameForm;
