import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

interface Props {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  withBorder?: boolean;
  withOverflow?: boolean;
  maxHeight?: string;
}

const CustomTextArea = ({
  value,
  onChange,
  placeholder,
  withOverflow = false,
  maxHeight = '350px',
}: Props) => {
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
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      withOverflow={withOverflow}
      maxHeight={maxHeight}
    />
  );
};
export default CustomTextArea;

const TextArea = styled.textarea<{
  withOverflow: boolean;
  maxHeight: string;
}>`
  display: flex;
  resize: none;
  padding: 10px;
  border-radius: 16px;
  outline: none;
  width: 100%;
  border: none;
  height: 70%;
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'none')};
  color: #050505;
  overflow-y: ${({ withOverflow }) => (withOverflow ? 'auto' : 'hidden')};
  font-weight: 400;
  font-size: 15px;
  font-family: inherit;
`;
