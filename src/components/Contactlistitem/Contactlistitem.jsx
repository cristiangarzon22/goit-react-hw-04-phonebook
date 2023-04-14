
import css from './Contactlistitem.module.css';
import PropTypes from 'prop-types';
const ContactListItem = (props) => {
 
 
    return (
      <li className={css.list}>
        {props.name}: {props.number}{' '}
        <button className={css.btn} onClick={props.onDelete}>
          Delete
        </button>
      </li>
    );
  }

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default ContactListItem;
