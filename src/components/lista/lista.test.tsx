import { render, screen } from '@testing-library/react';
import Lista from './lista';

test('renders lista component', () => {
  
  render(<Lista />);
  
  const listElement = screen.getByTestId("myList");
  
  expect(listElement).toContainHTML("<li>");
});