import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {FaBars, FaDribbble, FaFacebook, FaTwitter, FaXmark, FaXTwitter} from "react-icons/fa6";

const Navbar = () => {
    // Toggle Bottom :
    const [isMenuOpen, setIsMenuOpen] = useState(false) ;
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen) ;
    }
    // navItems :
    const navItems = [
        {path: "/", link: "Home"} ,
        {path: "/about", link: "About"} ,
        {path: "/services", link: "Services"} ,
        {path: "/blogs", link: "Blogs"} ,
        {path: "/contact", link: "Contact"} ,
    ] ;

    return (
        <header className="w-full bg-blue-950 text-gray-100 fixed top-0 left-0 right-0">
            <nav className="px-4 py-4 max-w-7xl mx-auto flex justify-between items-center">
                <a href="/" className="text-xl font-bold text-gray-100">Design<span className="text-orange-400">DX</span></a>

                {/*  NavItems for lg devices  */}
                <ul className="md:flex gap-12 hidden">
                    {
                        navItems.map(({path, link}) => <li className="text-gray-300" key={path}>
                            <NavLink className={({ isActive, isPending }) =>
                                isActive
                                    ? "active"
                                    : isPending
                                        ? "pending"
                                        : ""
                            } to={path}>{link}</NavLink>
                        </li>)
                    }
                </ul>

                {/*  menu icon  */}
                <div className="text-gray-100 lg:flex gap-4 items-center hidden">
                    <a href="/" className="hover:text-orange-400 transition-all duration-150 ease-in"><FaFacebook/></a>
                    <a href="/" className="hover:text-orange-400 transition-all duration-150 ease-in"><FaDribbble/></a>
                    <a href="/" className="hover:text-orange-400 transition-all duration-150 ease-in"><FaXTwitter/></a>
                    <button className="bg-orange-400 px-6 py-2 rounded font-medium hover:bg-gray-50 hover:text-orange-400 transition-all duration-200 ease-in">Log in</button>
                </div>

                {/* mobile menu, display mobile icon */}
                <div className="md:hidden">
                    <button className="cursor-pointer" onClick={toggleMenu}>
                        {
                            isMenuOpen ? <FaXmark className="w-5 h-5"/> :  <FaBars className="w-5 h-5"/>
                        }
                    </button>
                </div>
            </nav>

            {/* menu item only for mobile */}
            <div>
                <ul className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-gray-50 ${isMenuOpen ? 'fixed w-full top-0 left-0 transition-all ease-out duration-150' : 'hidden'}`}>
                    {
                        navItems.map(({path, link}) => <li className="text-blue-950" key={path}>
                            <NavLink onClick={toggleMenu} to={path}>{link}</NavLink>
                        </li>)
                    }
                </ul>
            </div>
        </header>
    );
}

export default Navbar;