import React from 'react';

import { IconButton, TrashIcon } from '@/common/ui';

interface Props {
  onClick: () => void;
}

export const TrashButton = ({ onClick }: Props) => {
  return <IconButton onClick={onClick} icon={<TrashIcon />} />;
};
