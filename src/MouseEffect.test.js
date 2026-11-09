import { fireEvent, render } from '@testing-library/react';
import MouseEffect from './MouseEffect';

beforeAll(() => {
  window.matchMedia = (query) => ({ matches: query === '(pointer: fine)', addEventListener() {}, removeEventListener() {} });
});

test('follows the pointer and enlarges over elements added after mount', () => {
  const { container } = render(<MouseEffect />);
  const cursor = container.querySelector('.custom-cursor');

  fireEvent.mouseMove(window, { clientX: 40, clientY: 60 });
  expect(cursor.style.left).toBe('40px');
  expect(cursor.style.top).toBe('60px');
  expect(cursor.classList.contains('visible')).toBe(true);

  // Added after the effect ran: the old per-element listeners would have missed it.
  const link = document.createElement('a');
  link.href = '/late';
  document.body.appendChild(link);
  fireEvent.mouseOver(link);
  expect(cursor.classList.contains('hovered')).toBe(true);

  fireEvent.mouseOver(document.body);
  expect(cursor.classList.contains('hovered')).toBe(false);
  link.remove();
});

test('does nothing when the primary pointer is not fine (touch)', () => {
  window.matchMedia = () => ({ matches: false });
  const { container } = render(<MouseEffect />);
  const cursor = container.querySelector('.custom-cursor');
  fireEvent.mouseMove(window, { clientX: 5, clientY: 5 });
  expect(cursor.style.left).toBe('');
});
