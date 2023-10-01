import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { MembershipCard } from './MembershipCard';

import { Button, Typography } from '@/common/ui';
import { BaseSection } from '@/components/sections';
import { GetSectionMembershipQuery } from '@/graphql/__generated__';

interface Props {
  data: GetSectionMembershipQuery['sectionMembership']['data']['attributes'];
}

export const Membership = ({ data }: Props) => {
  const { title, card, JoinUsButton, SignInButton, subtitle } = data;

  return (
    <BaseSection className={'mb-[70px]'}>
      <div
        className={'flex flex-col gap-1 bg-[#0E0E0E] px-[10px] py-[24px] md:flex-row md:px-[46px]'}
      >
        <div className={'flex flex-col gap-[24px] text-light'}>
          <Typography
            variant={'title-1'}
            className={' uppercase leading-[60px]'}
            dangerousHTML={title}
          />

          <Typography variant={'title-3'}>{subtitle}</Typography>

          <div className={'flex gap-2'}>
            <div>
              <Button variant={'outlined'}>{JoinUsButton.label}</Button>
            </div>
            <div>
              <Button variant={'outlined'}>{SignInButton.label}</Button>
            </div>
          </div>
        </div>

        <div className={'relative grow'}>
          <Link href={'/'}>
            <Image
              src={'/images/membership_bg.webp'}
              alt={'membership image'}
              className={'h-auto max-w-full'}
              fill
            />
          </Link>
        </div>
      </div>

      <div className='flex flex-col gap-7 md:grid md:grid-cols-3 md:gap-1'>
        {card.map((card) => (
          <MembershipCard key={card.id} card={card} />
        ))}
      </div>
    </BaseSection>
  );
};
