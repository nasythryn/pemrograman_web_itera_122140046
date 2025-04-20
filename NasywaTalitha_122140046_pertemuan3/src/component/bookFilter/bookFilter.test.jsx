import { render, screen, fireEvent } from '@testing-library/react';
import BookFilter from './bookFilter'; // Adjust the import path as necessary
import '@testing-library/jest-dom';

describe('BookFilter component', () => {
  it('should render filter dropdown and search input', () => {
    // Rendering the component
    render(
      <BookFilter filter="Sedang Dibaca" setFilter={() => {}} search="" setSearch={() => {}} />
    );

    // Checking if the dropdown and search input are rendered correctly
    expect(screen.getByRole('combobox')).toBeInTheDocument(); // Dropdown (select element)
    expect(screen.getByPlaceholderText('Cari buku...')).toBeInTheDocument(); // Search input
  });

  it('should change filter value when dropdown is selected', () => {
    const setFilterMock = jest.fn(); // Mock the setFilter function
    render(
      <BookFilter filter="Sedang Dibaca" setFilter={setFilterMock} search="" setSearch={() => {}} />
    );

    // Simulating change in dropdown (filter selection)
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'baca' } });

    // Checking if the setFilter function was called with the correct value
    expect(setFilterMock).toHaveBeenCalledWith('baca');
  });

  it('should change search value when input is typed', () => {
    const setSearchMock = jest.fn(); // Mock the setSearch function
    render(
      <BookFilter filter="Sedang Dibaca" setFilter={() => {}} search="" setSearch={setSearchMock} />
    );

    // Simulating typing into the search input
    fireEvent.change(screen.getByPlaceholderText('Cari buku...'), { target: { value: 'React' } });

    // Checking if the setSearch function was called with the correct value
    expect(setSearchMock).toHaveBeenCalledWith('React');
  });
});