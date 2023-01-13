import styled from 'styled-components';
import Logo from './Logo';
import amit from '../assets/amit.jpg';
import { sidebar_links } from '../utils/constants';
import { NavLink, Outlet } from 'react-router-dom';

const Sidebar = () => {
  return (
    <>
      <Wrapper>
        <Logo />
        <UserInfoContainer>
          <UserAvatar src={amit} alt='user avatar image' />
          <Username>Amit</Username>
        </UserInfoContainer>
        {sidebar_links.map((link) => {
          return (
            <SideabarLinkContainer borderBottom={link.borderBottom}>
              <SidebarLink to={link.path}>
                {({ isActive }: any) =>
                  isActive ? (
                    <SidebarLinkIcon>{link.activeIcon}</SidebarLinkIcon>
                  ) : (
                    <SidebarLinkIcon>{link.icon}</SidebarLinkIcon>
                  )
                }
              </SidebarLink>
              <SidebarLink to={link.path}>
                <SidebarLinkTitle>{link.title}</SidebarLinkTitle>
                {link.badge ? (
                  <BadgeContainer>
                    <Badge>12</Badge>
                  </BadgeContainer>
                ) : (
                  ''
                )}
              </SidebarLink>
            </SideabarLinkContainer>
          );
        })}
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

const SideabarLinkContainer = styled.div<{ borderBottom: boolean }>`
  display: flex;
  /* margin-bottom: 2rem; */
  /* background-color: red; */
  padding: 1.2rem 0rem;
  border-bottom: ${(props) =>
    props.borderBottom ? '2px solid rgb(0,0,0,10%)' : 'none'};
`;
const SidebarLinkIcon = styled.p`
  color: black;
`;

const SidebarLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`;

const SidebarLinkTitle = styled.p`
  color: black;
  margin-left: 1.5rem;
`;

const Badge = styled.div`
  position: relative;
  display: flex;
  background-color: red;
  justify-content: center;
  align-items: center;
  background-color: rgba(217, 217, 217, 25%);
  border-radius: 10px;
  width: 28px;
  height: 28px;
  text-align: center;
  color: black;
  font-size: 14px;
`;

const BadgeContainer = styled.div`
  position: absolute;
  display: flex;
  /* background-color: red; */
  left: 280px;
`;
