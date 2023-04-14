
import ContactListItem from '../Contactlistitem/Contactlistitem';
import PropTypes from 'prop-types';
const ContactList = (props) => {
    return (
      <ul>
        {props.contacts.map((contact) => (
          <ContactListItem
            key={contact.id}
            name={contact.name}
            number={contact.number}
            onDelete={() => props.onDeleteContact(contact.id)}
          />
        ))}
      </ul>
    );
  }

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
export default ContactList;
