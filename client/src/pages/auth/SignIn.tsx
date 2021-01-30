import React, {FC, useState} from 'react';
import {Field, Form, Formik, FormikState} from 'formik';
import {Button, Container, IconButton, InputAdornment, Paper, Typography} from '@material-ui/core';
import {NavLink} from 'react-router-dom';
import CustomTextField from '../../components/common/CustomTextField';
import {Alert} from '@material-ui/lab';
import useStyles from './useStyles';
import validationSchema from './validationSchema';
import {Visibility, VisibilityOff} from '@material-ui/icons';

type FormValues = {
  email: string,
  password: string
}

const SignInForm: FC<FormikState<FormValues>> = ({status, isSubmitting}) => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const toggleShowPassword = () => {
    setShowPassword(prev => !prev);
  };

  return (
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
          <Field
            name={'email'}
            label={'Email'}
            as={CustomTextField}
          />
          <Field
            type={showPassword ? 'text' : 'password'}
            name={'password'}
            label={'Password'}
            as={CustomTextField}
            InputProps={{
              endAdornment: (
                <InputAdornment position={'end'}>
                  <IconButton onClick={toggleShowPassword}>
                    {showPassword ? <Visibility/> : <VisibilityOff/>}
                  </IconButton>
                </InputAdornment>
              )
            }}/>
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
  );
};

export const SignIn: FC = () => {
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
      {(props) => <SignInForm {...props}/>}
    </Formik>
  );
};