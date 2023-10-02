'use client'
import Companies from './companies'
import i1 from './../asset/me-images/1.jpg'
import i2 from './../asset/me-images/2.jpg'
import i3 from './../asset/me-images/3.jpg'
import Image from "next/image";
import Skill from './skill'
export default function Page() {
    return (
        <>
            <div>
                <p className='ml-5'>Me in 2023</p>
                <div className='flex items-center mb-10'>
                    <Image
                        width={240}
                        height={240}
                        alt="NextUI Fruit Image with Zoom"
                        src={i1}
                        className='object-fit m-2 rounded-2xl'
                    />
                    <Image
                        width={240}
                        height={240}
                        alt="NextUI Fruit Image with Zoom"
                        src={i2}
                        className='object-fit m-2 rounded-2xl'
                    />
                    <Image
                        width={240}
                        height={240}
                        alt="NextUI Fruit Image with Zoom"
                        src={i3}
                        className='object-fit m-2 rounded-2xl'
                    />
                </div>
            </div>
            <Skill></Skill>
            <Companies></Companies>
        </>
    )
}