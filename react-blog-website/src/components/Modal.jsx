import React from 'react'
import { FaXmark } from 'react-icons/fa6'

const Modal = ({ isOpen, onClose }) => {
    return (
        <div className={`fixed top-20 left-0 w-full flex items-center justify-center ${isOpen ? "" : "hidden"}`}>
            <div className='modal-container'>
                <div className='bg-indigo-700 text-center p-5 h-96 lg:w-[500px] rounded shadow-md'>
                    {/* MODAL CONTENT */}
                    <div className='flex items-center justify-between mb-10'>
                        <h2 className='text-xl font-semibold mb-4 mt-6 uppercase'>Please Login Here!</h2>
                        <FaXmark className='cursor-pointer text-4xl mt-2' onClick={onClose}/>
                    </div>
                    <form className='px-4'>
                        {/* EMAIL */}
                        <div className='mb-5'>
                            <input type="text" name='email' id='email' placeholder='example@gmail.com' className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border[#6a64f1] focus:shadow-md' />
                        </div>

                        {/* PASSWORD */}
                        <div className='mb-5'>
                            <input type="password" name='password' id='password' placeholder='Password' className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border[#6a64f1] focus:shadow-md' />
                        </div>

                        <div>
                            <button className='hover:shadow-md rounded-md bg-[#6a64f1] hover:bg-orange-600 py-3 px-8 text-base font-semibold text-white outline-none'>Login</button>
                        </div>
                    </form>



                </div>
            </div>
        </div>
    )
}

export default Modal