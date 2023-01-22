import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { sidebar_links } from '../utils/constants';

const SidebarLinks = () => {
  return (
    <>
      {sidebar_links.map((link) => {
        return (
          <SideabarLinkContainer key={link.id} borderBottom={link.borderBottom}>
            <SidebarLink to={link.path}>
              {({ isActive }: { isActive: boolean }) => (
                <>
                  <SidebarLinkIcon>
                    {isActive ? link.activeIcon : link.icon}
                  </SidebarLinkIcon>
                  <SidebarLinkTitle>{link.title}</SidebarLinkTitle>
                  {link.badge ? (
                    <BadgeContainer>
                      <Badge>12</Badge>
                    </BadgeContainer>
                  ) : (
                    ''
                  )}
                </>
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
  width: 100%;
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
  justify-content: center;
  align-items: center;
  background-color: rgba(217, 217, 217, 25%);
  border-radius: 50%;
  width: 22px;
  height: 22px;
  text-align: center;
  color: white;
  font-weight: 500;
  font-size: 12px;
  background-color: #f35e6a;
`;

const BadgeContainer = styled.div`
  position: absolute;
  height: 45px;
  display: flex;
  left: 80px;
`;
