import { useForm } from 'react-hook-form';
// eslint-disable-next-line import/no-extraneous-dependencies
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from 'react';
import { RegisterSchema } from './schema';
import Input from '../Input';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';

import { UserContext } from '../../../Providers/UserContect/UserContext';
import { IRegisterForm } from '../../../Providers/UserContect/type';

const RegisterForm = () => {
  const { CreateUser } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterForm>({ resolver: yupResolver(RegisterSchema) });

  const submit = (data: IRegisterForm) => {
    CreateUser(data);
  };

  return (
    <StyledForm onClick={handleSubmit(submit)}>
      <Input
        label='Nome'
        type='text'
        placeholder='Digite seu nome'
        register={register('name')}
        error={errors.name}
      />
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
      <Input
        label='Confirmar senha'
        type='password'
        placeholder='Confirme a sua senha'
        register={register('confirmpassword')}
        error={errors.confirmpassword}
      />
      <StyledButton $buttonSize='default' $buttonStyle='gray' type='submit'>
        Cadastrar
      </StyledButton>
    </StyledForm>
  );
};

export default RegisterForm;
