---
to: src/components/<%- component_type %>/<%- h.changeCase.pascal(component_name) %>/<%- h.changeCase.pascal(component_name) %>.test.tsx
---

import '@testing-library/jest-dom';

import { screen } from '@testing-library/react';
import { expect, it } from 'vitest';

import { render } from '@/lib/test/render';

import { <%- h.changeCase.pascal(component_name) %> } from '.';

it('should be rendered correctly', () => {
  const { container } = render(<<%- h.changeCase.pascal(component_name) %> />);
  expect(container.firstChild).toMatchSnapshot();
});

it('should have "???" role', () => {
  render(<<%- h.changeCase.pascal(component_name) %> />);
  expect(screen.getByRole('???')).toBeInTheDocument();
});
