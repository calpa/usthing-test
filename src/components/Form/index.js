import React, { Component } from 'react';
import axios from 'axios';

import { profilePage } from '../../config';

const getData = () => {

};

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
      // this.setState({ ...data.profile });
    });
  }

  handleChange(event) {
    this.setState({ age: event.target.value });
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
    this.axios.put('https://api.myjson.com/bins/18iw4x', object)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <p>
          ITSC: {this.state.itsc}
        </p>
        <label>
          Name:
          <input type="text" value={this.state.name} onChange={e => this.handleChange(e)} />
        </label>
        <label>
          Email:
          <input type="text" value={this.state.email} onChange={e => this.handleChange(e)} />
        </label>
        <label>
          AGE:
          <input type="text" value={this.state.age} onChange={e => this.handleChange(e)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NameForm;
