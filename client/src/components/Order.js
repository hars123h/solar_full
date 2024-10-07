import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ContextApi } from '../App';
import { LiaAngleLeftSolid } from 'react-icons/lia';
import { FiArrowLeft } from 'react-icons/fi';

const DateDifference = (date1, date2) => {


    //console.log(date1, date2);    
    var Difference_In_Time = date2.getTime() - date1.getTime();
    //console.log(Difference_In_Time);
    var Difference_In_Days = Math.floor(Difference_In_Time / (1000 * 3600 * 24));

    //console.log(Difference_In_Days);

    return Difference_In_Days;
}

const Order = () => {

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

    const [toggle, setToggle] = useState(false)
    const [completed, setCompleted] = useState('text-black')
    const [processing, setProcessing] = useState('text-red-500')

    const toggleser = () => {
        if (toggle) {
            setCompleted('text-red-500')
            setProcessing('text-black')
        }
        else {
            setProcessing('text-red-500')
            setCompleted('text-black')
        }
    }

    useEffect(() => {
        toggleser();
    }, [toggle, setToggle])





    return (
        <>

            <div className=" bg-white after:contents-[' '] after:fixed min-h-screen">
                <div className="w-full mx-auto max-w-[800px]">

                    <header className="h-[50px] leading-[50px] block pb-[10px] bg-[#f8f9fb] border-0 border-b-[1px] border-[#e7e8ea]">
                        <div className="max-w-[800px] h-[50px] leading-[50px] left-0 right-0 top-0 mx-auto fixed z-[9999] flex flex-wrap items-center  ">

                            <Link to={'/settings'} className="w-[60px] h-[50px] left-0 text-center text-[22px] absolute z-[2] flex justify-center items-center ">
                                <FiArrowLeft size={22} />
                            </Link>

                            <h2 className='left-0 right-0 text-center text-lg font-medium absolute z-[1] flex-1 ' >Investment</h2>

                        </div>
                    </header>

                    <div className="mx-auto relative z-[1]">

                        <div className="flex flex-wrap">

                            <div onClick={() => setToggle(!toggle)} className={`p-1 flex flex-wrap justify-center items-center w-1/2 `}>
                                <p className={`${completed}`}>completed</p>
                            </div>

                            <div onClick={() => setToggle(!toggle)} className={` p-1 flex flex-wrap justify-center items-center w-1/2`}>
                                <p className={`${processing}`}>processing</p>
                            </div>

                        </div>

                        <div className="p-5">

                            {toggle ?

                                <>
                                    {userDetails?.plans_purchased?.map((element, index) => {
                                        if (element.plan_daily_earning * element.plan_cycle === DateDifference(new Date(element.date_purchased), new Date(element.date_till_rewarded)) * element.quantity * element.plan_daily_earning) {
                                            return (
                                                <div className="my-[5px] border-x-2 bg-[#f8f9fb] border-[#f8f9fb] border-b-2  rounded-[7px]" key={index}>

                                                    <div className="p-3 text-base font-semibold bg-confirm rounded-t-lg bg-[#265eac] text-white">Plan Details</div>
                                                    <div className='p-3'>
                                                        <div className='mb-1'>plan amount: &#8377;{element.plan_amount}</div>
                                                        <div className='mb-1'>earn: &#8377;{DateDifference(new Date(element.date_purchased), new Date(element.date_till_rewarded)) * element.quantity * element.plan_daily_earning}</div>
                                                        <div className='mb-1'>total revenue: {element.plan_daily_earning * element.plan_cycle}</div>
                                                        <div className='mb-1'>time: {element.date_purchased}</div>
                                                        {/* <div className='mb-1'>Plan Cycle: {element.plan_cycle}</div>
                                                        <div className='mb-1'>Plan Daily Earning: &#8377;{element.plan_daily_earning}</div>
                                                        <div className='mb-1'>Quantity: {element.quantity}</div> */}
                                                        <div className='mb-1'>full time: {element.fullTime}</div>

                                                    </div>

                                                </div>
                                            )
                                        }
                                    })}
                                </>

                                :
                                <>
                                    {userDetails?.plans_purchased?.map((element, index) => {
                                        if (element.plan_daily_earning * element.plan_cycle !== DateDifference(new Date(element.date_purchased), new Date(element.date_till_rewarded)) * element.quantity * element.plan_daily_earning) {
                                            return (
                                                <div className="my-[5px] border-x-2 bg-[#f8f9fb] border-[#f8f9fb] border-b-2  rounded-[7px]" key={index}>

                                                    <div className="p-3 text-base font-semibold bg-confirm rounded-t-lg bg-[#265eac] text-white">Plan Details</div>
                                                    <div className='p-3'>
                                                        <div className='mb-1'>plan amount: &#8377;{element.plan_amount}</div>
                                                        <div className='mb-1'>earn: &#8377;{DateDifference(new Date(element.date_purchased), new Date(element.date_till_rewarded)) * element.quantity * element.plan_daily_earning}</div>
                                                        <div className='mb-1'>total revenue: {element.plan_daily_earning * element.plan_cycle}</div>
                                                        <div className='mb-1'>time: {element.date_purchased}</div>
                                                        {/* <div className='mb-1'>Plan Cycle: {element.plan_cycle}</div>
                                                        <div className='mb-1'>Plan Daily Earning: &#8377;{element.plan_daily_earning}</div>
                                                        <div className='mb-1'>Quantity: {element.quantity}</div> */}
                                                        <div className='mb-1'>full time: {element.fullTime}</div>

                                                    </div>

                                                </div>
                                            )
                                        }
                                    })}
                                </>

                            }

                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}

export default Order