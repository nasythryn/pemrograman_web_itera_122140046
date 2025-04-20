import React, { createContext, useState, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [storedBooks, setStoredBooks] = useLocalStorage('books', []);
  const [books, setBooks] = useState(storedBooks);

  // menyimpan data buku ke local storage saat data buku berubah
  useEffect(() => {
    setStoredBooks(books);
  }, [books, setStoredBooks]);

  // menambahkan buku ke list buku
  const addBook = (book) => {
    setBooks([...books, { ...book, id: Date.now() }]);
  };

  // edit dan update informasi buku
  const editBook = (updatedBook) => {
    setBooks(books.map(book => book.id === updatedBook.id ? updatedBook : book));
  };

  // hapus buku
  const deleteBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, editBook, deleteBook }}>
      {children}
    </BookContext.Provider>
  );
};