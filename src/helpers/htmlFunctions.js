import DOMPurify from 'dompurify';
import React from "react";

export const cleanHTML = (dirtyHTML) => {
  // https://github.com/cure53/DOMPurify
  return (
    <span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(dirtyHTML) }}>
    </span>
  )
};
