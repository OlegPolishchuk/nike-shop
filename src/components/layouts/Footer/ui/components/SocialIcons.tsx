import React from 'react';

import { FacebookIcon, InstagramIcon, SocialLink, TwitterIcon, YoutubeIcon } from '@/common/ui';

export const SocialIcons = () => {
  return (
    <div className={'flex gap-4'}>
      <SocialLink icon={<TwitterIcon />} href={'/'} />

      <SocialLink icon={<FacebookIcon />} href={'/'} />

      <SocialLink icon={<YoutubeIcon />} href={'/'} />

      <SocialLink icon={<InstagramIcon />} href={'/'} />
    </div>
  );
};
