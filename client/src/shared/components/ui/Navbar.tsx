import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CustomButton as Button } from "../form/Button";
import logo from "../../../assets/images/logo.png";
import { FaTimes, FaBars } from "react-icons/fa";
import { signOut } from "firebase/auth";
import { auth } from "../../../views/app/services/firebase";
import { CustomButton } from "../form/Button";
import { useAuth } from "../../../views/app/hooks/useAuth";

const Navbar = ({ isLoggedIn }: { isLoggedIn: boolean }) => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Firebase SignOut user from the application
    const handleSignOut = () => {
        signOut(auth).then(() => {
        navigate('/auth/signin');
        }).catch((error) => {
        console.error("Sign out error:", error);
        });
    }

  return (
    <header id="header" className={`mt-5 mb-5 z-50 sticky ${isScrolled ? 'bg-white' : 'bg-transparent'}`}>
    <div className={`transition flex duration-300 ${isScrolled ? 'bg-opacity-90' : 'bg-opacity-100'}`}>
        <div className="m-0 flex w-full items-center justify-between relative">

            {/* Logo Section */}
            <div className="navbar-brand">
                <Link to={'/'}>
                    <section className="hidden-folded d-inline">
                        <img width={70} src={logo} alt="Logo" />
                    </section>
                </Link>
            </div>

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

            {/* Navigation Links */}
            <div className={`absolute lg:static left-0 top-full w-full lg:w-auto transition-all duration-300 ${isMobileMenuOpen ? 'block bg-gray-800 fixed text-theme-white p-3 rounded-md' : 'hidden'} lg:block`} id="navbarToggler">
                <ul className="flex items-center flex-col lg:flex-row gap-8 p-4 lg:p-0">
                
                {isLoggedIn ? (
                <>
                    <Link to="/subtilo/subtitles" className="hover:text-gray-400 text-lg">Subtitles</Link>

                    <Link to="/subtilo/player" className="hover:text-gray-400 text-lg">Video Player</Link>
                    
                    {/* : A dropdown here to show personalized information such as light and dark mode or any other things needed */}
                    <Link to="/subtilo/account" className="hover:text-gray-400 text-lg">Account</Link>
    
                    {/* Sign out button */}
                    <CustomButton
                    btnClass="block w-full rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-700 hover:text-white"
                    onClick={handleSignOut}
                    title="log out"
                    body={"Log Out"} loading={false} disabled={false} size={""}              
                    />
                </> 
                ) : (
                 
                <div className={`flex items-center gap-5 ${isMobileMenuOpen ? 'flex-col' : ''}`}>
                  <Link to="/about" className="hover:text-gray-400 text-lg">About</Link>
                  
                  <a href="#features" className="hover:text-gray-400 text-lg">Features</a>

                  <Link to="/auth/signin" className="hover:text-gray-400 text-lg">Login</Link>
                  
                  <Link to="/auth/signup">
                      <Button 
                          body="Start for free" loading={false} disabled={false} size="large"                
                      />
                  </Link>
                </div>
                )}
              </ul>
          </div>
        </div>
      </div>
    </header>
)}

export default Navbar;
