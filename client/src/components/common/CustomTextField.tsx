import {InputProps, TextField} from '@material-ui/core';
import {FieldAttributes, useField} from 'formik';
import React, {FC} from 'react';

type MyTextFieldProps = FieldAttributes<{}> & {
  label: string
  type: string,
  InputProps: InputProps
};

const CustomTextField: FC<MyTextFieldProps> = ({label, type, InputProps, ...props}) => {
  const [field, meta] = useField<{}>(props);
  const errorText = meta.error && meta.touched ? meta.error : '';

  return <TextField {...field} variant={'outlined'} fullWidth error={!!errorText}
                    helperText={errorText} {...{label, type, InputProps}}/>;
};

export default CustomTextField;