import PropTypes from 'prop-types';
import styles from './SearchBox.module.css';

const SearchBox = ({ filter, setFilter }) => {
  return (
    <div className={styles.searchBox}>
      <label htmlFor="search">Find contacts by name</label>
      <input
        type="text"
        id="search"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
};

SearchBox.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default SearchBox;