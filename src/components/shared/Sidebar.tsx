"use client"

import { Info, Home, Users, Briefcase, Folder, FileText, MessageCircle, Star, Mail, Grid2x2 } from 'lucide-react';
import bg from "@/assets/polygon.jpg"
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const menu = [
    {
        name: "Home",
        icon: <Home size={20} color='#f19411' />,
        link: "/"
    },
    {
        name: "About us",
        icon: <Info size={20} color='#ce4e43' />,
        link: "/about"
    },
    {
        name: "Service",
        icon: <Briefcase size={20} color='#ef1c63' />,
        link: "/service"
    },
    {
        name: "Portfolio",
        icon: <Folder size={20} color='#00ffde' />,
        link: "/portfolio"
    },
    {
        name: "Blog",
        icon: <FileText size={20} color='#00acee' />,
        link: "/blog"
    },
    {
        name: "Consultancy",
        icon: <MessageCircle size={20} color='#ff00ae' />,
        link: "/consultancy"
    }
    , {
        name: "Testimonial",
        icon: <Star size={20} color='#4dfb11' />,
        link: "/testimonial"
    },
    {
        name: "category",
        icon: <Grid2x2 size={20} color='#fec106' />,
        link: "/category"
    },
    {
        name: "Contact",
        icon: <Mail size={20} color='#ea00ff' />,
        link: "/contact"
    },
    {
        name: "Users",
        icon: <Users size={20} color='#fe5722' />,
        link: "/users"
    }
]


const Sidebar = () => {
    const path = usePathname()
    console.log(path);

    return (
        <>
            <div className="w-80 h-screen fixed top-0 bottom-0 left-0">
                <div className='relative w-80 h-screen'>
                    <div>
                        <Image src={bg} alt='bg' className='w-80 h-screen'></Image>
                    </div>
                    <div className='bg-[#15273a] bg-opacity-95 text-gray-300 absolute top-0 bottom-0 left-0 w-80 z-10 px-4  overflow-y-auto'>
                        <div>
                            <p className='font-bold text-xl py-6'>
                                Vivid Interior <br />
                                & Design
                            </p>
                        </div>
                        <div className='space-y-1 h-[480px]'>
                            {
                                menu.map((ele, i) => {
                                    return <div key={i} className={`${ele.link === path ? "bg-[#1F4E79] bg-opacity-60" : "bg-transparent"}  rounded-md`}>
                                        <Link href={ele.link}>
                                            <div className='flex items-center gap-2 px-4 py-2'>
                                                <span>
                                                    {ele.icon}
                                                </span>
                                                <span>
                                                    {ele.name}
                                                </span>
                                            </div>
                                        </Link>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar