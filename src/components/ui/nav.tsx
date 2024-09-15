import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className='flex justify-between'>
        <li>
            <Link href="/">
                <Image src={"/public/assets/images/qte-logo.jpg"} alt='Queenz-Treats-n-Events-Logo' width={100} height={100}/>
            </Link>
        </li>
        
        <ul>        
            <li>
                <Link href="/products">Products</Link>
            </li>

            <li>
                <Link href="/gallery">Gallery</Link>
            </li>
            
            <li>
                <Link href="/events">Book an event</Link>
            </li>

            <li>
                <Link href="/about">About</Link>
            </li>

            <li>
                <Link href="/auth/login">Login</Link>
            </li>
      </ul>
    </nav>
  );
}
