'use client';

import { useState } from 'react';
import Link from 'next/link';;
import Image from 'next/image';
import { MdArrowDropDown } from 'react-icons/md';
import Button from '@/components/Button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState<string | null>(null) // Track open dropdown

  // close toggleMenu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleDropdown = (menu: string) => {
    setIsDropdownOpen(prevState => (prevState === menu ? null : menu));
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(null);
  }

  return (
    <>
      <nav className="bg-white text-black border-b border-gray-200 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center text-xl font-semibold" onClick={closeMenu}>
              <Image src="/coinBankLogo.svg" alt="Logo" width={40} height={40} className='w-auto h-auto mr-2' />
              CoinBank
            </Link>

            {/* Desktop Toggle Menu */}
            <div className="hidden md:flex items-center space-x-4 flex-grow justify-center">
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('features')}
                  className="hover:text-gray-600 flex text-sm items-center space-x-1 transition-all duration-300"
                >
                  <span className='text-xs'>Features</span>
                  <MdArrowDropDown className={`transition-transform duration-300 ${isDropdownOpen === 'features' ? 'rotate-180' : ''}`} />
                </button>

                {/* Desktop Navs && Links */}
                {isDropdownOpen === 'features' && (
                  <div className="absolute bg-white text-black border border-gray-200 mt-2 py-4 w-40 rounded shadow-lg transition-all duration-300">
                    <Link href="/funding" onClick={closeMenu} className="border-b text-xs block px-4 py-2 hover:bg-gray-100">
                      Funding
                    </Link>
                    <Link href="/staking" onClick={closeMenu} className="border-b text-xs block px-4 py-2 hover:bg-gray-100">
                      Staking
                    </Link>
                    <Link href="/liquidity" onClick={closeMenu} className="border-b text-xs block px-4 py-2 hover:bg-gray-100">
                      Liquidity
                    </Link>
                    <Link href="/margintrading" onClick={closeMenu} className="text-xs block px-4 py-2 hover:bg-gray-100">
                      Marging Trading
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/prices" onClick={closeMenu} className="hover:text-gray-600 transition-all text-xs duration-300">Prices</Link>

              <div className="relative">
                <button
                  onClick={() => toggleDropdown('company')}
                  className="hover:text-gray-600 text-sm flex items-center space-x-1 transition-all duration-300"
                >
                  <span className='text-xs'>Company</span>
                  <MdArrowDropDown className={`transition-transform duration-300 ${isDropdownOpen === 'company' ? 'rotate-180' : ''}`} />
                </button>
                {isDropdownOpen === 'company' && (
                  <div className="absolute bg-white text-black border border-gray-200 mt-2 py-2 w-40 rounded shadow-lg transition-all duration-300">
                    <Link href="/about" onClick={closeMenu} className="border-b text-xs block px-4 py-2 hover:bg-gray-100">
                      About
                    </Link>
                    <Link href="/blog" onClick={closeMenu} className="border-b text-xs block px-4 py-2 hover:bg-gray-100">
                      Blog
                    </Link>
                    <Link href="/faqs" onClick={closeMenu} className="border-b text-xs block px-4 py-2 hover:bg-gray-100">
                      FAQs
                    </Link>
                    <Link href="/support" onClick={closeMenu} className="text-xs block px-4 py-2 hover:bg-gray-100">
                      Support
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/developers" onClick={closeMenu} className="hover:text-gray-600 transition-all text-xs duration-300">Developers</Link>
            </div>

            {/* Sign In & Get Started Button (Only visible on larger screens) */}
            <div className="hidden md:flex space-x-4">
              <Link href="/signin">
                <Button onClick={closeMenu} noBackground className={`font-normal border rounded-lg text-xs py-[14px] px-[20px] text-black`} >Sign In</Button>
              </Link>

              <Link href="/getstarted">
                <Button onClick={closeMenu} noBackground className={`font-normal  border rounded-lg text-xs py-[14px] px-[20px] bg-none text-[#5235E8]`} >Get Started</Button>
              </Link>
            </div>

            {/* Mobile Toggle Button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="focus:outline-none">
                {isMenuOpen ? (
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <nav>
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-white text-black border-t border-gray-200 transition-all duration-300`}>
          <div className="px-4 pt-4 pb-6 space-y-2">
            <button onClick={() => toggleDropdown('features')} className="text-xs flex items-center justify-between w-full text-left px-4 py-2 hover:bg-gray-100 rounded transition-all duration-300">
              Features
              <MdArrowDropDown className={`transition-transform duration-300 ${isDropdownOpen === 'features' ? 'rotate-180' : ''}`} />
            </button>
            {isDropdownOpen === 'features' && (
              <div className="ml-4 space-y-1">
                <Link href="/funding" onClick={closeMenu} className="border-b text-xs block px-4 py-2 hover:bg-gray-100">
                  Funding
                </Link>
                <Link href="/staking" onClick={closeMenu} className="border-b text-xs block px-4 py-2 hover:bg-gray-100">
                  Staking
                </Link>
                <Link href="/liquidity" onClick={closeMenu} className="border-b text-xs block px-4 py-2 hover:bg-gray-100">
                  Liquidity
                </Link>
                <Link href="/margintrading" onClick={closeMenu} className="text-xs block px-4 py-2 hover:bg-gray-100">
                  Marging Trading
                </Link>
              </div>
            )}

            <Link href="/prices" onClick={closeMenu} className="text-xs block px-4 py-2 hover:bg-gray-100 rounded transition-all duration-300">
              Prices
            </Link>

            <button onClick={() => toggleDropdown('company')} className="text-xs flex items-center justify-between w-full text-left px-4 py-2 hover:bg-gray-100 rounded transition-all duration-300">
              Company
              <MdArrowDropDown className={`transition-transform duration-300 ${isDropdownOpen === 'company' ? 'rotate-180' : ''}`} />
            </button>
            {isDropdownOpen === 'company' && (
              <div className="ml-4 space-y-1">
                <Link href="/about" onClick={closeMenu} className="border-b text-xs block px-4 py-2 hover:bg-gray-100">
                  About
                </Link>
                <Link href="/blog" onClick={closeMenu} className="border-b text-xs block px-4 py-2 hover:bg-gray-100">
                  Blog
                </Link>
                <Link href="/faqs" onClick={closeMenu} className="border-b text-xs block px-4 py-2 hover:bg-gray-100">
                  FAQs
                </Link>
                <Link href="/support" onClick={closeMenu} className="text-xs block px-4 py-2 hover:bg-gray-100">
                  Support
                </Link>
              </div>
            )}

            <Link href="/developers" onClick={closeMenu} className="text-xs block px-4 py-2 hover:bg-gray-100 rounded transition-all duration-300">
              Developers
            </Link>

            {/* Sign In Button in Mobile */}
            <div>
              <Link href="/signin">
                <Button
                  className='bg-blue-500 mt-4 text-left font-normal text-xs w-full text-white border-none hover:bg-blue-600'
                >
                  Sign In
                </Button>
              </Link>

              <Link href="/getstarted">
                <Button
                  className='bg-blue-500 mt-2 text-left font-normal text-xs w-full text-white border-none hover:bg-blue-600'
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
