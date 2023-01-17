import { useState } from 'react';

export const useExpandableText = (initialText: string, limit: number) => {
  const [expanded, setExpanded] = useState(false);
  const truncatedText = initialText.slice(0, limit);
  const handleClick = () => {
    setExpanded(!expanded);
  };

  return { expanded, handleClick, initialText, truncatedText };
};
