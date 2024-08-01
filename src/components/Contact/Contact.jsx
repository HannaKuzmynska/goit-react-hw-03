import PropTypes from 'prop-types';
import styles from './Contact.module.css';

const Contact = ({ contact, deleteContact }) => {
  return (
    <li className={styles.item}>
      <p>
        {contact.name}: {contact.number}
      </p>
      <button onClick={() => deleteContact(contact.id)}>Delete</button>
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default Contact;