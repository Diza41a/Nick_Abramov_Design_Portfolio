import { styled, Box } from '@mui/material';

const LoadingScreenContainer = styled(Box)(({ theme }) => ({
  position: 'fixed',
  zIndex: 10000,
  width: '100vw',
  height: '100vh',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.componentColors.backgroundMain,

  '.Loading-Box': {
    position: 'relative',

    '.MuiCircularProgress-root': {
      position: 'absolute',
      top: '50%',
      left: '50%',
      translate: '-50% -50%',

      circle: {
        strokeWidth: '1.75px',
      },

      '&.Main-Moving-Spinner': {
        svg: {
          circle: {
            color: theme.componentColors.backgroundSecondary,
          },
        },
      },

      '&.Secondary-Moving-Spinner': {
        animationDelay: '0s',
        animationDuration: '3s',

        svg: {
          circle: {
            color: theme.componentColors.backgroundTertiary,
            animationDuration: '3s',
          },
        },
      },
    },

    '.Loading-Logo': {
      width: '85px',
      height: '85px',
      position: 'relative',
      left: '4px',
      top: '1px',
    },
  },
}));

export default {
  LoadingScreenContainer,
};
