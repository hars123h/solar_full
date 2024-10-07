import React, { useContext, useEffect, useState } from 'react'
import { LiaAngleLeftSolid } from 'react-icons/lia'
import { Link, useNavigate } from 'react-router-dom'
import { ContextApi } from '../App';
import chip from '../images/Chip.svg'
import { AiOutlinePlus } from 'react-icons/ai';
import { FiArrowLeft } from 'react-icons/fi';
import { CgCreditCard } from 'react-icons/cg'

const BankCard = () => {

    const navigate = useNavigate();


    const { userDetails, setUserDetails, setUser, getUserDetails, toaster, user } = useContext(ContextApi);




    useEffect(() => {
        if (user) {
            getUserDetails()
        }
        else {
            toaster('Please login')
            setTimeout(() => {
                navigate('/')
            }, 3000);
        }
    }, [])

    console.log(userDetails?.bank_details);

    return (
        <>
            <div className=" ">
                <div className="w-full mx-auto max-w-[800px]">

                    <header className="h-[50px] leading-[50px] block pb-[10px] bg-[#f8f9fb] border-0 border-b-[1px] border-[#e7e8ea]">
                        <div className="max-w-[800px] h-[50px] leading-[50px] left-0 right-0 top-0 mx-auto fixed z-[9999] flex flex-wrap items-center  ">

                            <Link to={'/settings'} className="w-[60px] h-[50px] left-0 text-center text-[22px] absolute z-[2] flex justify-center items-center ">
                                <FiArrowLeft size={22} />
                            </Link>

                            <h2 className='left-0 right-0 text-center font-bold text-lg absolute z-[1] flex-1 ' >My Bank Card</h2>

                        </div>
                    </header>

                    <div className="mx-auto relative z-[1] p-3">

                        {userDetails?.bank_details?.fullName !== '' &&
                            <div className="text-white">
                                <div className="bg-[#265eac] rounded-md p-5" >

                                    <div className="flex items-center text-white space-x-3 text-lg">
                                        <CgCreditCard />

                                        <p>{userDetails?.bank_details?.bankAccount.toString().replace(/\d{4}(?=.)/g, '$& ')}</p>
                                    </div>

                                    <div className="mt-5 text-3xl">
                                        {userDetails?.bank_details?.ifsc}
                                    </div>

                                    <p className=''>{userDetails?.bank_details?.fullName}</p>

                                    <p className='text-right text-4xl mt-3 font-bold'>Cipla</p>


                                </div>
                            </div>
                        }

                    </div>

                    <Link to={'/bankcardadd'} className='bg-[#265eac] my-[30px] p-[10px] text-[white] w-[90vw] text-center rounded-3xl fixed bottom-0 flex items-center justify-center mx-5' >
                        <AiOutlinePlus size={25} className='mx-2 align-bottom' />

                        Add Bank card

                    </Link>

                </div>

            </div>

        </>
    )
}

export default BankCard