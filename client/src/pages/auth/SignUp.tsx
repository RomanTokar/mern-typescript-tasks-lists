import React, {FC} from 'react';
import {Form, Formik} from 'formik';
import {Button, Container, Paper, Typography} from '@material-ui/core';
import {NavLink} from 'react-router-dom';
import CustomTextField from '../../components/common/CustomTextField';
import {Alert} from '@material-ui/lab';
import useStyles from './useStyles';
import validationSchema from './validationSchema';

type FormValues = {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export const SignUp: FC = () => {
  const classes = useStyles();

  return (
    <Formik<FormValues>
      initialValues={{
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={validationSchema('signUp')}
      onSubmit={async (values, {setSubmitting, setStatus, setFieldError}) => {
        await new Promise((resolve => setTimeout(resolve, 300)));
      }}>
      {({isSubmitting, status}) => (
        <Form autoComplete={'off'}>
          <Container
            maxWidth={'xs'}
            disableGutters
            className={classes.container}
          >
            <Paper
              className={classes.form}
              elevation={isSubmitting ? 6 : 12}>
              <Typography
                variant={'h4'}
                gutterBottom
              >
                Sign Up
              </Typography>
              <CustomTextField
                type={'text'}
                name={'name'}
                label={'Name'}
              />
              <CustomTextField
                type={'text'}
                name={'email'}
                label={'Email'}
              />
              <CustomTextField
                type={'password'}
                name={'password'}
                label={'Password'}
              />
              <CustomTextField
                type={'password'}
                name={'confirmPassword'}
                label={'ConfirmPassword'}
              />
              {status && (
                <Alert severity={'error'}>
                  {status}
                </Alert>
              )}
              <Button
                disabled={isSubmitting}
                type={'submit'}
                color={'primary'}
                variant={'contained'}
              >
                Sign Up
              </Button>
              <Typography>
                {`Already registered? `}
                <NavLink to={'/signIn'}>
                  Sign In
                </NavLink>
              </Typography>
            </Paper>
          </Container>
        </Form>
      )}
    </Formik>
  );
};