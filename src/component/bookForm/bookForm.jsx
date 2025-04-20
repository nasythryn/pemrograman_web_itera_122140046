import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { BookContext } from '../../context/bookContext';
import './bookForm.css';

const BookForm = ({ editingBook, setEditingBook }) => {
  const { addBook, editBook } = useContext(BookContext);

  const [form, setForm] = useState({
    title: '',
    author: '',
    status: 'dimiliki',
    image: '',
  });

  useEffect(() => {
    if (editingBook) {
      setForm(editingBook);
    }
  }, [editingBook]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = e => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm({ ...form, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!form.title || !form.author) return alert('Judul dan penulis wajib diisi');

    // Normalize status before saving
    const normalizedForm = {
      ...form,
      status: form.status.toLowerCase().trim(),
    };

    if (form.id) {
      editBook(normalizedForm);
    } else {
      addBook(normalizedForm);
    }

    setForm({ title: '', author: '', status: 'dimiliki', image: '' });
    setEditingBook(null);
  };

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <input name="title" value={form.title} onChange={handleChange} placeholder="Judul Buku" />
      <input name="author" value={form.author} onChange={handleChange} placeholder="Penulis" />
      <select name="status" value={form.status} onChange={handleChange}>
        <option value="dimiliki">Dimiliki</option>
        <option value="baca">Sedang Dibaca</option>
        <option value="beli">Ingin Beli</option>
      </select>
      <input
        type="file"
        name="image"
        accept="image/*"
        onChange={handleImageChange}
      />
      <button type="submit">{form.id ? 'Update' : 'Tambah Buku'}</button>
    </form>
  );
};

BookForm.propTypes = {
  editingBook: PropTypes.object,
  setEditingBook: PropTypes.func,
};

export default BookForm;
