import { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';
const ContactForm = (props) => {
    const [name,setName] = useState('');
    const [number,setNumber] = useState('');

    const handleNameChange = (e) => {
        const { value } = e.target;
        setName(value);
      };
      
      const handleNumberChange = (e) => {
        const { value } = e.target;
        setNumber(value);
      };

 const handleSubmit = (e) => {
    e.preventDefault();
    const { contacts, onAddContact } = props;
 
    const existingContact = contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (existingContact) {
      alert(`${name} and ${number} already exists in your contacts.`);
      setName('');
      setNumber('');
      return;
    }

    const newContact = { id: nanoid(), name, number };
    onAddContact(newContact);
    setName('');
    setNumber('');
  };

    return (
      <form onSubmit={handleSubmit}>
        <label className={css.label} htmlFor="name">
          Name :
        </label>
        <input
          className={css.border}
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
        />

        <label className={css.label} htmlFor="number">
          Number :
        </label>
        <input
          className={css.border}
          type="text"
          name="number"
          value={number}
          onChange={handleNumberChange}
        />

        <button className={css.btn} type="submit">
          Add Contact
        </button>
      </form>
    );
  }


ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onAddContact: PropTypes.func.isRequired,
};
export default ContactForm;
