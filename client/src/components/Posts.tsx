import React from 'react';
import styled from 'styled-components';
import { SinglePost } from '.';

const Posts = () => {
  return (
    <Wrapper>
      <SinglePost />
      <SinglePost />
      <SinglePost />
    </Wrapper>
  );
};

export default Posts;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
