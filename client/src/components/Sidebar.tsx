import styled from 'styled-components';
import amit from '../assets/amit.jpg';
import { Outlet } from 'react-router-dom';
import { SidebarLinks, Logo } from './';
import { mobile } from '../utils/responsive';

const Sidebar = () => {
  return (
    <>
      <Wrapper>
        <ContentContainer>
          <Logo />
          <UserInfoContainer>
            <UserAvatar src={amit} alt='user avatar image' />
            <Username>Amit</Username>
          </UserInfoContainer>
          <SidebarLinks />
        </ContentContainer>
      </Wrapper>
      <div
        style={{
          display: 'flex',
          width: '100%',
        }}
      >
        <Outlet />
      </div>
    </>
  );
};

export default Sidebar;

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  width: 40%;
  position: sticky;
  top: 0;
  left: 0;
  height: 100vh;
  ${mobile({ display: 'none' })}
`;

const ContentContainer = styled.div`
  padding: 3rem 4rem;
  height: 100%;
  border-right: 2px solid rgb(0, 0, 0, 10%);
`;
const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 3rem 0rem;
`;
const UserAvatar = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 50%;
`;
const Username = styled.p`
  margin-left: 1rem;
  font-weight: 400;
`;
