import '@testing-library/jest-dom';

import { screen } from '@testing-library/react';
import { expect, it } from 'vitest';

import { render } from '@/lib/test/render';

import { FormDialog } from '.';

it('should be rendered correctly', () => {
  const { container } = render(
    <FormDialog
      id="test"
      defaultValues={{}}
      handleSubmit={() => void 0}
      open
    />,
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('should have "dialog" role', () => {
  render(
    <FormDialog
      id="test"
      defaultValues={{}}
      handleSubmit={() => void 0}
      open
    />,
  );
  expect(screen.getByRole('dialog')).toBeInTheDocument();
});
