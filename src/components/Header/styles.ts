import { styled, AppBar, Box } from '@mui/material';
import { List as BurgerIcon } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

export const HEADER_DESKTOP_HEIGHT = 85;
export const HEADER_MOBILE_HEIGHT = 75;

const Header = styled(AppBar, {
  shouldForwardProp: (propName) => propName !== 'pathName',
})<{ pathName: string }>(({ theme, pathName }) => ({
  height: `${HEADER_DESKTOP_HEIGHT}px`,
  padding: '20px 68px',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: theme.componentColors.backgroundMain,
  boxShadow: 'none',

  [theme.breakpoints.down('tablet')]: {
    height: `${HEADER_MOBILE_HEIGHT}px`,
    padding: '25px',
  },

  [theme.breakpoints.up('tablet')]: {
    backgroundColor:
      pathName !== 'about' ? theme.componentColors.backgroundMain : theme.componentColors.backgroundSecondary,
  },
}));

const NewProjectLink = styled(Link, {
  shouldForwardProp: (propName) => propName !== 'pathName',
})<{ pathName: string }>(({ theme, pathName }) => ({
  fontFamily: theme.fonts.secondary,

  textDecorationThickness: '2px',
  textUnderlineOffset: '3.5px',
  textDecorationColor: theme.textColors.tertiary,
  transition: 'color 0.2s ease-in-out',
  '&:hover': {
    color: theme.textColors.tertiary,
  },

  [theme.breakpoints.down('tablet')]: {
    display: 'none',
  },

  [theme.breakpoints.up('tablet')]: {
    textDecorationColor: pathName !== 'about' ? theme.textColors.tertiary : theme.textColors.tertiaryAlternate,
  },
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  width: '335px',
  height: '46px',

  [theme.breakpoints.down('tablet')]: {
    width: '209px',
    height: '28px',
  },
}));

const Burger = styled(BurgerIcon)(({ theme }) => ({
  width: '48px',
  height: '42px',

  '*': {
    color: theme.textColors.main,
  },

  [theme.breakpoints.down('tablet')]: {
    width: '41px',
    height: '35px',
  },
}));

export default {
  NewProjectLink,
  Header,
  LogoContainer,
  Burger,
};
