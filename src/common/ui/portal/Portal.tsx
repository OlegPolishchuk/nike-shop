import React, { ReactNode, useEffect, useState } from 'react';

import { createPortal } from 'react-dom';

interface Props {
  children: ReactNode;
  tag?: string;
  tagClassnames?: string;
  id?: string;
}
export const Portal = ({ children, tagClassnames, tag, id }: Props): ReactNode => {
  const [container, setContainer] = useState(() => createElement(tag));

  useEffect(() => {
    if (id) {
      const targetElement = document.getElementById(id);

      setContainer(targetElement || createElement(tag));
    }
    if (tagClassnames) {
      container.className = tagClassnames;
    }

    document.body.appendChild(container);

    return () => {
      document.body.removeChild(container);
    };
  }, []);

  // @ts-ignore
  return createPortal(children, container);
};

function createElement(tag?: string) {
  return document.createElement(tag ? tag : 'div');
}
