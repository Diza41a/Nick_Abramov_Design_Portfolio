import React, { useState } from 'react';
import { Snackbar, Alert } from '@mui/material';
import type { SnackbarProps } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { TextField, Typography, Button } from '@mui/material';
import S from './styles';
import {
  generateEmailRule,
  generateMaxLengthRule,
  generateMinLengthRule,
  generateRequiredRule,
  generateTextfieldErrorProps,
} from './utils';
import type { EmailInputDto } from '../../../types/data/emailAPI';
import { sendEmail } from '../../../api/emailMethods.api';

const ContactForm = (): JSX.Element => {
  const [snackbarProps, setSnackbarProps] = useState<SnackbarProps & { error: boolean }>({
    open: false,
    message: '',
    error: false,
    autoHideDuration: 3500,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'right',
    },
  });
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<EmailInputDto>({
    defaultValues: {
      name: '',
      companyName: '',
      contactEmail: '',
      servicesRequired: '',
      projectDetails: '',
    },
    mode: 'onChange',
  });
  const onContactFormSubmit = async (emailInputDto: EmailInputDto) => {
    sendEmail(emailInputDto)
      .then(() => setSnackbarProps({
        ...snackbarProps,
        open: true,
        message: 'Your inquiry has been sent!',
        error: false,
      }))
      .catch(() => {
        setSnackbarProps({
          ...snackbarProps,
          open: true,
          message: 'Internal error. Please try again later, or reach out directly.',
          error: true,
        });
      });
  };

  return (
    <>
      {snackbarProps.open ? (
        <Snackbar
          {...snackbarProps}
          onClose={() => setSnackbarProps({ ...snackbarProps, open: false })}
        >
          <Alert
            severity={snackbarProps.error ? 'error' : 'success'}
            variant="filled"
          >
            {snackbarProps.message}
          </Alert>
        </Snackbar>
      ) : <></>}

      <S.ContactForm onSubmit={handleSubmit(onContactFormSubmit)}>
        <Typography className="Contact-Form-Label">
          If you would like to find out more about how I can help your company, please get in touch below, and I’d be
          happy to help:
        </Typography>

        <Controller
          name="name"
          control={control}
          rules={{
            ...generateRequiredRule('Name'),
            ...generateMinLengthRule('Name', 3),
            ...generateMaxLengthRule('Name', 50),
          }}
          render={({ field }) => (
            <TextField {...field} variant="outlined" placeholder="Name*" {...generateTextfieldErrorProps(errors.name)} />
          )}
        />
        <Controller
          name="companyName"
          control={control}
          rules={{
            ...generateMinLengthRule('Company Name', 3),
            ...generateMaxLengthRule('Company Name', 50),
          }}
          render={({ field }) => (
            <TextField
              {...field}
              variant="outlined"
              placeholder="Company Name"
              {...generateTextfieldErrorProps(errors.companyName)}
            />
          )}
        />
        <Controller
          name="contactEmail"
          control={control}
          rules={{
            ...generateRequiredRule('Email'),
            ...generateEmailRule(),
          }}
          render={({ field }) => (
            <TextField
              {...field}
              variant="outlined"
              placeholder="Contact Email*"
              {...generateTextfieldErrorProps(errors.contactEmail)}
            />
          )}
        />
        <Controller
          name="servicesRequired"
          control={control}
          rules={{
            ...generateRequiredRule('Services Required'),
            ...generateMinLengthRule('Services Required', 4),
            ...generateMaxLengthRule('Services Required', 100),
          }}
          render={({ field }) => (
            <TextField
              {...field}
              variant="outlined"
              placeholder="Services Required*"
              {...generateTextfieldErrorProps(errors.servicesRequired)}
            />
          )}
        />
        <Controller
          name="projectDetails"
          control={control}
          rules={{
            ...generateRequiredRule('Project Details'),
            ...generateMinLengthRule('Project Details', 10),
            ...generateMaxLengthRule('Project Details', 500),
          }}
          render={({ field }) => (
            <TextField
              {...field}
              variant="outlined"
              placeholder="Project Details*"
              multiline
              rows={4}
              {...generateTextfieldErrorProps(errors.projectDetails)}
            />
          )}
        />

        <Button className="Submit-Button" type="submit">
          Send
        </Button>
      </S.ContactForm>
    </>
  );
};

export default ContactForm;
