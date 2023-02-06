import { useState } from 'react';
import styled from 'styled-components';
import { LoginFormComponent, Logo } from '../components';

const LoginPage = () => {
  const [isMember, setIsMember] = useState(true);

  return (
    <Wrapper>
      <Logo />
      <Container>
        <Header>
          <Title>{isMember ? 'Login' : 'Register'}</Title>
          <Description>
            Become a part of our community and enjoy endless opportunities for
            connection and self-expression. Register now!
          </Description>
        </Header>
        <LoginFormComponent isMember={isMember} />
        <ToggleMember onClick={() => setIsMember((prevState) => !prevState)}>
          {isMember ? 'Not a member yet?' : 'Already a member?'}
        </ToggleMember>
      </Container>
    </Wrapper>
  );
};

export default LoginPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: 100vh;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  border-radius: 4px;
  width: 35%;
  min-width: 450px;
  padding: 2rem;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h1`
  width: 30%;
  min-width: 150px;
  text-align: center;
  border-bottom: 4px solid var(--clr-green-primary);
  margin-bottom: 10px;
  letter-spacing: 1px;
  font-weight: 500;
`;
const Description = styled.p`
  text-align: center;
  color: rgb(0, 0, 0, 0.5);
  font-size: 15px;
`;

const ToggleMember = styled.p`
  color: var(--clr-green-primary-hover);
  text-align: center;
  cursor: pointer;
  margin-top: -0.5rem;
`;
