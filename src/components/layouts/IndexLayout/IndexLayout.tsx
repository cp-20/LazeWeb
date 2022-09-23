import { css } from '@emotion/react';
import Container from '@material-ui/core/Container';
import type { FC, ReactNode } from 'react';

import { IndexFooter } from '@/components/models/IndexFooter';
import { IndexHeader } from '@/components/models/IndexHeader';

export type indexLayoutProps = {
  children?: ReactNode;
};

export type presentialIndexLayoutProps = indexLayoutProps;

export const PresentialIndexLayout: FC<presentialIndexLayoutProps> = ({
  children,
}) => {
  return (
    <>
      <div
        css={css`
          display: grid;
          height: 100vh;
          grid-template-rows: auto 1fr auto;
        `}
      >
        <IndexHeader />

        <main>
          <Container maxWidth="md">
            <>{children}</>
          </Container>
        </main>

        <IndexFooter />
      </div>
    </>
  );
};

export const IndexLayout: FC<indexLayoutProps> = (props) => {
  return <PresentialIndexLayout {...props} />;
};