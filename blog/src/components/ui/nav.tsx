import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from "../../assets/images/qte-logo.jpg";
import { FaTimes, FaBars } from "react-icons/fa";

interface NavItemsProps {
    link: string;
    name: string;
    redirect?: string;
}

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const NavItems: NavItemsProps[] = [
        {
            link: "/products",
            name: "Products"
        },
        {
            link: "/gallery",
            name: "Gallery"
        },
        {
            link: "/event",
            name: "Book an Event"
        },
        {
            link: "/about",
            name: "About"
        },
        {
            link: "/login",
            name: "Login"
        },
    ]

  return (
    <nav className='flex items-center justify-between relative m-0'>
        <li>
            <Link href="/">
                <Image src={Logo} alt='Queenz-Treats-n-Events-Logo' width={100} height={100}/>
            </Link>
        </li>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
                        <button 
                            className="flex items-center p-2"
                            onClick={toggleMobileMenu}
                            aria-label="Toggle mobile menu"
                        >
                            {isMobileMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
                        </button>
                    </div>
        <div className={`absolute lg:static left-0 top-full w-full lg:w-auto transition-all duration-300 ${isMobileMenuOpen ? 'block' : 'hidden'} lg:block`}>
            <ul className='flex items-center flex-col bg-white shadow-md mx-2 lg:flex-row gap-4 p-4 lg:p-0 lg:shadow-none'>       
                {
                    NavItems.map(item => {
                        return <li className='border-b last:border-b-0 w-full text-center pb-2 lg:border-b-0 lg:w-auto'>
                        <Link href={item.link}>{item.name}</Link>
                    </li>
                    })
                } 2
            </ul>
        </div>
    </nav>
  );
}
