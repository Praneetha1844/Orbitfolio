import { render, screen } from '@testing-library/react';
import Projects from './Projects';

// jsdom has no IntersectionObserver; Projects uses it for scroll animations.
beforeAll(() => {
  global.IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

test('lists every project with a link to its repository', () => {
  render(<Projects />);
  const links = screen.getAllByRole('link', { name: /view on github/i });
  expect(links).toHaveLength(4);
  links.forEach((link) => expect(link.getAttribute('href')).toMatch(/^https:\/\/github\.com\//));
});
