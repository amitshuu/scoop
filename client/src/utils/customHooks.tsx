import { useState } from 'react';

export const useExpandableText = (initialText: string, limit: number) => {
  const [expanded, setExpanded] = useState(false);
  const truncatedText = initialText.slice(0, limit);
  const handleClick = () => {
    setExpanded(!expanded);
  };

  return { expanded, handleClick, initialText, truncatedText };
};

export const useForm = (
  initialState: Record<string, string>,
  callback: VoidFunction
) => {
  const [values, setValues] = useState(initialState);

  const onChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    callback();
  };

  return {
    values,
    onChange,
    onSubmit,
  };
};
