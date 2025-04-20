import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { BookContext } from '../../context/bookContext';
import './bookList.css';

const BookCard = ({ book, onEdit, onDelete }) => {
  const normalizeStatus = (status) => {
    switch (status?.toLowerCase()) {
      case 'dimiliki':
      case 'milik': // untuk menangani data lama
        return 'Dimiliki';
      case 'baca':
        return 'Sedang Dibaca';
      case 'beli':
        return 'Ingin Dibeli';
      default:
        return 'Tidak Diketahui';
    }
  };

  return (
    <div className="book-card">
      {book?.image && (
        <img
          src={book.image}
          alt="Preview"
        />
      )}
      <h3>{book?.title || 'No Title'}</h3>
      <p><strong>Penulis:</strong> {book?.author || 'No Author'}</p>
      <p><strong>Status:</strong> {normalizeStatus(book?.status)}</p>

      <div className="book-card-actions">
        <button onClick={() => onEdit(book)}>Edit</button>
        <button onClick={() => onDelete(book.id)}>Hapus</button>
      </div>
    </div>
  );
};

BookCard.propTypes = {
  book: PropTypes.object.isRequired,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
};

const BookList = ({ books, onEdit }) => {
  const { deleteBook } = useContext(BookContext);

  if (!Array.isArray(books) || books.length === 0) {
    return <div>Tidak ada buku yang cocok.</div>;
  }

  return (
    <div className="book-list">
      {books.map((book) =>
        book ? (
          <BookCard
            key={book.id}
            book={book}
            onEdit={onEdit}
            onDelete={deleteBook}
          />
        ) : (
          <div key="no-book">Data buku tidak valid</div>
        )
      )}
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  onEdit: PropTypes.func,
};

export default BookList;