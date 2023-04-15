import React, { useState, useEffect } from 'react';
import ContactForm from './Contactform/ContactForm';
import ContactList from './Contactlist/Contactlist';
import Filter from './Filter/Filter';

const App = () => {
  const [contacts,setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  

  useEffect (() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  },[]);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify('contacts'));
  }, [contacts]);

  const handleAddContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleDeleteContact = (contactId) => {
    const updatedContacts = contacts.filter(
      (contact) => contact.id !== contactId
    );
    setContacts(updatedContacts);
  };

  const getFilteredContacts = () => {
    if (Array.isArray(contacts)) {
      return contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
   
    return [];
  };


    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          contacts={contacts}
          onAddContact={handleAddContact}
        />

        <h2>Contacts</h2>
        <Filter
          filter={filter}
          onFilterChange={handleFilterChange}
        />
        <ContactList
          contacts={getFilteredContacts()}
          onDeleteContact={handleDeleteContact}
        />
      </div>
    );
  }


export default App;