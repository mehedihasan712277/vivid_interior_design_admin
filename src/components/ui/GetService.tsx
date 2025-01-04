"use client"
import React, { useContext } from 'react'
import { AuthContext } from '../shared/AuthProvider'
import axios from 'axios';
import { base_url } from '@/utils/constants';
import Image from 'next/image';
import { CircleOff, Trash2 } from 'lucide-react';

const GetService = () => {

    const authContext = useContext(AuthContext)
    if (!authContext) {
        return null;
    }
    const { service, changeServiceKey } = authContext

    const handleDelete = async (id: string | undefined) => {
        await axios.delete(`${base_url}/service/${id}`)
            .then(res => {
                console.log(res)
                changeServiceKey();
            })
            .catch(err => console.log(err))
    }
    return (
        <div className='space-y-3'>
            {
                service?.length ?
                    service?.slice().reverse().map(ele => {
                        return <div key={ele._id} className=' bg-[#182232] text-gray-400 shadow-md rounded-md w-[332px] p-4'>
                            <div>
                                <Image src={ele.img} alt='img' width={300} height={300} className='w-[300px] h-[200px]'></Image>
                                <p>{ele.title}</p>
                                <p>{ele.subtitle}</p>
                                <p>{ele.type}</p>
                            </div>
                            <div className='flex items-baseline justify-between'>
                                <p className='text-xs'>{ele.createdAt?.replace("T", " ").slice(0, 16)}</p>

                                <button onClick={() => handleDelete(ele._id)}
                                    className='text-white'
                                >
                                    <Trash2 size={20} />
                                </button>
                            </div>
                        </div>
                    })
                    :
                    <div className='flex flex-col items-center justify-center gap-4 w-[300px] h-[450px]'>
                        <div className='text-gray-600'>
                            <CircleOff size={40} />
                        </div>
                        <p className='text-gray-600 font-bold text-center w-full'>No service found</p>
                    </div>
            }
        </div>
    )
}

export default GetService