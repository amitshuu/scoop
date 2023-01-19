import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const CustomTextArea: React.FC<Props> = ({ value, onChange }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = '';
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + 'px';
    }
  }, [value]);

  return (
    <TextArea
      ref={textareaRef}
      value={value}
      placeholder='Add a comment...'
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
export default CustomTextArea;

const TextArea = styled.textarea`
  display: flex;
  resize: none;
  overflow: hidden;
  padding: 10px;
  border: 2px solid rgb(217, 217, 217, 60%);
  border-radius: 16px;
  outline: none;
  width: 100%;
  height: 75%;
  color: #050505;
  font-weight: 400;
  font-size: 15px;
  font-family: inherit;
`;
