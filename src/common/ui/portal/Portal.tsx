'use client';

import { ReactNode, useEffect, useState } from 'react';

import { createPortal } from 'react-dom';

interface Props {
  children: ReactNode;
  tag?: string;
  tagClassnames?: string;
}
export const Portal = ({ children, tagClassnames, tag }: Props) => {
  const [container] = useState(() => document.createElement(tag ? tag : 'div'));

  useEffect(() => {
    if (tagClassnames) {
      container.className = tagClassnames;
    }

    document.body.appendChild(container);

    return () => {
      document.body.removeChild(container);
    };
  }, []);

  // @ts-ignore
  return createPortal(children, container as Element);
};
