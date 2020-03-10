import React, { Component } from "react";
import "./AddContact.scss";

export class AddContact extends Component {
  state = {
    name: null,
    company: null,
    number: null
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addContact(this.state);
    this.setState({
      name: "",
      company: "",
      number: ""
    });
  };

  render() {
    return (
      <div className="addConatact">
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter the name..."
            id="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Enter company name..."
            id="company"
            value={this.state.company}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="Enter phone number..."
            id="number"
            value={this.state.number}
            onChange={this.handleChange}
          />
          <button className="add">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
