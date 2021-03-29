import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Star Wars text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Star Wars/i);
  expect(linkElement).toBeInTheDocument();
});
