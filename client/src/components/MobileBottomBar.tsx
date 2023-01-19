import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { mobile_navbar_links } from '../utils/constants';
import { mobile } from '../utils/responsive';

const MobileBottomBar = () => {
  return (
    <Wrapper>
      <MobileNavContent>
        {mobile_navbar_links.map((link) => {
          return (
            <LinkContainer>
              <Link to={link.path!}>
                <Icon>{link.icon}</Icon>
                <Title>{link.title}</Title>
              </Link>
            </LinkContainer>
          );
        })}
      </MobileNavContent>
    </Wrapper>
  );
};

export default MobileBottomBar;

const Wrapper = styled.div`
  display: none;
  width: 100%;
  background-color: white;
  position: sticky;
  bottom: 0;
  left: 0;
  ${mobile({ display: 'flex' })}
`;
const MobileNavContent = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  justify-content: space-evenly;
  width: 100%;
`;
const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Link = styled(NavLink)`
  color: rgb(0, 0, 0, 0.7);
  text-decoration: none;
`;
const Icon = styled.p`
  height: 20px;
  text-align: center;
`;
const Title = styled.p``;
