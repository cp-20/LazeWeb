import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';

import { IndexHeader } from '.';

it('should be rendered correctly', () => {
  const { container } = render(<IndexHeader />);
  expect(container.firstChild).toMatchSnapshot();
});

it('should have "banner" role', () => {
  render(<IndexHeader />);
  expect(screen.getByRole('banner')).toBeInTheDocument();
});
