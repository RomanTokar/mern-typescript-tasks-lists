import React, {FC} from 'react';
import {Field, Form, Formik} from 'formik';
import {Button, Paper, Typography} from '@material-ui/core';
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

const SignUp: FC = () => {
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
          <Paper className={classes.form} elevation={isSubmitting ? 6 : 12}>
            <Typography variant={'h4'} gutterBottom>Sign Up</Typography>
            <Field name={'name'} label={'Name'} as={CustomTextField}/>
            <Field name={'email'} label={'Email'} as={CustomTextField}/>
            <Field type={'password'} name={'password'} label={'Password'} as={CustomTextField}/>
            <Field type={'password'} name={'confirmPassword'} label={'ConfirmPassword'}
                   as={CustomTextField}/>
            {status && <Alert severity={'error'}>{status}</Alert>}
            <Button disabled={isSubmitting} type={'submit'} color={'primary'} variant={'contained'}>Sign
              Up</Button>
            <Typography>
              {`Already registered? `}
              <NavLink to={'/signIn'}>Sign In</NavLink>
            </Typography>
          </Paper>
        </Form>
      )}
    </Formik>
  );
};

export default SignUp;