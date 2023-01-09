import React, { Component } from "react";
import { Form } from "./Form/Form";
import { nanoid } from 'nanoid'
export class App extends Component {
  state = {
   contacts: [],
  name: '',
  }
  
  onSubmiHandler = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    console.log(contact);
    this.setState(prevState => ({contacts: [contact, ...prevState.contacts],}))
  };



  render() {
   
    const { contacts } = this.state;

    return (<>
      <h1>Phonebook</h1>
    
    
      <Form onSubmit={this.onSubmiHandler} />
      
      
      <div>
        <h2>Contacts</h2>
        <ul>
           {contacts.map(({ name, id, number }) => {
             return <li key={id}>{name}: { number}</li>
        })}
        </ul>
      </div>
    </>
    
  );
 }
};
