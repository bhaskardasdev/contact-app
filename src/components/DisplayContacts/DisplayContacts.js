import React from "react";
import "./DisplayContacts.scss";
import { IoIosCall } from "react-icons/io";
import { IoIosPersonAdd } from "react-icons/io";

function DisplayContacts({ contacts, removeContact, handleEdit }) {
  return (
    <div className="contacts">
      {contacts.length === 0 ? (
        <p className="notification">
          Nothing to show... Add new contact list....
        </p>
      ) : (
        contacts.map((contact, index) => {
          return (
            <div className="contact" key={index}>
              <h1 className="name">
                <IoIosPersonAdd className="iName" />
                {contact.name}
              </h1>
              <h3 className="company">{contact.company}</h3>
              <p className="number">
                <IoIosCall className="iNumber" />
                {contact.number}
              </p>
              <button className="edit" onClick={() => handleEdit(index)}>
                Edit
              </button>
              <button
                className="delete"
                onClick={() => removeContact(contact.id)}
              >
                Delete
              </button>
            </div>
          );
        })
      )}
    </div>
  );
}

export default DisplayContacts;
