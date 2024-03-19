import React from 'react';
import {FaInstagram, FaSquareFacebook, FaTwitter, FaXTwitter} from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="bg-sky-950">
            <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4">
                <div className="grid mb-16 lg:grid-cols-6">
                    <div className="grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4">
                        {/* First category */}
                        <div>
                            <p className="font-medium tracking-wide text-gray-300">Category</p>
                            <ul className="mt-2 space-y-2">
                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-400">News</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-400">World</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-400">Games</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-400">References</a>
                                </li>

                            </ul>
                        </div>

                        {/* Second category */}
                        <div>
                            <p className="font-medium tracking-wide text-gray-300">Apples</p>
                            <ul className="mt-2 space-y-2">
                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-400">Web</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-400">eCommerce</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-400">Business</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-400">Entertainment</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-400">Portfolio</a>
                                </li>

                            </ul>
                        </div>

                        {/*  Third category  */}
                        <div>
                            <p className="font-medium tracking-wide text-gray-300">Cherry</p>
                            <ul className="mt-2 space-y-2">
                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-400">Media</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-400">Brochure</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-400">Nonprofit</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-400">Education</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-400">Projects</a>
                                </li>

                            </ul>
                        </div>

                        {/*  Four category  */}
                        <div>
                            <p className="font-medium tracking-wide text-gray-300">Business</p>
                            <ul className="mt-2 space-y-2">
                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-400">Infopreneur</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-400">Personal</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-400">Wiki</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-400">Forum</a>
                                </li>
                                <li>
                                    <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-orange-400">Projects</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                    {/* Subscription */}
                    <div className="md:max-w-md lg:col-span-2  lg:mt-0 mt-5">
                        <p className="font-medium tracking-wide text-gray-300">Subscribe for update</p>
                        <form className="mt-4 flex flex-col md:flex-row">
                            <input type="email" name="email" id="email" className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm aspect-auto md:mr-2 md:mb-0 focus:border-purple-400 focus:outline-none"/>
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-gray-50 transition duration-200 rounded shadow-md hover:bg-orange-400 hover:border-orange-400 focus:outline-none border"
                            >
                                Subscribe
                            </button>
                        </form>
                        <p className="mt-4 text-sm text-gray-300">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto est illum in incidunt optio quidem vitae! Ad asperiores doloribus earum fugit harum hic id magni officia ratione sapiente velit, vero.</p>
                    </div>
                </div>
                <div className="flex flex-col justify-between pt-8 pb-10 border-t border-gray-600 sm:flex-row">
                    <p className="text-sm text-gray-400">© Copyright 2024 | All right reserved</p>
                    <div className="flex items-center mt-4 space-x-4 sm:mt-0">
                        <a href="/" className="text-gray-400 transition-all duration-300 hover:text-orange-400"><FaXTwitter className="h-6 w-6"/></a>
                        <a href="/" className="text-gray-400 transition-all duration-300 hover:text-orange-400"><FaInstagram className="h-6 w-6"/></a>
                        <a href="/" className="text-gray-400 transition-all duration-300 hover:text-orange-400"><FaSquareFacebook className="h-6 w-6"/></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;