import React, { useState, useContext } from 'react';
import BookForm from '../../component/bookForm/bookForm';
import BookFilter from '../../component/bookFilter/bookFilter';
import BookList from '../../component/bookList/bookList'
import { BookContext } from '../../context/bookContext';

const Home = () => {
    const [editingBook, setEditingBook] = useState(null);
    const [filter, setFilter] = useState('');
    const [search, setSearch] = useState('');
    const { books } = useContext(BookContext);
  
    // filter buku berdasarkan option status  dan atau pencarian
    const filteredBooks = Array.isArray(books)
      ? books.filter((book) => {
            const matchStatus = filter ? book.status === filter : true;
            const matchSearch = search
                ? book.title?.toLowerCase().includes(search.toLowerCase())
                : true;
            return matchStatus && matchSearch;
        })
      : [];
  
    return (
        // tampilan halaman beranda
        <div style={{ padding: '1rem', textAlign: 'center'}}>
            <h1>Manajemen Buku</h1>
  
            <BookForm editingBook={editingBook} setEditingBook={setEditingBook} />
  
            <BookFilter
            filter={filter}
            setFilter={setFilter}
            search={search}
            setSearch={setSearch}/>
  
            <BookList books={filteredBooks} onEdit={setEditingBook} />
        </div>
    );
  };
  
  export default Home;