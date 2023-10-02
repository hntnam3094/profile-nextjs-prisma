'use client'

import Image from "next/image";
import huit from './../asset/images/huit.png'
import lampart from './../asset/images/lampart-logo.jpeg'
import anyses from './../asset/images/logo (1).png'
import {Tooltip, Button} from "@nextui-org/react";
let companyList = [
    {
        logo: anyses,
        name: "anyses",
        year_from: 2023,
        year_to: '',
        content: {
            title: 'Anyses - (2023 ~ )',
            work: ['html', 'css', 'php', 'vue 3', 'react', 'nextjs', 'docker', 'mysql', 'prisma', 'laravel', 'nodejs']
        }
    },
    {
        logo: lampart,
        name: "lampart",
        year_from: 2020,
        year_to: 2023,
        content: {
            title: 'Lampart - (2020 ~ 2023)',
            work: ['html', 'css', 'php', 'vue 2', 'mysql', 'laravel', 'codeigniter', 'nodejs']
        }
    },
    {
        logo: huit,
        name: "HCMC UNIVERSITY OF INDUSTRY AND TRADE",
        year_from: 2017,
        year_to: 2020,
        content: {
            title: 'HCMC UNIVERSITY OF INDUSTRY AND TRADE - (2017 ~ 2020)',
            work: ['html', 'css', 'c++', 'c#', 'sqlserver']
        }
    }
]

export default function Page() {
    return (
        <>
        
            <div className="w-[100%]">
                {
                    companyList.map(item => (
                        <Tooltip key={item.name} content={
                            <div className="px-1 py-2">
                                <div className="text-small font-bold uppercase">{item.content.title}</div>
                                <div className="text-tiny">
                                    <ul>
                                        {item.content.work.map(workchil => (
                                            <li key={workchil} className="uppercase">{workchil}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        } 
                        placement="left-start">
                            <div key={item.name} className="flex items-center mb-5 cursor-pointer p-2 rounded hover:bg-slate-200">
                            <div className="w-[100px]">
                                    <Image 
                                    src={item.logo} 
                                    width={60} 
                                    height={60}
                                    alt="HUIT"
                                    className="border border-2 w-[60px] h-[60px] object-cover rounded-full "/>
                                </div>

                                <div className="text-[12px] font-bold text-slate-500 uppercase">
                                    {item.name}
                                </div>
                            </div>
                        </Tooltip>
                    ))
                }
            </div>
        </>
    )
}