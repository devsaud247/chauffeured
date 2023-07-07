import Image from 'next/image';

export const Navbar = () => (
  <header className='fixed top-0 left-0 flex flex-row p-2 w-full min-w-[600px] m-auto bg-[#222] h-20'>
    <div className='flex flex-row w-full max-w-screen-lg m-auto items-center justify-around'>
      <Image src='/logo.webp' width={200} height={40} alt='Shofeur logo' />

      <div className='flex flex-row items-center gap-8'>
        <a href='https://www.shofeur.com/operators' className='text-white'>
          Add a listing
        </a>

        <button className='text-white'>Sign Up</button>

        <button className='flex flex-row gap-2'>
          <Image
            src='/profile.svg'
            width={30}
            height={30}
            alt='avatar'
            style={{ color: 'white' }}
          />
          <p className='text-white'>Login</p>
        </button>
      </div>
    </div>
  </header>
);
