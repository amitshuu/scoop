import React from 'react';
import reactTextareaAutosize from 'react-textarea-autosize';
import styled from 'styled-components';
import amit from '../assets/amit.jpg';
import SinglePostComment from './SinglePostComment';
const CommentSection = ({ toggleComments }: { toggleComments: boolean }) => {
  return (
    <>
      <InputContainer>
        <UserAvatar src={amit} className='user-avatar' />
        <TextArea placeholder='Write a comment ...' />
      </InputContainer>
      <SinglePostComment />
      <SinglePostComment />
      <SinglePostComment />
    </>
  );
};

export default CommentSection;

const InputContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  margin-bottom: 2rem;
`;

const TextArea = styled(reactTextareaAutosize)`
  width: 100%;
  border: none;
  outline: none;
  resize: none;
  border-radius: 16px;
  padding: 0.7rem;
  font-size: 14px;
  max-height: 550px;
  font-family: inherit;
  border: 2px solid rgb(217, 217, 217, 60%);
`;

const UserAvatar = styled.img`
  margin-right: 1rem;
  align-self: start;
`;
