import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

type IProps = {
  mobile?: boolean;
};
const Logo: React.FC<IProps> = ({ mobile }) => {
  return (
    <Wrapper>
      <LogoTitle to='/' mobile={mobile!}>
        Sco<LogoSpan>ŏ</LogoSpan>p
      </LogoTitle>
    </Wrapper>
  );
};

export default Logo;

const Wrapper = styled.div``;
const LogoTitle = styled(NavLink)<{ mobile: boolean }>`
  font-size: ${(props) => (props.mobile ? '32px' : '48px')};
  font-weight: 500;
  color: black;
  text-decoration: none;
`;
const LogoSpan = styled.span`
  color: var(--clr-green-primary);
`;
