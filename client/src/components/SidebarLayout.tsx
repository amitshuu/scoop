import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import RightSidebar from './RightSidebar';
import Sidebar from './Sidebar';

const SidebarLayout = () => {
  return (
    <Wrapper>
      <Sidebar />
      <RightSidebar />
    </Wrapper>
  );
};

export default SidebarLayout;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
