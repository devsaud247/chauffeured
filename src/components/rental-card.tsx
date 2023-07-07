import Image from 'next/image';

import { Rental } from '@/types/rental';

export type RentalCardProps = Rental;

export const RentalCard = (rental: RentalCardProps) => (
  <a
    className='lock max-w-sm m-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 hover:cursor-pointer'
    href={`https://www.shofeur.com/vehicles/${rental.id}`}
  >
    <Image
      src={rental.images[0]}
      alt='Rental vehicle image'
      width={400}
      height={230}
      priority
    />
    <div className='p-2'>
      <h2 className='text-lg font-medium'>{rental.title}</h2>

      {rental.isNew && <span className='font-extralight'>⭐ New</span>}

      <div className='flex flex-row justify-between p-1'>
        <span className='text-lg'>
          ${rental.rentPerHour}/hr or ${rental.rentPerMile}/mi
        </span>

        <div className='flex flex-row items-center'>
          <Image
            src='/group.svg'
            width={30}
            height={30}
            alt='group icon'
            className='mx-1'
          />
          {rental.size}
        </div>
      </div>
    </div>
  </a>
);
