import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body className='max-screen-w-2xl m-auto min-screen-w-xl'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
