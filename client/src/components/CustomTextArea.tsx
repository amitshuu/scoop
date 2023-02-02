import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';
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
      {imageSrc && <PostImage src={imageSrc} alt='' />}
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
`;
