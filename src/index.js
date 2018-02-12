import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Form extends Component {
  constructor(props){
    super(props)
    this.state = ({
      name: '',
      lastName: '',
      phone: ''
    })
    this.handleChange=this.handleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
  }
  handleChange(e) {
    let key = e.target.name
    let value = e.target.value
    this.setState({
      [key]: value
    })
  }
  handleSubmit(e) {
    e.preventDefault();
    axios({
              method: 'post',
              url: 'http://localhost:5000/form/post',
              data: this.state
            })
            .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
            });
      this.setState({
        name: '',
        lastName: '',
        phone: ''
      })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      First name: <input value={this.state.name} onChange={this.handleChange} type="text" name="name" /><br/>
      Last name: <input value={this.state.lastName} onChange={this.handleChange} type="text" name="lastName" /><br/>
      Phone number: <input value={this.state.phone} onChange={this.handleChange} type="number" name="phone" /><br/>
      <button>Submit </button>
      </form>
    )
  }
}
ReactDOM.render(<Form />, document.getElementById('root'));
