import '@testing-library/jest-dom';

import { screen } from '@testing-library/react';
import { expect, it } from 'vitest';

import { ColorModeProvider } from '@/components/contexts/ColorModeContext';
import { render } from '@/lib/test/render';

import { DefaultLink } from '.';

it('should be rendered correctly', () => {
  const { container } = render(<DefaultLink href="/" />, {
    wrapper: ColorModeProvider,
  });
  expect(container.firstChild).toMatchSnapshot();
});

it('should have "link" role', () => {
  render(<DefaultLink href="/" />, { wrapper: ColorModeProvider });
  expect(screen.getByRole('link')).toBeInTheDocument();
});
