import { ReactNode, useId, useLayoutEffect, useState } from 'react';

import { createPortal } from 'react-dom';
import { PlacesType, Tooltip as ReactTooltip } from 'react-tooltip';

interface Props {
  children: ReactNode;
  title: string;
  position?: PlacesType;
}

const tooltipStyles = { padding: '5px 8px', fontSize: '12px' };

export const Tooltip = ({ children, title, position = 'top' }: Props) => {
  const [tooltipContainer, setTooltipContainer] = useState<HTMLElement | null>(null);

  const id = useId();

  useLayoutEffect(() => {
    const container = document.getElementById('container_tooltip');

    setTooltipContainer(container);
  }, []);

  return (
    <>
      <div data-tooltip-id={id}>{children}</div>
      {tooltipContainer &&
        createPortal(
          <ReactTooltip content={title} id={id} place={position} style={tooltipStyles} />,
          tooltipContainer,
        )}
    </>
  );
};
