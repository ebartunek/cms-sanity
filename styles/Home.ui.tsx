import { styled } from '@stitches/react';

export const Button = styled('button', {
  backgroundColor: 'dogerblue',
  borderRadius: '9999px',
  fontSize: '13px',
  padding: '10px 15px',
  '&:hover': {
    backgroundColor: 'lightgray',
  },
});

export const DivContainer = styled('div', {
    padding: '0 2rem'
  });

export const Main = styled('main', {
  minHeight: '100vh',
  padding: '4rem 0',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})

export const Footer = styled('footer', {
  display: 'flex',
  flex: 1,
  padding: '1rem 0',
  borderTop: '1px solid #eaeaea',
  justifyContent: 'center',
  alignItems: 'center',
})

export const LogoContainer = styled('span', {
  height: '1em',
})