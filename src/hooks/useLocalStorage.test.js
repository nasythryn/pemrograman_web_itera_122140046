import { renderHook, act } from '@testing-library/react';
import useLocalStorage from './useLocalStorage';

describe('useLocalStorage', () => {
  it('should initialize from localStorage', () => {
    localStorage.setItem('myKey', JSON.stringify('storedValue'));
    const { result } = renderHook(() => useLocalStorage('myKey', 'default'));

    expect(result.current[0]).toBe('storedValue');
  });

  it('should update localStorage and state', () => {
    const { result } = renderHook(() => useLocalStorage('myKey', 'default'));

    act(() => {
      result.current[1]('newValue');
    });

    expect(result.current[0]).toBe('newValue');
    expect(localStorage.getItem('myKey')).toBe(JSON.stringify('newValue'));
  });
});