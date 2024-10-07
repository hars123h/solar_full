import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { LiaAngleLeftSolid } from 'react-icons/lia'
import { Link, useNavigate } from 'react-router-dom'
import BASE_URL from '../api_url';
import { ContextApi } from '../App';
import { FiArrowLeft } from 'react-icons/fi';
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';

const DepositRecords = () => {

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

    const nameMapper = {
        confirmed: 'success',
        declined: 'declined',
        pending: 'pending'
    }

    const [recharge_list, setRecharge_list] = useState([]);


    useEffect(() => {
        const getRecharges_list = async () => {

            const querySnapshot = await axios.post(`${BASE_URL}/get_user_recharges`, { user_id: localStorage.getItem('uid') })
                .then(res => res.data);
            // console.log(querySnapshot);
            setRecharge_list(querySnapshot);
        }
        getRecharges_list();
    }, []);

    return (
        <>
            <div className="  after:contents-[' '] after:fixed h-screen ">
                <div className="w-full mx-auto max-w-[800px]">

                    <header className="h-[50px] leading-[50px] block pb-[10px] bg-[#f8f9fb] border-0 border-b-[1px] border-[#e7e8ea]">
                        <div className="max-w-[800px] h-[50px] leading-[50px] left-0 right-0 top-0 mx-auto fixed z-[9999] flex flex-wrap items-center  ">

                            <Link to={'/settings'} className="w-[60px] h-[50px] left-0 text-center text-[22px] absolute z-[2] flex justify-center items-center ">
                                <FiArrowLeft size={22} />
                            </Link>

                            <h2 className='left-0 right-0 text-center text-lg font-medium absolute z-[1] flex-1 ' >Deposit Records</h2>

                        </div>
                    </header>
                    <div className="flex justify-between items-center p-5 bg-[#f8f9fb]">
                        <p>Total Deposit Amount: </p>
                        <p>
                            <em className=' p-0 px-[2px] border-0 text-base font-light not-italic leading-none '>₹</em>
                            {userDetails?.recharge_amount?.toFixed(2)}
                        </p>
                    </div>

                    <div className="mx-auto relative z-[1]">
                        <div className="m-[5px]">
                            <ul className='p-3'>

                                {recharge_list?.map((data, index) =>

                                    <li key={index} className='my-[5px] p-[10px] bg-[#f8f9fb] rounded-[7px] flex space-x-1 items-center'>

                                        <div className="text-[black] w-10 h-10 rounded-full border border-[black] flex justify-center items-center">
                                            <BsArrowDown size={25} />
                                        </div>

                                        <div className="flex-1 flex justify-between">

                                            <div className="">
                                                <p>Deposit</p>
                                                <p className='text-[#666] text-sm'>{new Date(data.time).toLocaleString(undefined, { timeZone: 'Asia/Kolkata' })}</p>
                                            </div>


                                            {nameMapper[String(data.status)] === 'success' &&
                                                <div className={` text-right text-[#29a635] `}>
                                                    <p className='font-bold '>
                                                        <em className=' p-0 px-[2px] border-0 text-base font-bold not-italic leading-none '>₹</em>
                                                        {new Intl.NumberFormat().format(data.recharge_value)}
                                                    </p>
                                                    <p>Successfully ended</p>
                                                </div>
                                            }
                                            {nameMapper[String(data.status)] === 'pending' &&

                                                <div className={` text-right text-[black] `}>
                                                    <p className='font-bold '>
                                                        <em className=' p-0 px-[2px] border-0 text-base font-bold not-italic leading-none '>₹</em>
                                                        {new Intl.NumberFormat().format(data.recharge_value)}
                                                    </p>
                                                    <p>Initiate deposit</p>
                                                </div>
                                            }
                                            {nameMapper[String(data.status)] === 'declined' &&

                                                <div className={` text-right text-[red] `}>
                                                    <p className='font-bold '>
                                                        <em className=' p-0 px-[2px] border-0 text-base font-bold not-italic leading-none '>₹</em>
                                                        {new Intl.NumberFormat().format(data.recharge_value)}
                                                    </p>
                                                    <p>Declined</p>
                                                </div>
                                            }

                                        </div>

                                    </li>

                                )}

                            </ul>

                            <div className="h-[50px] relative overflow-hidden text-xs translate-z-0  ">
                                <div className="h-[50px] leading-[50px] text-center text-[#cfd0d9]">No more data</div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default DepositRecords