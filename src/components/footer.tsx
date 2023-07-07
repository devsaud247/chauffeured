import { footerInternalLinks, socialLinks } from '@/lib/constants';
import Image from 'next/image';

export const Footer = () => (
  <footer className='flex flex-row justify-between p-8 shadow-lg'>
    <div className='flex flex-row w-full max-w-screen-2xl min-w-[1200px] m-auto items-start justify-around'>
      <div className='flex flex-row justify-between gap-8 text-footer'>
        {socialLinks.map((link) => (
          <a
            key={link.url}
            data-testid='linkElement'
            href={link.url}
            target='_blank'
          >
            <Image
              src={link.iconPath}
              width={40}
              height={40}
              alt='social media icon'
            />
          </a>
        ))}
      </div>

      <div className='flex flex-col'>
        <div className='flex flex-row justify-between gap-8 text-footer'>
          {footerInternalLinks.map((link) => (
            <a
              key={link.path}
              href={`https://www.shofeur.com/${link.path}`}
              className='underline text-lg'
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className='self-end text-footer'>© 2022-2023 Shofeur Inc</div>
      </div>
    </div>
  </footer>
);
