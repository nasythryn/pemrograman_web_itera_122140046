// useBookStats.test.js
import { renderHook } from '@testing-library/react';
import useBookStats from './useBookStats';
import { BookContext } from '../context/bookContext'; // Pastikan path-nya benar

// Data contoh
const books = [
  { id: 1, title: 'Clean Code', status: 'dimiliki' },
  { id: 2, title: 'Eloquent JavaScript', status: 'baca' },
  { id: 3, title: 'Atomic Habits', status: 'beli' },
];

const wrapper = ({ children }) => (
  <BookContext.Provider value={{ books }}>
    {children}
  </BookContext.Provider>
);

test('should calculate book stats correctly', () => {
  const { result } = renderHook(() => useBookStats(), { wrapper });

  // Periksa apakah nilai yang dikembalikan sesuai dengan data yang ada
  expect(result.current.total).toBe(3); // Total buku
  expect(result.current.owned).toBe(1); // Buku yang dimiliki
  expect(result.current.reading).toBe(1); // Buku yang sedang dibaca
  expect(result.current.wishlist).toBe(1); // Buku yang ingin dibeli
});