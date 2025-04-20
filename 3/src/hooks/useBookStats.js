import { useContext, useMemo } from 'react';
import { BookContext } from '../context/bookContext';

const useBookStats = () => {
  const { books } = useContext(BookContext);

  return useMemo(() => {
    return {
      total: books.length,
      owned: books.filter(b => normalizeStatus(b.status) === 'dimiliki').length,
      reading: books.filter(b => normalizeStatus(b.status) === 'baca').length,
      wishlist: books.filter(b => normalizeStatus(b.status) === 'beli').length,
    };
  }, [books]);
};

// Normalisasi status agar tahan typo, kapitalisasi, dll
const normalizeStatus = (status) => {
  if (!status) return '';
  const s = status.toLowerCase().trim();
  if (s.includes('dimiliki')) return 'dimiliki';
  if (s.includes('baca')) return 'baca';
  if (s.includes('beli')) return 'beli';
  return 'lain';
};

export default useBookStats;