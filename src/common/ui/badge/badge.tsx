import React from 'react';

import { Property } from 'csstype';

import Color = Property.Color;

interface Props {
  className?: string;
  title: string;
}

export const Badge = ({ className, title }: Props) => {
  return (
    <div
      className={`absolute right-[-5px] top-[-5px] flex min-w-[20px] items-center justify-center rounded-full p-[2px] text-[10px] text-black text-black-200 ${
        className ? className : ''
      }`}
    >
      {title}
    </div>
  );
};
