import styled from 'styled-components';
const Logo = () => {
  return (
    <Wrapper>
      <LogoTitle>
        Sco<LogoSpan>ŏ</LogoSpan>p
      </LogoTitle>
    </Wrapper>
  );
};

export default Logo;

const Wrapper = styled.div``;
const LogoTitle = styled.h2`
  font-size: 48px;
  font-weight: 500;
`;
const LogoSpan = styled.span`
  color: var(--clr-green-primary);
`;
