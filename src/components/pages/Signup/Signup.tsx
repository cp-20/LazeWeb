import { css } from '@emotion/react';
import Box from '@mui/material/Box';
import { grey } from '@mui/material/colors';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import { Trans, useTranslation } from 'next-i18next';
import type { FC } from 'react';

import { Descriptions } from '@/components/functional/Descriptions';
import { LoginLayout } from '@/components/layouts/LoginLayout';
import {
  AuthError,
  AuthErrorProvider,
} from '@/components/layouts/LoginLayout/AuthError';
import { AuthButton } from '@/components/models/AuthButton';
import { SignupForm } from '@/components/models/AuthForm';
import { DefaultLink } from '@/components/ui/DefaultLink';
import { pagesPath } from '@/lib/$path';

export const PresentialSignup: FC = () => {
  const [t] = useTranslation(['signup', 'common']);

  return (
    <>
      <Descriptions title={t('title')} description={t('description')} />

      <LoginLayout title={t('title')}>
        <AuthErrorProvider>
          <Box mb={4}>
            <AuthError />
          </Box>
          <Stack spacing={2} direction="column">
            <AuthButton method="Google" authType="signup" />
            <AuthButton method="Twitter" authType="signup" />
            <AuthButton method="GitHub" authType="signup" />
          </Stack>
        </AuthErrorProvider>

        <Divider sx={{ margin: '2rem 0 1rem 0', color: grey['400'] }}>
          {t('common:or')}
        </Divider>
        <AuthErrorProvider>
          <Box mt={2} mb={4}>
            <AuthError />
          </Box>
          <SignupForm />
        </AuthErrorProvider>

        <p
          css={css`
            margin-top: 2rem;
            text-align: right;
          `}
        >
          <Trans t={t} i18nKey="footer">
            {[<DefaultLink href={pagesPath.login.$url()} key="/login" />]}
          </Trans>
        </p>
      </LoginLayout>
    </>
  );
};

export const Signup: FC = () => {
  return <PresentialSignup />;
};
