import { Box, styled, Typography } from '@mui/material';

const FaqContainer = styled(Box)(() => ({
}));

const PageTitle = styled(Typography)(({ theme }) => ({
  margin: 'auto',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  fontFamily: theme.fonts.main,
  fontSize: '64px',
  marginTop: '40px',
  marginBottom: '80px',

  span: {
    color: theme.textColors.tertiary,
  },
  
  [theme.breakpoints.down('tablet')]: {
    fontSize: '50px',
    marginBottom: '65px',
  },
}));

const Banner = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '245px',
  marginTop: '85px',
  backgroundColor: theme.componentColors.backgroundTertiary,

  '.MuiTypography-root': {
    fontFamily: theme.fonts.main,
    fontSize: '48px',
    textAlign: 'center',
    color: theme.textColors.main,
  },

  [theme.breakpoints.down('tablet')]: {
    display: 'none',
  },
}));

export default {
  FaqContainer,
  PageTitle,
  Banner,
};