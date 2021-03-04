import { render, screen } from '@testing-library/react';
import Alert from './alert';

test('renders alert component', () => {
  
  render(<Alert />);
  
  const textElement = screen.getByTestId("myText");
  
  expect(textElement).toHaveTextContent("você deve aceitar os termos");
});