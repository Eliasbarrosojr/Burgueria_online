// eslint-disable-next-line import/no-extraneous-dependencies
import * as yup from 'yup';

const LoginSchema = yup
  .object()
  .shape({
    email: yup.string().required('Campo obrigatório').email(),
    password: yup
      .string()
      .required('Campo obrigatório')
      .min(8, 'Minímo de 8 caracteres'),
  })
  .required();

export default LoginSchema;
