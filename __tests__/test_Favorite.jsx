import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Favorite from '../client/redux/components/Favorite';

describe('Favorite component', () => {
  const mockData = {
    name: 'Tennis Court',
    address: '123 Main St',
    rating: 4.5,
    id: 1,
  };

  const mockRemoveHandler = jest.fn();

  beforeEach(() => {
    render(<Favorite data={mockData} onRemove={mockRemoveHandler} />);
  });

  test('renders favorite name', () => {
    const favoriteName = screen.getByText(mockData.name);
    expect(favoriteName).toBeInTheDocument();
  });

  test('renders favorite address', () => {
    const favoriteAddress = screen.getByText(`Address: ${mockData.address}`);
    expect(favoriteAddress).toBeInTheDocument();
  });

  test('renders favorite rating', () => {
    const favoriteRating = screen.getByText(`Rating: ${mockData.rating}`);
    expect(favoriteRating).toBeInTheDocument();
  });

  test('calls onRemove handler when remove button is clicked', () => {
    const removeButton = screen.getByText('Remove');
    fireEvent.click(removeButton);
    expect(mockRemoveHandler).toHaveBeenCalledWith(mockData.id);
  });
});