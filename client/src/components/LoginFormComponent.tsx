import { TextField } from '@mui/material';
import styled from 'styled-components';
import { useForm } from '../utils/customHooks';

const LoginFormComponent = ({ isMember }: { isMember: boolean }) => {
  const initialState = {
    email: '',
    username: '',
    password: '',
    confirmedPassword: '',
  };

  const { values, onSubmit, onChange } = useForm(initialState, () => {});

  const inputStyle = {
    '& label.Mui-focused': {
      color: 'var(--clr-green-primary-hover)',
    },
    '& .MuiOutlinedInput-root': {
      ':hover fieldset': {
        borderColor: 'var(--clr-green-primary)',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'var(--clr-green-primary)',
      },
    },
  };

  return (
    <Form onSubmit={onSubmit}>
      <TextField
        id='standard-basic'
        label='Email'
        variant='outlined'
        type='email'
        className={isMember ? 'hide_input' : 'input'}
        sx={inputStyle}
        onChange={onChange}
        name='email'
      />
      <TextField
        id='standard-basic'
        label='Username'
        variant='outlined'
        type='text'
        className='input'
        sx={inputStyle}
        onChange={onChange}
        name='username'
      />
      <TextField
        id='standard-basic'
        label='Password'
        variant='outlined'
        type='password'
        className='input'
        sx={inputStyle}
        onChange={onChange}
        name='password'
      />
      <TextField
        id='standard-basic'
        label='Confirmed Password'
        variant='outlined'
        className={isMember ? 'hide_input' : 'input'}
        type='password'
        sx={inputStyle}
        onChange={onChange}
        name='confirmedPassword'
      />
      <ConfirmButton>{isMember ? 'Login' : 'Register'}</ConfirmButton>
    </Form>
  );
};

export default LoginFormComponent;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2rem 0rem;
  .input {
    margin-bottom: 1.5rem;
  }
  .hide_input {
    display: none;
  }
`;

const ConfirmButton = styled.button`
  background-color: var(--clr-green-primary);
  border: none;
  padding: 16.5px 14px;
  font-size: 1rem;
  letter-spacing: 0.02857em;
  cursor: pointer;
  transition: all 0.2s;
  border-radius: 4px;

  &:hover {
    background-color: var(--clr-green-primary-hover);
  }
`;
