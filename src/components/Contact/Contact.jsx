import PropTypes from 'prop-types';
import { FaUser, FaPhone } from 'react-icons/fa';
import styles from './Contact.module.css';

const Contact = ({ contact, deleteContact }) => {
  return (
    <li className={styles.item}>
      <div className={styles.contactDetails}>
        <div className={styles.contactInfo}>
          <FaUser className={styles.icon} />
          <span>{contact.name}</span>
        </div>
        <div className={styles.contactInfo}>
          <FaPhone className={styles.icon} />
          <span>{contact.number}</span>
        </div>
      </div>
      <button className={styles.deleteButton} onClick={() => deleteContact(contact.id)}>Delete</button>
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