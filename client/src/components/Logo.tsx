import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Logo = () => {
  return (
    <Wrapper>
      <LogoTitle to='/'>
        Sco<LogoSpan>ŏ</LogoSpan>p
      </LogoTitle>
    </Wrapper>
  );
};

export default Logo;

const Wrapper = styled.div``;
const LogoTitle = styled(NavLink)`
  font-size: 48px;
  font-weight: 500;
  color: black;
  text-decoration: none;
`;
const LogoSpan = styled.span`
  color: var(--clr-green-primary);
`;
