import React, { ReactNode } from 'react';

import Link from 'next/link';

import { TwitterIcon } from '@/common/ui';

interface Props {
  icon: ReactNode;
  href: string;
}

export const SocialLink = ({ icon, href }: Props) => {
  return (
    <Link href={href}>
      <div
        className={
          'inline-flex items-center justify-center [&>svg]:fill-gray-300 [&>svg]:transition-all [&>svg]:hover:fill-light'
        }
      >
        {icon}
      </div>
    </Link>
  );
};
