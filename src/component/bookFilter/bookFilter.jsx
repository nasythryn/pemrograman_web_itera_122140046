import React from 'react';
import PropTypes from 'prop-types';
import './bookFilter.css'

const BookFilter = ({ filter, setFilter, search, setSearch }) => {
  return (
    // fitur dalam filtering dengan dropdown dan fitur pencarian
    <div className="book-filter">
      <select value={filter} onChange={e => setFilter(e.target.value)}>
        <option value="">Semua</option>
        <option value="milik">Dimiliki</option>
        <option value="baca">Sedang Dibaca</option>
        <option value="beli">Ingin Dibeli</option>
      </select>
      <input
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Cari buku..."
      />
    </div>
  );
};

// validasi type props
BookFilter.propTypes = {
  filter: PropTypes.string,
  setFilter: PropTypes.func,
  search: PropTypes.string,
  setSearch: PropTypes.func,
};

export default BookFilter;