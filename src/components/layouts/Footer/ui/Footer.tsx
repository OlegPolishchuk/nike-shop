import React from 'react';

import { FooterNav } from './components/FooterNav';
import { FooterSubNav } from './components/FooterSubNav';
import { Privacy } from './components/Privacy';
import { SocialIcons } from './components/SocialIcons';

export const Footer = () => {
  return (
    <footer className={'bg-black-100 px-[40px] pb-[10px] pt-[40px]'}>
      <div className={'mb-[25px] flex flex-col justify-between gap-10 md:flex-row md:gap-0'}>
        <FooterNav />
        <SocialIcons />
      </div>

      <div className={'mb-[25px] mb-[25px] flex md:justify-end'}>
        <FooterSubNav />
      </div>

      <div>
        <Privacy />
      </div>
    </footer>
  );
};
