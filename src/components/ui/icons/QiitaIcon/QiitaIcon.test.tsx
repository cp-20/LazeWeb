import '@testing-library/jest-dom';

import { screen } from '@testing-library/react';
import { expect, it } from 'vitest';

import { render } from '@/lib/test/render';

import { QiitaIcon } from '.';

it('should be rendered correctly', () => {
  const { container } = render(<QiitaIcon />);
  expect(container.firstChild).toMatchSnapshot();
});

it('should have "presentation" role', () => {
  render(<QiitaIcon />);
  expect(screen.getByRole('presentation')).toBeInTheDocument();
});
