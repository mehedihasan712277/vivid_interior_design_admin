import { Info, Home, Users, Briefcase, Folder, FileText, MessageCircle, Star, Mail } from 'lucide-react';
import bg from "@/assets/polygon.jpg"
import Image from 'next/image';


const Sidebar = () => {
    return (
        <>
            <div className="w-80 h-screen fixed top-0 bottom-0 left-0">
                <div className='relative w-80 h-screen'>
                    <div>
                        <Image src={bg} alt='bg' className='w-80 h-screen'></Image>
                    </div>
                    <div className='bg-[#15273a] bg-opacity-95 text-gray-300 absolute top-0 bottom-0 left-0 w-80 z-10'>
                        <Home size={20} color='#f19411' />
                        <p>Home</p>
                        <Info size={20} color='#ce4e43' />
                        <p>About us</p>
                        <Briefcase size={20} color='#ef1c63' />
                        <p>Service</p>
                        <Folder size={20} color='#00ffde' />
                        <p>Portfolio</p>
                        <FileText size={20} color='#00acee' />
                        <p>Blog</p>
                        <MessageCircle size={20} color='#ff00ae' />
                        <p>Consultancy</p>
                        <Star size={20} color='#4dfb11' />
                        <p>Testimonial</p>
                        <Mail size={20} color='#ea00ff' />
                        <p>Contact</p>
                        <Users size={20} color='#fe5722' />
                        <p>Users</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar