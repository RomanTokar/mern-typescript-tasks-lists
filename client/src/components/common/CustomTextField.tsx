import {IconButton, InputAdornment, TextField, useMediaQuery, useTheme} from '@material-ui/core';
import {FieldHookConfig, useField} from 'formik';
import React, {useState} from 'react';
import {Visibility, VisibilityOff} from '@material-ui/icons';

type MyTextFieldProps = {
  label?: string
  withPasswordToggling?: boolean
} & FieldHookConfig<string>;

const CustomTextField: React.FC<MyTextFieldProps> = ({
  label = '',
  type = 'text',
  withPasswordToggling = false,
  ...props
}) => {
  const [field, meta] = useField<string>(props);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const errorText = meta.error && meta.touched ? meta.error : '';
  const theme = useTheme();
  const xsSize = useMediaQuery(theme.breakpoints.down('xs'))

  const toggleShowPassword = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <TextField
      {...field}
      type={showPassword ? 'text' : 'password'}
      variant={'outlined'}
      fullWidth
      size={xsSize ? 'small' : 'medium'}
      error={!!errorText}
      helperText={errorText}
      label={label}
      InputProps={{
        endAdornment: (
          withPasswordToggling && type === 'password' &&
          <InputAdornment position={'end'}>
            <IconButton onClick={toggleShowPassword}>
              {showPassword ? <Visibility/> : <VisibilityOff/>}
            </IconButton>
          </InputAdornment>
        )
      }}
    />
  );

};

export default CustomTextField;