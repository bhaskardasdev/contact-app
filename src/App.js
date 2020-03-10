import React, { Component } from "react";
import "./App.scss";
import DisplayContacts from "./components/DisplayContacts/DisplayContacts";
import AddContact from "./components/AddContact/AddContact";

export class App extends Component {
  state = {
    editedContact: null,
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
  handleUpdate = data => {
    const { name, company, number,index } = data;
    // const index = this.state.contacts.indexOf(this.state.editedContact.number);
    // console.log(index);
    const contact = { name, company, number };
    // console.log(data, contact);
    const contacts = [...this.state.contacts];
    contacts[index] = { ...contact };
    this.setState({ contacts, editedContact:null });

  };
  handleEdit = index => {
    let contact = { ...this.state.contacts[index], index: index };
    // console.log(contact);
    this.setState({ editedContact: contact });
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

  render() {
    return (
      <div className="app">
        <DisplayContacts
          contacts={this.state.contacts}
          removeContact={this.removeContact}
          handleEdit={this.handleEdit}
        />
        <AddContact
          addContact={this.addContact}
          handleUpdate={this.handleUpdate}
          editedContact={this.state.editedContact}
        />
      </div>
    );
  }
}

export default App;
