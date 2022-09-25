import '@testing-library/jest-dom';

import { screen } from '@testing-library/react';
import { expect, it } from 'vitest';

import { render } from '/render';

import { LazeLogo } from '.';

it('should be rendered correctly', () => {
  const { container } = render(<LazeLogo size={40} option="logo" />);
  expect(container.firstChild).toMatchSnapshot();
});

it('should have "presentation" role', () => {
  render(<LazeLogo size={40} option="logo" />);
  expect(screen.getByRole('presentation')).toBeInTheDocument();
});
