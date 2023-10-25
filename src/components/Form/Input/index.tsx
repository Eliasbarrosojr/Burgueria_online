// eslint-disable-next-line import/no-extraneous-dependencies
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import { StyledTextField } from '../../../styles/form';
import { StyledParagraph } from '../../../styles/typography';

interface IInput {
  label: string;
  register: UseFormRegisterReturn<string>;
  error?: FieldError;
  type: 'text' | 'email' | 'password';
  placeholder: string;
}

const Input = ({ label, register, error, type, placeholder }: IInput) => (
  <fieldset>
    <StyledTextField
      label={label}
      type={type}
      {...register}
      placeholder={placeholder}
    />
    {error ? (
      <StyledParagraph fontColor='red'>{error.message}</StyledParagraph>
    ) : null}
  </fieldset>
);

export default Input;
