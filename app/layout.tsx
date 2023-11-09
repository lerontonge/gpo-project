import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';



export const metadata: Metadata = {
  title: 'GPO Antigua',
  description: 'Website by Leron T',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      data-theme='light'
    >
      <head>
        <link
          href='https://cdn.jsdelivr.net/npm/daisyui@3.9.4/dist/full.css'
          rel='stylesheet'
          type='text/css'
        />
        <script src='https://cdn.jsdelivr.net/npm/theme-change@2.0.2/index.js'></script>
      </head>
      <body className="pt-20 z-50">
        <header className=' fixed top-0 md:w-full shadow-md '>
          <Navbar />
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
