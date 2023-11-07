// components/Navbar.tsx

import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className='flex justify-between'>
      <h3>GPO</h3>
      <ul className='flex flex-row top-0 justify-end'>
        <li>
          <Link href="/">
        Home
          </Link>
              </li>
              <li>
          <Link href="/stamps">
            Stamps
          </Link>
              </li>
              <li>
          <Link href="/tracking">
            Tracking
          </Link>
        </li>
        <li>
          <Link href="/about">
            About
          </Link>
        </li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
