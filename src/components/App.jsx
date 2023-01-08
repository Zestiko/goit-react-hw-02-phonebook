import React, { Component } from "react";
import { Form } from "./Form/Form";
import { nanoid } from 'nanoid'
export class App extends Component {
  state = {
  contacts: [1,2,3],
  name: ''
  }
  
  onSubmiHandler = name => {
    
    const contact = {
      id: nanoid(),
      name,
    };
    console.log(contact);
    
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }))
    
  };



  render() {
   
    const { name,contacts } = this.state;

    return (<>
      <h1>Phonebook</h1>
      {name}
      {contacts}
      <Form onSubmit={this.onSubmiHandler} />
      
      
      <div>
        <h2>Contacts</h2>
      </div>
    </>
    
  );
 }
};
