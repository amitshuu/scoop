import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';
import CloseIcon from '@mui/icons-material/Close';

interface Props {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  imageSrc?: string;
}

const CustomTextArea = ({ value, onChange, imageSrc }: Props) => {
  return (
    <Wrapper>
      <TextArea
        value={value}
        onChange={onChange}
        placeholder='What do you want to share Amit?'
      />
      {imageSrc && (
        <PostImageContainer>
          <CancelIconDiv>
            <CloseIcon className='close-icon' />
          </CancelIconDiv>
          <PostImage src={imageSrc} alt='' />
        </PostImageContainer>
      )}
    </Wrapper>
  );
};
export default CustomTextArea;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  border: none;
  padding: 0rem 1.5rem 1.5rem;
  overflow-y: auto;
`;

const TextArea = styled(TextareaAutosize)`
  border: none;
  outline: none;
  resize: none;
  width: 100%;
  margin-bottom: 2rem;
  font-size: 15px;
  font-family: inherit;
  overflow-y: hidden;
`;

const PostImage = styled.img`
  width: 100%;
  border-radius: 12px;
`;

const PostImageContainer = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  position: relative;
  padding: 0.5rem;
  .close-icon {
    color: rgba(0, 0, 0, 0.5);
  }
`;

const CancelIconDiv = styled.div`
  position: absolute;
  display: flex;
  background-color: white;
  margin: 0.5rem;
  border-radius: 50%;
  padding: 4px;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    background-color: #efeff0d9;
  }
`;
