import styled from 'styled-components';

import amit from '../assets/amit.jpg';
import { Outlet } from 'react-router-dom';
import { SidebarLinks, Logo } from './';

const Sidebar = () => {
  return (
    <>
      <Wrapper>
        <Logo />
        <UserInfoContainer>
          <UserAvatar src={amit} alt='user avatar image' />
          <Username>Amit</Username>
        </UserInfoContainer>
        <SidebarLinks />
      </Wrapper>
      <div style={{ width: '100%' }}>
        <Outlet />
      </div>
    </>
  );
};

export default Sidebar;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem;
  border-right: 2px solid rgb(0, 0, 0, 10%);
  width: 25%;
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
