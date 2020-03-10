import React, { Component } from "react";
import "./App.scss";
import DisplayContacts from "./components/DisplayContacts/DisplayContacts";
import AddContact from "./components/AddContact/AddContact";

export class App extends Component {
  state = {
    contacts: [
      {
        name: "Bhaskar Das",
        company: "X-Bros Pvt Ltd",
        number: "+8011090289",
        id: 1
      },
      {
        name: "Gobinda Das",
        company: "X-Bros Pvt Ltd",
        number: "+9011090289",
        id: 2
      },
      {
        name: "Babita Das",
        company: "X-Bros Pvt Ltd",
        number: "+3011090289",
        id: 3
      },
      {
        name: "Rajbeer Das",
        company: "X-Bros Pvt Ltd",
        number: "+1111090289",
        id: 4
      }
    ]
  };

  addContact = contact => {
    contact.id = this.state.contacts.length + 1;
    let contacts = [...this.state.contacts, contact];
    this.setState({
      contacts
    });
  };
  removeContact = id => {
    let contacts = this.state.contacts.filter(contact => {
      return contact.id !== id;
    });
    this.setState({
      contacts
    });
  };
  handleUpdate = id => {
    let contacts = [...this.state.contacts];
    const a = contacts[id];
    console.log(a);
  };
  render() {
    return (
      <div className="app">
        <DisplayContacts
          contacts={this.state.contacts}
          removeContact={this.removeContact}
          handleUpdate={this.handleUpdate}
        />
        <AddContact addContact={this.addContact} />
      </div>
    );
  }
}

export default App;
