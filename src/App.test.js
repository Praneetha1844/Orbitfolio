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

test('links use the current repository names, not the pre-rename ones', () => {
  render(<Projects />);
  const hrefs = screen.getAllByRole('link').map((a) => a.getAttribute('href'));
  expect(hrefs).toEqual(
    expect.arrayContaining([
      'https://github.com/Praneetha1844/WingDash',
      'https://github.com/Praneetha1844/InkSense',
      'https://github.com/Praneetha1844/ShuntCalc',
    ])
  );
  hrefs.forEach((href) => expect(href).not.toMatch(/\/(flappy|Calci|CodeAlpha_[^/]*)$/));
});

test('uses a single level-2 heading and one level-3 heading per project', () => {
  render(<Projects />);
  expect(screen.getAllByRole('heading', { level: 2 })).toHaveLength(1);
  expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(4);
});
