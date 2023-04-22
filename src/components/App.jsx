import React, { useState, useEffect } from 'react';
import ContactForm from './Contactform/ContactForm';
import ContactList from './Contactlist/Contactlist';
import Filter from './Filter/Filter';

const App = () => {
  const [contacts, setContacts] = useState(()=>{
    return JSON.parse(window.localStorage.getItem("contacts"))?? [];
  });
  const [filter, setFilter] = useState("");

  useEffect(()=>{
    window.localStorage.setItem("contacts",JSON.stringify(contacts));
  },[contacts])

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
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  };

  const getFilteredContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm contacts={contacts} onAddContact={handleAddContact} />

      <h2>Contacts</h2>
      <Filter filter={filter} onFilterChange={handleFilterChange} />
      <ContactList
        contacts={getFilteredContacts()}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
};

export default App;
