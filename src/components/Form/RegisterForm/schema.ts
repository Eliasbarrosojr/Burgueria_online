import * as yup from 'yup';

export const RegisterSchema = yup
  .object({
    name: yup.string().required('Campo obrigatório'),
    email: yup.string().required('Campo obrigatório').email(),
    password: yup
      .string()
      .required('Campo obrigatório')
      .min(8, 'Minímo de 8 caracteres'),
    confirmpassword: yup
      .string()
      .required('Campo obrigatório')
      .oneOf([yup.ref('password')], 'As senhas precisam ser iguais.'),
  })
  .required();
