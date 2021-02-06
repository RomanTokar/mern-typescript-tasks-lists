import React from 'react';
import {Form, Formik} from 'formik';
import {Button, Container, Paper, Typography} from '@material-ui/core';
import {NavLink} from 'react-router-dom';
import CustomTextField from '../../components/common/CustomTextField';
import {Alert} from '@material-ui/lab';
import useStyles from './useStyles';
import validationSchema from './validationSchema';

type FormValues = {
  email: string,
  password: string
}

export const SignIn: React.FC = () => {
  const classes = useStyles();

  return (
    <Formik<FormValues>
      initialValues={{
        email: '',
        password: ''
      }}
      validationSchema={validationSchema('signIn')}
      onSubmit={async (values, {setSubmitting, setFieldError, setStatus}) => {
        await new Promise((resolve => setTimeout(resolve, 300)));
      }}
    >
      {({status, isSubmitting}) => (
        <Form autoComplete={'off'}>
          <Container
            maxWidth={'xs'}
            disableGutters
            className={classes.container}
          >
            <Paper
              className={classes.form}
              elevation={isSubmitting ? 6 : 12}
            >
              <Typography
                variant={'h4'}
                gutterBottom
              >
                Sign In
              </Typography>
              <CustomTextField
                type={'text'}
                name={'email'}
                label={'Email'}
              />
              <CustomTextField
                type={'password'}
                name={'password'}
                label={'Password'}
                withPasswordToggling
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
                Sign In
              </Button>
              <Typography>
                {`Don’t have an account yet? `}
                <NavLink to={'/signUp'}>
                  Sign Up
                </NavLink>
              </Typography>
            </Paper>
          </Container>
        </Form>
      )}
    </Formik>
  );
};