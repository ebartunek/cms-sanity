import { AppProps } from 'next/app';
import { MantineProvider, AppShell, Navbar, Header } from '@mantine/core';
import Image from 'next/image';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          fontSizes: {
            xs: 10,
            sm: 12,
            md: 14,
            lg: 16,
            xl: 20,
          },
          fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
          fontFamilyMonospace: 'Monaco, Courier, monospace',
          lineHeight: '1.45rem',
          headings: { 
            fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
            sizes: {
              h1: { fontSize: 21, lineHeight: 1.4 },
              h2: { fontSize: 18, lineHeight: 1.5 },
              h3: { fontSize: 16, lineHeight: 1.5 },
              h4: { fontSize: 14, lineHeight: 1.5 },
              h5: { fontSize: 12, lineHeight: 1.5 },
              h6: { fontSize: 11, lineHeight: 1.5 },
            },
          },
          colorScheme: 'light',
          globalStyles: (theme) => ({
            '*, *::before, *::after': {
              boxSizing: 'border-box',
            },
  
            body: {
              backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
              color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
              lineHeight: theme.lineHeight,
            },


          }),
        }}
      >
        <AppShell
        padding="md"
        header={<Header height={60} p="xs"><Image src="/zehitomo.svg" alt="Zehitomo Logo" width={115} height={55} /></Header>}
        styles={(theme) => ({
          main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
        })}>
          <Component {...pageProps} />
        </AppShell>
      
      </MantineProvider>
  );
}