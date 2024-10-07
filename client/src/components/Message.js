import React from 'react'
import noMessage from "../images/noMessage.svg";
import { Link } from 'react-router-dom';
import { LiaAngleLeftSolid } from 'react-icons/lia';
import { FiArrowLeft } from 'react-icons/fi';

const Message = () => {
    return (
        <>
            <div className="  after:contents-[' '] after:fixed h-screen ">
                <div className="w-full mx-auto max-w-[800px]">

                    <header className="h-[50px] leading-[50px] block pb-[10px] bg-[#f8f9fb] border-0 border-b-[1px] border-[#e7e8ea]">
                        <div className="max-w-[800px] h-[50px] leading-[50px] left-0 right-0 top-0 mx-auto fixed z-[9999] flex flex-wrap items-center  ">

                            <Link to={'/home'} className="w-[60px] h-[50px] left-0 text-center text-[22px] absolute z-[2] flex justify-center items-center ">
                                <FiArrowLeft size={22} />
                            </Link>

                            <h2 className='left-0 right-0 text-center text-lg font-medium absolute z-[1] flex-1 ' >Messages</h2>

                        </div>
                    </header>

                    <div className="mx-auto relative z-[1]">

                        <div className="w-4/5 max-w-[300px] my-5 mx-auto text-center opacity-60">
                            <div className="w-1/2 max-w-[180px] mx-auto">
                                <img src={noMessage} alt="" className='w-full max-w-[150px] opacity-30' />
                            </div>
                            <h3 className='w-3/5 mx-auto text-xl font-medium text-[rgba(150,150,150,0.6)]'>There is no mail</h3>
                        </div>


                    </div>


                </div>
            </div>

        </>
    )
}

export default Message