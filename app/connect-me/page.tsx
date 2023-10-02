
'use client'
import Link from 'next/link';
import avatar from './../asset/images/7E46542D-A24B-41FB-9539-3647E5AC3FAF (1).jpg'
import Image from 'next/image';


export default function Page() {
    const listSocial = [
        {
            'title': 'phonenumber',
            'link': 'tel:0378918649',
            'icon': ''
        },
        {
            'title': 'mail',
            'link': 'mailto:hntnam98@gmail.com',
            'icon': ''
        },
        {
            'title': 'facebook',
            'link': 'https://www.facebook.com/nam.hoang.3094/',
            'icon': ''
        },
        {
            'title': 'linked',
            'link': 'https://www.linkedin.com/in/nam-thanh-190ba427b/',
            'icon': ''
        }
    ]

    return (
        <div className="w-full">
                <Image
                    src={avatar}
                    width={100}
                    height={100}
                    alt='Logo image'
                    className='rounded-full my-0 mx-auto'
                    />

                <div className='mt-5 text-[12px] text-slate-400 text-center'>
                    You only live once. But eat everyday
                </div>
                <div className='mt-[60px]'>
                {
                    listSocial.map(item => (
                        <Link key={item.title} href={item.link} className='w-[400px] rounded-md uppercase text-[17px] mb-3 p-3 bg-slate-300 
                        text-slate-400 block my-0 mx-auto text-center font-bold tracking-[.5em] hover:text-slate-100 dark:text-slate-100 dark:bg-slate-500 dark:hover:text-slate-800'>
                            {item.title} <i className='bi bi-0-circle'></i>
                        </Link>
                    ))
                }
                </div>
        </div>
    )
}