import React, { ChangeEvent, useRef } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { defaultCenter, defaultCityCoordinates } from '../constants/map';
import { CheckoutFormSchema } from '../constants/schema';
import { LatLon } from '../types/types';
import { roundStringCoordinate } from '../utils/utils';

import { geocodeAddress } from '@/api/map';
import { Button, TextField } from '@/common/ui';
import { sessionStorageWrapper } from '@/services';

export type FormData = z.infer<typeof CheckoutFormSchema>;

interface Props {
  className?: string;
  setCity: React.Dispatch<React.SetStateAction<{ lat: number; lon: number }>>;
  setCenter: React.Dispatch<React.SetStateAction<LatLon>>;
  setUserData: React.Dispatch<React.SetStateAction<FormData | undefined>>;
}

export const CheckoutForm = ({ className, setCity, setCenter, setUserData }: Props) => {
  const {
    register,
    formState: { errors },
    control,
    handleSubmit,
    setValue,
  } = useForm<FormData>({
    mode: 'onBlur',
    resolver: zodResolver(CheckoutFormSchema),
  });

  const timerId = useRef<number>();

  const handleChangeAddress = (event: ChangeEvent<HTMLInputElement>) => {
    window.clearTimeout(timerId.current);

    timerId.current = window.setTimeout(async () => {
      const address = event.target.value;
      setValue('address', address);

      geocodeAddress(event.target.value)
        .then((res) => {
          setCity({ lat: roundStringCoordinate(res.lat), lon: roundStringCoordinate(res.lon) });
          setCenter([+res.lat, +res.lon]);
        })
        .catch(() => {
          setCity(defaultCityCoordinates);
          setCenter(defaultCenter);
        });
    }, 500);
  };

  const submit = (data: FormData) => {
    setUserData(data);
    sessionStorageWrapper.remove('goods');
  };

  return (
    <form className={clsx(className && className)} onSubmit={handleSubmit(submit)}>
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

        <TextField
          required
          label={'Address'}
          placeholder={'some input'}
          {...register('address', {
            onChange: handleChangeAddress,
          })}
          isError={!!errors.address?.message}
          errorMessage={errors.address?.message}
        />

        <div className={'flex justify-between gap-5'}>
          <TextField label={'Email'} {...register('email')} />

          <TextField label={'Phone Number'} {...register('phone')} />
        </div>

        <div>
          <Button size={'md'} type={'submit'}>
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
};
