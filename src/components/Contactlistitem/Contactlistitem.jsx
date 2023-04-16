import React from 'react';
import css from './Contactlistitem.module.css';
import PropTypes from 'prop-types';

const ContactListItem = ({ name, number, onDelete }) => {
  return (
    <li className={css.list}>
      {name}: {number}{' '}
      <button className={css.btn} onClick={onDelete}>
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactListItem;
