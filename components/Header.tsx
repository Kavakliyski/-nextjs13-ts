
// react
import { useEffect, useState } from 'react';

// icons
import { BellIcon, SearchIcon } from '@heroicons/react/solid';

// nextjs
import Link from 'next/link'
import Image from 'next/image'


function Header() {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const  handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
        
    }, [])

    return (
        <header className={`${isScrolled && 'bg-[#141414]'}`}>
            <div className="flex items-center space-x-2 md:space-x-10">
                <Image
                    src="/Netflix.svg"
                    alt=''
                    width={100}
                    height={100}
                    className="cursor-pointer object-contain"
                />

                <ul className="hidden space-x-4 md:flex">
                    <li className="headerLink">Home</li>
                    <li className="headerLink">TV Shows</li>
                    <li className="headerLink">Movies</li>
                    <li className="headerLink">New & Popular</li>
                    <li className="headerLink">My List</li>
                </ul>
            </div>

            <div className='flex items-center space-x-4 text-sm font-light'>
                <SearchIcon className="hoddem h-6 w-6 sm:inline" />
                <p className="hidden lg:inline">Kids</p>
                <BellIcon className="h-6 w-6" />
                <Link href="/account">
                    <Image
                        src="/user.png"
                        alt=""
                        width={40}
                        height={40}
                        className="cursor-pointer rounded"
                    />
                </Link>
            </div>
        </header>
    )
}

export default Header