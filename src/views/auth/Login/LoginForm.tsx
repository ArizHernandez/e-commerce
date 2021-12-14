/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';

import { LoadingButton } from '@mui/lab';
import { FormProvider, useForm } from 'react-hook-form';

import { formType } from 'types/Login';

import Input from 'components/Form/Input';
import FormGroup from 'components/Form/FormGroup';
import classes from './LoginForm.module.css';

function LoginForm() {
  const method = useForm();
  const [isLoading, setIsLoading] = useState(false);

  function submitHandler(values: formType) {
    setIsLoading(true);
    console.log(values);
  }

  return (
    <FormProvider {...method}>
      <form
        className={classes['login-form']}
        onSubmit={method.handleSubmit(submitHandler)}
      >
        <FormGroup>
          <Input
            name="user"
            variant="filled"
            className={classes['login-input']}
            placeholder="Usuario"
            helperTextError="El usuario debe de ser mayor a 3 caracteres*"
            rules={{ required: true, minLength: 3 }}
          />
        </FormGroup>
        <FormGroup>
          <Input
            className={classes['login-input']}
            name="password"
            type="password"
            variant="filled"
            placeholder="********"
            helperTextError="El password debe de ser mayor a 8 caracteres*"
            rules={{ required: true, minLength: 8 }}
          />
        </FormGroup>
        <LoadingButton
          loading={isLoading}
          type="submit"
          color="primary"
          variant="contained"
        >
          ingresar
        </LoadingButton>
      </form>
    </FormProvider>
  );
}

export default LoginForm;
