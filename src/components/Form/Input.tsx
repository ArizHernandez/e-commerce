import * as React from 'react';
import { TextField } from '@mui/material';
import { Controller, useFormContext, RegisterOptions } from 'react-hook-form';

type Props = {
  name: string;
  onChange?: Function;
  className?: string;
  defaultValue?: unknown;
  placeholder?: string;
  helperText?: string;
  helperTextError?: string;
  type?: string;
  variant: 'filled' | 'standard' | 'outlined';
  rules?: Exclude<
    RegisterOptions,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs'
  >;
};

const InputMemorized = React.memo(
  ({
    name,
    onChange,
    className,
    defaultValue,
    placeholder,
    rules,
    variant,
    type = 'text',
    helperText = '',
    helperTextError,
  }: Props) => {
    const { control } = useFormContext();

    function changeHandler(fieldChange: Function) {
      fieldChange();

      if (onChange) {
        onChange();
      }
    }

    return (
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue || ''}
        rules={rules}
        render={({ field, fieldState }) => (
          <TextField
            color="primary"
            label={name.toUpperCase()}
            type={type}
            error={fieldState.invalid}
            variant={variant}
            helperText={fieldState.invalid ? helperTextError : helperText}
            placeholder={placeholder}
            className={className || ''}
            onChange={(e) => {
              changeHandler(field.onChange.bind(null, e));
            }}
            value={field.value}
            onBlur={field.onBlur}
            ref={field.ref}
          />
        )}
      />
    );
  }
);

export default InputMemorized;
