import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='footer footer-center p-10 bg-base-200 text-base-content rounded'>
      <nav className='grid grid-flow-col gap-4'>
        <Link
          href='/news'
          className='link link-hover'
        >
          News
        </Link>
        
        <Link
          href='/stamps'
          className='link link-hover'
        >
          Philatelic
        </Link>{' '}
        <Link
          href='/tracking'
          className='link link-hover'
        >
          Tracking
        </Link><Link
          href='/about'
          className='link link-hover'
        >
          About us
        </Link>
      </nav>
      <aside>
        <p>Copyright © 2023 - All right reserved by GPO Antigua</p>
      </aside>
    </footer>
  );
}
