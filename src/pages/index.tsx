import { Inter } from 'next/font/google';
import { rentals as rentals } from '@/lib/constants';
import { Rental } from '@/types/rental';
import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import { RentalCard } from '@/components/rental-card';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      rentals,
    },
  };
};

export default function Location({ rentals }: { rentals: Rental[] }) {
  return (
    <>
      <NextSeo
        title='Chauffeured rentals near Dallas | Shofeur'
        description='Easily find a limousine or party bus rental near Dallas. Search our marketplace of local, vetted businesses with competitive prices and honest reviews.'
        canonical='www.shofeur.com'
      />
      <Navbar />
      <main
        className={`flex min-h-screen flex-col items-start justify-start p-24 max-w-screen-2xl min-w-xl m-auto ${inter.className}`}
      >
        <h2 className='m-2 text-2xl'>Chauffeured rentals near Dallas</h2>
        <div className='mb-32 grid text-center lg:mb-0 lg:grid-cols-2 lg:text-left'>
          {rentals.map((rental, index) => (
            <RentalCard key={index} {...rental} />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
