import React, { ChangeEvent, useRef } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { Match } from '@storybook/router';
import clsx from 'clsx';
import fetch from 'node-fetch';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';

import { CheckoutFormSchema } from '../constants/schema';
import { GeocodeResponse, LatLon } from '../types/types';

import { geocodeAddress } from '@/api/map';
import { TextField } from '@/common/ui';
import { roundStringCoordinate } from '@/components/sections/checkout/utils/utils';

type FormData = z.infer<typeof CheckoutFormSchema>;

interface Props {
  className?: string;
  setCity: React.Dispatch<React.SetStateAction<{ lat: number; lon: number }>>;
  setCenter: React.Dispatch<React.SetStateAction<LatLon>>;
}

export const CheckoutForm = ({ className, setCity, setCenter }: Props) => {
  const {
    register,
    formState: { errors },
    control,
    reset,
    setError,
    handleSubmit,
  } = useForm<FormData>({
    mode: 'onBlur',
    resolver: zodResolver(CheckoutFormSchema),
  });

  const timerId = useRef<number>();

  const handleChangeAddress = (event: ChangeEvent<HTMLInputElement>) => {
    window.clearTimeout(timerId.current);

    timerId.current = window.setTimeout(async () => {
      const address = event.target.value;

      geocodeAddress(event.target.value).then((res) => {
        setCity({ lat: roundStringCoordinate(res.lat), lon: roundStringCoordinate(res.lon) });
        setCenter([+res.lat, +res.lon]);
      });
    }, 500);
  };

  return (
    <form className={clsx(className && className)}>
      <div className={'flex flex-col gap-4'}>
        <div className={'flex justify-between gap-5'}>
          <TextField
            label={'First Name'}
            required
            {...register('firstName')}
            isError={!!errors.firstName?.message}
            errorMessage={errors.firstName?.message}
          />

          <TextField
            required
            label={'Last Name'}
            {...register('lastName')}
            isError={!!errors.lastName?.message}
            errorMessage={errors.lastName?.message}
          />
        </div>

        {/*<TextField*/}
        {/*  required*/}
        {/*  label={'Address'}*/}
        {/*  placeholder={'some input'}*/}
        {/*  {...register('address')}*/}
        {/*  isError={!!errors.address?.message}*/}
        {/*  errorMessage={errors.address?.message}*/}
        {/*/>*/}

        <Controller
          name={'address'}
          control={control}
          render={({ field: { value } }) => (
            <TextField label={'Address'} value={value} required onChange={handleChangeAddress} />
          )}
        />

        <div className={'flex justify-between gap-5'}>
          <TextField label={'Email'} />

          <TextField label={'Phone Number'} />
        </div>
      </div>
    </form>
  );
};
