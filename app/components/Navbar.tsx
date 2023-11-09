// components/Navbar.tsx

import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <div className='navbar bg-base-100 sticky top-0'>
      <div className='flex-1'>
        <Link
          href='/'
          className='btn btn-ghost normal-case text-xl'
        >
          GPO Antigua
        </Link>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <Link href='/news'>News and Updates</Link>
          </li>
          <li>
            <details>
              <summary>Services</summary>
              <ul className='p-2 bg-base-100'>
                <li>
                  <Link href='/stamps'>Philatelic</Link>
                </li>
                <li>
                  <Link href='/tracking'>Track Mail</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
