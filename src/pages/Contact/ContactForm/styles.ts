import { alpha, styled } from '@mui/material';

const ContactForm = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',

  '.Contact-Form-Label': {
    marginBottom: '28px',
    fontFamily: theme.fonts.main,
    fontSize: '20px',
  },

  '.MuiTextField-root': {
    marginTop: '20px',
    borderRadius: '5px',

    'input, textarea': {
      fontFamily: theme.fonts.main,
      fontSize: '20px',
      color: theme.textColors.main,
      padding: '10px',
      border: `1px solid ${theme.componentColors.inputBorder}`,
      borderRadius: '5px',
      transition: 'border-color 0.3s ease-in-out',

      '&::placeholder': {
        opacity: 1,
        color: alpha(theme.textColors.main, 0.5),
      },

      '&:hover, &:focus-visible': {
        cursor: 'none',
        transition: 'border-color 0.3s ease-in-out',
        borderColor: `${theme.componentColors.backgroundTertiary} !important`,
      },

      '&:-webkit-autofill': {
        boxShadow: `0 0 0px 1000px ${theme.componentColors.backgroundMain} inset`,
        WebkitTextFillColor: theme.textColors.main,
      },
    },

    fieldset: {
      border: 'none',
      outline: 'none',
    },

    '.MuiInputBase-root': {
      padding: 0,

      '&.Mui-error': {
        'input, textarea': {
          borderColor: '#f86262',
        },
      },
    },

    '.MuiFormHelperText-root': {
      marginTop: '5px',
      fontFamily: theme.fonts.main,
      fontSize: '16px',
    },

    '&:first-of-type': {
      marginTop: '0',
    },
  },

  '.Submit-Button': {
    marginTop: '40px',
    padding: '10px',
    fontFamily: theme.fonts.main,
    fontSize: '20px',
    backgroundColor: theme.componentColors.backgroundTertiary,
    color: theme.textColors.main,
    borderRadius: '5px',
    textTransform: 'uppercase',

    '&:hover': {
      backgroundColor: `${theme.componentColors.backgroundSecondary}`,
    },
  },

  [theme.breakpoints.down('laptop')]: {
    padding: '0 15px',

    '.Contact-Form-Label': {
      marginBottom: '15px',
    },

    '.Submit-Button': {
      marginBottom: '40px',
    },
  },

  [theme.breakpoints.down('tablet')]: {
    '.Contact-Form-Label': {
      fontSize: '16px',
    },

    '.MuiTextField-root': {
      'input, textarea': {
        fontSize: '16px',
      },

      '.MuiFormHelperText-root': {
        fontSize: '14px',
      },
    },
  },
}));

export default {
  ContactForm,
};
