
'use client'
import Link from 'next/link';
import avatar from './asset/images/7E46542D-A24B-41FB-9539-3647E5AC3FAF (1).jpg'
import Image from 'next/image';
import Companies from './me/companies'

const listSocialMedia = [
    {
        icon: 'fa fa',
        label: 'Github'
    },
    {
        icon: 'fa fa',
        label: 'Blog'
    },
    {
        icon: 'fa fa',
        label: 'Youtobe'
    }
]

export default function Body() {
    return (
        <>
            <div className="mb-5">
                <h1 className="text-[30px] font-bold dark:text-slate-100 ">THANH NAM</h1>
                <p className='text-slate-400 typing-infomation'>I`m write code and joy life.</p>
            </div>
            <div className="flex items-center">
                <div>
                    <Image
                        src={avatar}
                        width={200}
                        height={150}
                        alt='Logo image'
                        className='rounded-full'
                        />
                </div>
                <div className="ml-2 text-slate-400 text-[12px]">
                    Hello, I`m Nam, and I work in the field of Information Technology. <br/>
                    I have a passion for web development and I am experienced in programming using languages like PHP, Vue.js, and React.<br/>
                    In addition to my full-time job, I also work as a freelance developer, allowing me to take on exciting projects and continually expand my skillset.<br/>
                    I`m dedicated to creating innovative and user-friendly web applications that make a difference in the digital world.
                </div>
            </div>
            <div className='flex mt-10 text-slate-400'>
                <Link  href="mailto:hntnam98@gmail.com" className='flex items-center hover:text-slate-600'>Mail me 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-mailbox ml-1" viewBox="0 0 16 16">
                        <path d="M4 4a3 3 0 0 0-3 3v6h6V7a3 3 0 0 0-3-3zm0-1h8a4 4 0 0 1 4 4v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4zm2.646 1A3.99 3.99 0 0 1 8 7v6h7V7a3 3 0 0 0-3-3H6.646z"/>
                        <path d="M11.793 8.5H9v-1h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.354-.146l-.853-.854zM5 7c0 .552-.448 0-1 0s-1 .552-1 0a1 1 0 0 1 2 0z"/>
                    </svg>
                </Link>
                <Link href="/connect-me" className='ml-10 flex items-center hover:text-slate-600'>Connect me
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-people ml-1" viewBox="0 0 16 16">
                        <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/>
                    </svg>
                </Link>
            </div>

            <div className='mt-[50px]'>
                <Companies />
            </div>
        </>
    )
}