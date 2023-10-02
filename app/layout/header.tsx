'use client'
import Image from 'next/image'
import logo from '../asset/images/logo.png'
import { DarkThemeToggle, Flowbite } from 'flowbite-react';
import Link from 'next/link';
export default function Header() {
    return (
        <>
            <div className="max-w-2xl ml-auto mr-auto mt-0 mb-0 h-[60px] flex align-middle">
                <div className="flex items-center justify-between w-[100%]">
                    <div className='text-[12px]'>
                        <ul className='flex align-center items-center'>
                        <li className='mr-2 ml-2 dark:text-white uppercase font-bold'>
                                <Link href="/" className='text-[30px]'>N</Link>
                            </li>
                            <li className='mr-2 ml-2 dark:text-white uppercase font-bold'>
                                <Link href="/me">About</Link>
                            </li>
                            <li className='mr-2 ml-2 dark:text-white uppercase font-bold'>
                                <Link href="/blog">Blog</Link>
                            </li>
                            <li className='mr-2 ml-2 dark:text-white uppercase font-bold'>
                                <Link href="/project">Project</Link>
                            </li>
                        </ul>
                    </div>
                    <Flowbite>
                        <DarkThemeToggle />
                    </Flowbite>
                </div>
            </div>
        </>
    )
}