import React from 'react';

class PostDzseszonForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      name: ''
    };
  }

  handleChange(event) {
    console.log(event.target.value);
    
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = {
      name: this.state.name
    };
    console.log(data);

    fetch('http://35.158.214.61:5000/', {
      method: 'POST',
      body: JSON.stringify(data),
      mode: 'cors',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    .catch(error => `Error: ${error}`);
  }
  
  render() {
    return (
      <form method="post" onSubmit={this.handleSubmit}>
        <input type="text" name="name" placeholder="ird ide a dzseszonszod nevét" onChange={this.handleChange} />
        <button type="submit">adjad neki tess</button>
      </form>
    );
  }
}

export default PostDzseszonForm;