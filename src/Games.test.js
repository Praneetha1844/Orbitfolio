import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Games from './Games';

test('links to the paint game and back home', () => {
  render(
    <MemoryRouter>
      <Games />
    </MemoryRouter>
  );
  expect(screen.getByRole('link', { name: /paint/i }).getAttribute('href')).toBe('/game1');
  expect(screen.getByRole('link', { name: /home/i }).getAttribute('href')).toBe('/');
});
