import { render, screen, fireEvent } from '@testing-library/react';
import BookForm from './bookForm'; // Adjust the import path as necessary
import { BookProvider } from '../../context/bookContext'; // Adjust if necessary
import '@testing-library/jest-dom';

const renderForm = (editingBook = null) => {
  render(
    <BookProvider>
      <BookForm editingBook={editingBook} setEditingBook={() => {}} />
    </BookProvider>
  );
};

describe('BookForm component', () => {
  it('should render form fields correctly', () => {
    renderForm();

    expect(screen.getByPlaceholderText('Judul Buku')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Penulis')).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent('Tambah Buku');
  });

  it('should submit form data correctly', () => {
    const setEditingBookMock = jest.fn();
    renderForm();

    fireEvent.change(screen.getByPlaceholderText('Judul Buku'), { target: { value: 'React for Beginners' } });
    fireEvent.change(screen.getByPlaceholderText('Penulis'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'baca' } });

    fireEvent.click(screen.getByRole('button'));
    expect(setEditingBookMock).not.toHaveBeenCalled(); // Not editing book, no need to update
    expect(screen.getByPlaceholderText('Judul Buku').value).toBe('');
  });
});