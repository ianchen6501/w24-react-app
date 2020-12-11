import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue(
      [{id: 1, title: 'aaa', createdAt: 12345}]
    )
  })
  render(<App />);
  const linkElement = screen.getByText(/大家的部落格/i);
  expect(linkElement).toBeInTheDocument();
});
