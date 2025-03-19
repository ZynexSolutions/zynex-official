import Link from 'next/link';
import DropDown from './DropDown';

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li className="menu-item">
        <Link href="/">Home</Link>
        {/* <DropDown>
          <ul>
            <li>
              <Link href="/" onClick={() => setMobileToggle(false)}>
              Home Version 1
              </Link>
            </li>
            <li>
              <Link href="/home2" onClick={() => setMobileToggle(false)}>
              Home Version 2
              </Link>
            </li>
            <li>
              <Link href="/home3" onClick={() => setMobileToggle(false)}>
                Home Version 3
              </Link>
            </li>  
            <li>
              <Link href="/home4" onClick={() => setMobileToggle(false)}>
                Home Version 4
              </Link>
            </li>
            <li>
              <Link href="/home5" onClick={() => setMobileToggle(false)}>
                Home Version 5
              </Link>
            </li>
          </ul>
        </DropDown> */}
      </li>
      <li className='menu-item'>
        <Link href="/portfolio" onClick={() => setMobileToggle(false)}>
          Portfolio
        </Link>
      </li>
      <li className="menu-item">
        <Link href="/blog" onClick={() => setMobileToggle(false)}>
          Articles
        </Link>
      </li>
      <li className="menu-item">
        <Link href="/about" onClick={() => setMobileToggle(false)}>
          About Us
        </Link>
      </li>
      <li className="menu-item">
        <Link href="/contact" onClick={() => setMobileToggle(false)}>
          Contact Us
        </Link>
      </li>
    </ul>
  );
}
