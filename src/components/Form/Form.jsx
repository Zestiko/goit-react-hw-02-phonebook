import React, { Component } from "react";
import { nanoid } from 'nanoid'

export class Form extends Component {
  state = {
    name: '',
  }
  handelChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value})
  }

    handelSubmit = (e) => {
    e.preventDefault();
    const { name } = this.state;
    this.props.onSubmit(name)

    this.reset()
  }

  reset = ()=> {
    this.setState({name:''})
  }

    render() {
    const inputNameId = nanoid();
    const { name } = this.state;
      return <form onSubmit={this.handelSubmit}>
      <label htmlFor={inputNameId}>Name
        <input
        id={inputNameId}
        onChange={this.handelChange}
        value={name}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        />
      </label>
      <button type="submit" >Add contac</button>
    </form>
    
        
    }
}