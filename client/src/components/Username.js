import React from 'react'
import './Username.css'
import { Link } from 'react-router-dom'
import avatar from '../assets/profile.png'

const Username = () => {
    return (
        <div className="container max-auto">
            <div className='flex h-screen'>
                <div>
                    <div className="title flex flex-col items-center">
                        <h4 className='text-5xl font-bold'>Hello</h4>
                        <span className='py-4 text-xl w-2\3 text-center text-gray-500'>Explore more by connecting with us</span>
                    </div>
                    <form className='py-1'>
                        <div className='profile flex justify-center py-4'>
                            <img src={avatar} alt="avatar" />
                        </div>
                        <div className='textbox flex flex-col item-center gsp-6'>
                            <input type="text" placeholder='UserName'/>
                            <button type='submit'>Let's GO</button>
                        </div>
                        <div className='text-center py-4'>
                            <span className='text-gray-500'>Not a Member <Link className='text-red-500' to="/register">Register Now</Link></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Username