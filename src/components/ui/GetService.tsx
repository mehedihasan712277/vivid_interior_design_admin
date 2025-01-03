import React, { useContext } from 'react'
import { AuthContext } from '../shared/AuthProvider'

const GetService = () => {

    const authContext = useContext(AuthContext)
    if (!authContext) {
        return null;
    }
    const { service, changeServiceKey } = authContext
    console.log(service, changeServiceKey);

    return (
        <div className='space-y-3'>
            {
                service?.slice().reverse().map(ele => {
                    return <div key={ele._id} className='bg-white rounded-md shadow-md'>
                        <p>{ele.title}</p>
                        <p>{ele.subtitle}</p>
                        <p>{ele.type}</p>
                        <p>{ele.createdAt?.replace("T", " ").slice(0, 16)}</p>
                    </div>
                })
            }
        </div>
    )
}

export default GetService