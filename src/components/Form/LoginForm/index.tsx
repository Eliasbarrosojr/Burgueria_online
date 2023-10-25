import { useForm } from 'react-hook-form';
// eslint-disable-next-line import/no-extraneous-dependencies
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from 'react';
import LoginSchema from './schema';
import { ILoginForm } from '../../../Providers/UserContect/type';
import { UserContext } from '../../../Providers/UserContect/UserContext';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import Input from '../Input';

const LoginForm = () => {
  const { Login } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({ resolver: yupResolver(LoginSchema) });

  const submit = (data: ILoginForm) => {
    Login(data);
  };

  return (
    <StyledForm onClick={handleSubmit(submit)}>
      <Input
        label='Email'
        type='email'
        placeholder='Digite seu email'
        register={register('email')}
        error={errors.email}
      />
      <Input
        label='Senha'
        type='password'
        placeholder='Digite sua senha'
        register={register('password')}
        error={errors.password}
      />
      <StyledButton $buttonSize='default' $buttonStyle='green' type='submit'>
        Entrar
      </StyledButton>
    </StyledForm>
  );
};

export default LoginForm;
