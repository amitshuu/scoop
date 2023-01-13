import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { sidebar_links } from '../utils/constants';

const SidebarLinks = () => {
  return (
    <>
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
    </>
  );
};

export default SidebarLinks;

const SideabarLinkContainer = styled.div<{ borderBottom: boolean }>`
  display: flex;
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
  left: 240px;
`;
