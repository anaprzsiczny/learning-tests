import { render, screen } from '@testing-library/react';
import Avatar from './avatar';

test('renders avatar component', () => {
  
  render(<Avatar />);
  
  const imgElement = screen.getByTestId("myImage");
  
  expect(imgElement).toHaveAttribute("src");
});