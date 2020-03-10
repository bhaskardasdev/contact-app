import React, { Component } from "react";
import "./AddContact.scss";

export class AddContact extends Component {
  state = {
    name: "",
    company: "",
    number: "",
    index: null
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (!this.props.editedContact) {
      this.props.addContact(this.state);
      this.setState({
        name: "",
        company: "",
        number: ""
      });
    } else {
      this.props.handleUpdate(this.state);
      this.setState({
        name: "",
        company: "",
        number: "",
        index: null
      });
    }
  };
  // updateContact = () => {
  //   this.props.handleUpdate(this.state);
  //   this.setState({
  //     name: "",
  //     company: "",
  //     number: "",
  //     fetch: false
  //   });
  // };
  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.editedContact) {
      if (this.props.editedContact !== prevProps.editedContact) {
        const { name, company, number, index } = this.props.editedContact;
        this.setState({
          name,
          company,
          number,
          index
        });
      }
    }
  }
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
          <button className="add">
            {this.props.editedContact ? "Update" : "Add"}
          </button>
        </form>
      </div>
    );
  }
}

export default AddContact;
