import '@testing-library/jest-dom'; // Tambahkan ini di bagian atas file test kamu
import { render, screen, fireEvent } from '@testing-library/react';
import BookList from './bookList';
import { BookProvider } from '../../context/bookContext';

const books = [
  { id: 1, title: 'Clean Code', author: 'Robert C. Martin', status: 'dimiliki' },
  { id: 2, title: 'Eloquent JavaScript', author: 'Marijn Haverbeke', status: 'baca' },
];

const deleteBookMock = jest.fn();

const renderList = () => {
  render(
    <BookProvider value={{ deleteBook: deleteBookMock }}>
      <BookList books={books} onEdit={() => {}} />
    </BookProvider>
  );
};

describe('BookList component', () => {
  it('should call deleteBook when delete button is clicked', () => {
    renderList();

    // Pastikan tombol Hapus ada
    expect(screen.getAllByText('Hapus')).toHaveLength(2); // Tombol Hapus untuk setiap buku

    // Klik tombol Hapus pada buku pertama
    fireEvent.click(screen.getAllByText('Hapus')[0]);

    // Pastikan deleteBookMock dipanggil dengan ID buku yang benar (1)
    expect(deleteBookMock).toHaveBeenCalledWith(1);
    expect(deleteBookMock).toHaveBeenCalledTimes(1); // Pastikan hanya dipanggil sekali
  });

  it('should display fallback text if no books are passed', () => {
    render(
      <BookProvider value={{ deleteBook: deleteBookMock }}>
        <BookList books={[]} onEdit={() => {}} />
      </BookProvider>
    );

    expect(screen.getByText('Tidak ada buku yang cocok.')).toBeInTheDocument();
  });
});