import React, { useContext, useEffect, useState } from 'react'
import { FaAngleLeft } from 'react-icons/fa'
import { LiaAngleLeftSolid } from 'react-icons/lia'
import { Link, useNavigate } from 'react-router-dom'
import { ContextApi } from '../App'
import QuickAmountCard from './QuickAmountCard'
import BASE_URL, { upiurl, upiurl2 } from '../api_url'
import axios from 'axios'

const Deposit = () => {

    const navigate = useNavigate();

    const { userDetails, setUserDetails, getUserDetails, user, toaster } = useContext(ContextApi);

    const [Deposit, setDeposit] = useState('')
    const [selected, setSelected] = useState()
    const [amounts, setAmounsts] = useState({});
    const [disableHandel, setDisableHandel] = useState(true)
    const [disableclass, setDisableclass] = useState('van-button--disabled')


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


    const amount = [820, 3000, 5000, 10000, 20000, 50000]

    const handleRecharge = () => {
        if (parseInt(Deposit)) {
            if (Number(amounts.amount) > Number(Deposit)) {
                toaster(`Amount should be greater than ₹${amounts.amount}`);
                return;
            }
            // navigate(`/recharge_window/${Deposit}`);
            else {
                window.location.href = `${upiurl}/${localStorage.getItem('uid')}/${Deposit}/`
                return
            }

        } else {
            toaster('Enter a valid recharge amount');
        }
    }

    useEffect(() => {
        const getData = async () => {

            //console.log('hello');
            const dataRes = await axios.get(`${BASE_URL}/amounts`).then(({ data }) => data);
            //console.log(dataRes);
            if (dataRes) {
                // console.log(dataRes);
                setAmounsts(dataRes);
            }

        }

        getData()

    }, [])

    useEffect(() => {

        if(Deposit===0){
            setDisableHandel(true)
            setDisableclass('van-button--disabled')
        }
        else{
            setDisableHandel(false)
            setDisableclass('')
        }
      
    }, [Deposit,setDeposit])


    console.log(Deposit);
    


    return (

        <>

            <>
                {/* <div className="after:bg-white after:contents-[' '] after:fixed ">
                    <div className="w-full mx-auto max-w-[800px]">

                        <header className="h-[50px] leading-[50px] block">
                            <div className="max-w-[800px] h-[50px] leading-[50px] left-0 right-0 top-0 mx-auto fixed bg-[rgb(1,77,173)] z-[9999] flex flex-wrap items-center  ">

                                <Link to={'/account'} className="w-[60px] h-[50px] left-0 text-center text-white text-[22px] absolute z-[2] flex justify-center items-center ">
                                    <LiaAngleLeftSolid size={22} />
                                </Link>

                                <h2 className='left-0 right-0 text-center text-lg font-medium absolute z-[1] flex-1 text-white ' >Deposit</h2>

                            </div>
                        </header>

                        <div className="mx-auto relative z-[1]">

                            <div className="bg-[rgb(1,77,173)] px-5 pt-5 overflow-hidden invite">
                                <div className="flex flex-wrap items-center mb-5 ">
                                    <div className="mt-[10px]">
                                        <h3 className='text-[30px] font-bold text-white leading-none' >
                                            <em className='mr-1 p-0 px-[2px] border-0 text-base font-light align-top not-italic leading-none '>₹</em>
                                            {userDetails?.balance?.toFixed(2)}
                                        </h3>
                                        <span className='text-base text-[#fffc] opacity-80 leading-none'>Account Balance</span>
                                    </div>
                                </div>
                            </div>

                            <div className="m-[10px] p-[10px] relative z-10 ">
                                <div className="">

                                    <div className="px-[10px] mb-5 relative border-0 border-solid border-[rgba(215, 215, 215, 0.6)] bg-[rgb(246,246,246)] rounded-[7px] flex items-center flex-wrap">
                                        {Deposit ?
                                            <input
                                                onChange={e => { setDeposit(e.target.value); setSelected() }}
                                                type="number"
                                                name="deposit"
                                                id="deposit"
                                                className='flex-1 fillArea w-full h-[50px] text-base leading-none px-[5px] py-[10px] appearance-none select-text outline-none border-0 border-[#e0e0e0] border-solid text-[#1e2531] font-medium bg-transparent '
                                                value={Deposit}
                                                placeholder=''
                                            />
                                            :
                                            <input
                                                onChange={e => { setDeposit(e.target.value); setSelected() }}
                                                type="number"
                                                name="deposit"
                                                id="deposit"
                                                className='flex-1 fillArea w-full h-[50px] text-base leading-none px-[5px] py-[10px] appearance-none select-text outline-none border-0 border-[#e0e0e0] border-solid text-[#1e2531] font-medium bg-transparent '
                                                placeholder=''
                                            />
                                        }
                                        <div className="cut bg-transparent rounded-[10px] h-5 left-[10px] absolute -top-5 translate-y-0 w-[100px] transition-transform delay-0 eas duration-200"></div>
                                        <label className='placeholder text-[#818393] text-sm leading-none left-[10px] pointer-events-none absolute origin-[0_50%] transition-all duration-200  '>Deposit Amount</label>
                                    </div>

                                    <div className="mb-5 relative">

                                        <div className="inline-block text-sm px-[5px] pb-[3px] ">
                                            <h3 className='font-bold'>Quick Amount</h3>
                                        </div>

                                        <div className="flex flex-wrap items-center">

                                            {amount.map((data, index) =>
                                                <QuickAmountCard key={index} id={index} selected={selected} setSelected={setSelected} amount={data} setDeposit={setDeposit} />
                                            )}

                                        </div>

                                    </div>

                                    <div className="mb-5 relative">

                                        <div className="inline-block text-sm px-[5px] pb-[3px] ">
                                            <h3 className='font-bold'>Select the Deposit channel</h3>
                                        </div>

                                        <div className="">

                                            <div className="w-full inline-block relative check clear">
                                                <input className='hidden invisible' type="radio" value="102" id="payway102" name="payway" defaultChecked />
                                                <label htmlFor="payway102" className='rounded-[7px] w-full p-[10px_10px_10px_35px] mt-[10px] border-2 border-[#f5f5f5] border-solid leading-[20px] text-[#999] inline-block relative before:top-[10px] before:left-[10px] before:w-5 before:h-5 before:leading-[20px] before:inline-block before:bg-white before:border-2 before:border-solid before:border-[#ccc] before:rounded-[50%] before:contents-[" "] before:text-center before:align-top before:cursor-pointer before:absolute '>

                                                    <p className='text-[#666]'>Deposit Channel A</p>

                                                    <span className='text-sm text-[#999]'>
                                                        <em className=' p-0 px-[2px] border-0 text-base font-light not-italic leading-none '>₹</em>
                                                        100 ~
                                                        <em className=' p-0 px-[2px] border-0 text-base font-light not-italic leading-none '>₹</em>
                                                        100,00
                                                    </span>


                                                </label>
                                            </div>

                                            <div className="w-full inline-block relative check clear">
                                                <input className='hidden invisible' type="radio" value="100" id="payway100" name="payway" />
                                                <label htmlFor="payway100" className='rounded-[7px] w-full p-[10px_10px_10px_35px] mt-[10px] border-2 border-[#f5f5f5] border-solid leading-[20px] text-[#999] inline-block relative before:top-[10px] before:left-[10px] before:w-5 before:h-5 before:leading-[20px] before:inline-block before:bg-white before:border-2 before:border-solid before:border-[#ccc] before:rounded-[50%] before:contents-[" "] before:text-center before:align-top before:cursor-pointer before:absolute '>

                                                    <p className='text-[#666]'>Deposit Channel B</p>

                                                    <span className='text-sm text-[#999]'>
                                                        <em className=' p-0 px-[2px] border-0 text-base font-light not-italic leading-none '>₹</em>
                                                        100 ~
                                                        <em className=' p-0 px-[2px] border-0 text-base font-light not-italic leading-none '>₹</em>
                                                        100,00
                                                    </span>


                                                </label>
                                            </div>

                                            <div className="w-full inline-block relative check clear">
                                                <input className='hidden invisible' type="radio" value="101" id="payway101" name="payway" />
                                                <label htmlFor="payway101" className='rounded-[7px] w-full p-[10px_10px_10px_35px] mt-[10px] border-2 border-[#f5f5f5] border-solid leading-[20px] text-[#999] inline-block relative before:top-[10px] before:left-[10px] before:w-5 before:h-5 before:leading-[20px] before:inline-block before:bg-white before:border-2 before:border-solid before:border-[#ccc] before:rounded-[50%] before:contents-[" "] before:text-center before:align-top before:cursor-pointer before:absolute '>

                                                    <p className='text-[#666]'>Deposit Channel C</p>

                                                    <span className='text-sm text-[#999]'>
                                                        <em className=' p-0 px-[2px] border-0 text-base font-light not-italic leading-none '>₹</em>
                                                        100 ~
                                                        <em className=' p-0 px-[2px] border-0 text-base font-light not-italic leading-none '>₹</em>
                                                        100,00
                                                    </span>


                                                </label>
                                            </div>

                                            <div className="w-full inline-block relative check clear">
                                                <input className='hidden invisible' type="radio" value="103" id="payway103" name="payway" />
                                                <label htmlFor="payway103" className='rounded-[7px] w-full p-[10px_10px_10px_35px] mt-[10px] border-2 border-[#f5f5f5] border-solid leading-[20px] text-[#999] inline-block relative before:top-[10px] before:left-[10px] before:w-5 before:h-5 before:leading-[20px] before:inline-block before:bg-white before:border-2 before:border-solid before:border-[#ccc] before:rounded-[50%] before:contents-[" "] before:text-center before:align-top before:cursor-pointer before:absolute '>

                                                    <p className='text-[#666]'>Deposit Channel D</p>

                                                    <span className='text-sm text-[#999]'>
                                                        <em className=' p-0 px-[2px] border-0 text-base font-light not-italic leading-none '>₹</em>
                                                        100 ~
                                                        <em className=' p-0 px-[2px] border-0 text-base font-light not-italic leading-none '>₹</em>
                                                        100,00
                                                    </span>


                                                </label>
                                            </div>



                                        </div>

                                    </div>

                                    <div onClick={handleRecharge} className='my-10 w-full text-white bg-[#00aa75] border-0 border-[rgba(215,215,215,0.6)] h-11 leading-10 px-5 text-center text-base block border-solid rounded-[500px] transition-all active:translate-y-1 duration-500 overflow-hidden relative '>
                                        To Deposit
                                    </div>

                                </div>
                            </div>

                            <div className="mx-[10px] px-5">

                                <p className='leading-6 text-sm text-[#666] mb-[10px]'>
                                    <strong>
                                        1. Please do not modify the deposit amount. Unauthorized modification of the deposit
                                        amount will result in the deposit not being credited
                                    </strong>
                                </p>

                                <p className='leading-6 text-sm text-[#666] mb-[10px]'>
                                    2. Deposit received within 5 minutes, if not received within 5 minutes, please contact online
                                    customer service for processing
                                </p>

                                <p className='leading-6 text-sm text-[#666] mb-[10px]'>
                                    3. Due to too many deposit users, please try multiple times to obtain the deposit link or try
                                    again after a period of time
                                </p>

                            </div>

                        </div>

                    </div>
                </div> */}
            </>
            <section className="deposit-page flex flex-col">
                <div className="deposit-page-content flex-1">
                    <div className="input-amount">
                        <div className="text-center">
                            <div className="title">Deposit</div>
                            <div className="currentBalance">Current Balance₹{userDetails?.balance?.toFixed(2)}</div>
                        </div>
                        <div className="input-amount-choose">

                            {amount.map((data, index) =>
                                <QuickAmountCard key={index} id={index} selected={selected} setSelected={setSelected} amount={data} setDeposit={setDeposit} />
                            )}

                        </div>
                        <div className="flex items-center input-amount-content">
                            ₹
                            <input
                                onChange={e => { setDeposit(e.target.value); setSelected() }}
                                placeholder="0"
                                type="number"
                                value={Deposit}
                            />
                        </div>
                    </div>
                    <div className="title">Select the deposit channel</div>
                    <div className="amount-radio">
                        <div name="4cb3f823-34e3-5892-c52a-8d9926746fe1" className="amount-radio-item flex items-center justify-between">
                            <div className="amount-radio-item-title">Pay             100-50000</div>
                            <div className="amount-radio-item-content">₹100 ~ ₹50000</div>
                        </div>
                        <div name="1398051d-22e3-0ebe-c51a-1975ddeea29d" className="amount-radio-item flex items-center justify-between">
                            <div className="amount-radio-item-title">Pay             100-50000</div>
                            <div className="amount-radio-item-content">₹100 ~ ₹50000</div>
                        </div>
                        <div name="9a8d686f-4003-2f30-f2a2-101c3d0791e7" className="amount-radio-item flex items-center justify-between">
                            <div className="amount-radio-item-title">Pay        100-50000</div>
                            <div className="amount-radio-item-content">₹100 ~ ₹50000</div>
                        </div>
                        <div name="894381a1-4e6d-49cf-3760-e5a98077ac6a" className="amount-radio-item flex items-center justify-between">
                            <div className="amount-radio-item-title">Pay        100-50000</div>
                            <div className="amount-radio-item-content">₹100 ~ ₹50000</div>
                        </div>
                        <div name="9ff4331a-5804-2dbf-481d-4e0ff1c85eb3" className="amount-radio-item flex items-center justify-between">
                            <div className="amount-radio-item-title">Pay             100-50000</div>
                            <div className="amount-radio-item-content">₹100 ~ ₹50000</div>
                        </div>
                    </div>
                </div>
                <div className="deposit-page-bottom fixed w-full">
                    <div className="flex">
                        <Link to={'/home'} className="close flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M5.705 16.885C5.31564 17.2744 5.31564 17.9056 5.705 18.295C6.09436 18.6844 6.72564 18.6844 7.115 18.295L12 13.41L16.885 18.295C17.2744 18.6844 17.9056 18.6844 18.295 18.295C18.6844 17.9056 18.6844 17.2744 18.295 16.885L13.41 12L18.295 7.115C18.6844 6.72564 18.6844 6.09436 18.295 5.705C17.9056 5.31564 17.2744 5.31564 16.885 5.705L12 10.59L7.115 5.705C6.72564 5.31564 6.09436 5.31564 5.705 5.705C5.31564 6.09436 5.31564 6.72564 5.705 7.115L10.59 12L5.705 16.885Z" fill="black"></path>
                            </svg>
                        </Link>
                        <button onClick={handleRecharge} className={`van-button van-button--primary van-button--normal ${disableclass} van-button--block`} disabled={disableHandel}>
                            <div className="van-button__content">
                                <span className="van-button__text">
                                    NEXT
                                </span>
                            </div>
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Deposit