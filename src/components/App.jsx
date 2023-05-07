import React, { Component } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

import { Wrapper, TitlePhonebook, TitleContacts } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    // contacts: [],
    filter: '',
  };

  onSubmit = data =>
    this.setState(prevState => {
      const contacts = prevState.contacts;
      if (contacts.find(({ name }) => name === data.name)) {
        return alert(`${data.name} is already in contacts`);
      }
      return { contacts: [data, ...contacts] };
    });

  handleChangeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;
    if (filter) {
      const normalizedFilter = filter.toLowerCase();
      return contacts
        .filter(contact =>
          contact.name.toLowerCase().includes(normalizedFilter)
        )
        .sort((a, b) => a.name.localeCompare(b.name));
    } else {
      return contacts.sort((a, b) => a.name.localeCompare(b.name));
    }
  };

  removeContact = idx => {
    const { contacts } = this.state;
    const contactsWithoutRemovedContact = contacts.filter(
      contact => contact.id !== idx
    );
    this.setState({ contacts: contactsWithoutRemovedContact });
  };
  render() {
    const { filter } = this.state;
    return (
      <Wrapper>
        <TitlePhonebook>Phonebook</TitlePhonebook>
        <ContactForm onSubmit={this.onSubmit} />

        <TitleContacts>Contacts</TitleContacts>
        <Filter filter={filter} onChange={this.handleChangeFilter} />
        <ContactList
          contacts={this.filteredContacts()}
          onRemove={this.removeContact}
        />
      </Wrapper>
    );
  }
}
