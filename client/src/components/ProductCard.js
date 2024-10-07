import React, { useContext, useEffect, useState } from 'react'
import { RiVipLine } from 'react-icons/ri'
import { BsArrowUpRight } from 'react-icons/bs'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { ContextApi } from '../App'
import axios from 'axios'
import BASE_URL from '../api_url'

const ProductCard = ({ active, pre_sale, long_plan_state, product_no, product_type, product_image, plan_name, plan_type, plan_amount, plan_daily_earning, plan_cycle, handleClick }) => {

    Date.prototype.addDays = function (days) {
        this.setDate(this.getDate() + parseInt(days));
        return this;
    };

    const {
        userDetails, setUserDetails,
        loading, setLoading,
        text, setText,
        toasterShow, setToasterShow,
        toasterText, setToasterText,
        toaster, getUserDetails
    } = useContext(ContextApi);

    const superProduct = userDetails?.plans_purchased?.filter(e => e.product_type === 0)
    // const superProduct2 = userDetails?.plans_purchased?.filter(e => e.product_type !== 0)

    const [pop, setpop] = useState(false)
    const [quantity, setQuantity] = useState(1)

    const handelInvest = async () => {

        if (plan_amount === 500 && product_type!==0 && !superProduct?.some(obj => obj.plan_amount === 535)) {
            toaster('Please buy 1701 plan first in super');
            return
        }

        if (plan_amount === 1701 && product_type!==0 && !superProduct?.some(obj => obj.plan_amount === 1701)) {
            toaster('Please buy 1701 plan first in super');
            return
        }

        if (plan_amount === 5100 && product_type!==0 && !superProduct?.some(obj => obj.plan_amount === 5157)) {
            toaster('Please buy 5157 plan first in super');
            return
        }

        if (plan_amount === 15500 && product_type!==0 && !superProduct?.some(obj => obj.plan_amount === 11000)) {
            toaster('Please buy 11000 plan first in super');
            return
        }

        if (plan_amount === 21000 && product_type!==0 && !superProduct?.some(obj => obj.plan_amount === 21000)) {
            toaster('Please buy 21000 plan first in super');
            return
        }

        if (plan_amount === 50000 && product_type!==0 && !superProduct?.some(obj => obj.plan_amount === 50000)) {
            toaster('Please buy 50000 plan first in super');
            return
        }

        if (quantity <= 0) {
            toaster('Please a positive value!');
        } else {
            if ((Number(quantity) * Number(plan_amount)) > Number(userDetails.recharge_amount)) {
                toaster("The available balance is insufficient, please recharge");
                // setBalanceIndicator(true);
                // setTimeout(() => {
                //     setBalanceIndicator(false);
                // }, 3000);
            }

            else if (product_type > userDetails.vipLevel) {
                toaster("Insufficient inventory of products availbale for purchase")
            }
            else {

                setLoading(true)

                await axios.post(`${BASE_URL}/purchase`, {
                    recharge_amount: Number(userDetails.recharge_amount) - Number(Number(quantity) * Number(plan_amount)),
                    investAmount: Number(Number(quantity) * Number(plan_amount)),
                    boughtLong: (product_type === 'vip' ? 1 : 0),
                    boughtShort: (product_type === '' ? 1 : 0),
                    user_id: localStorage.getItem('uid'),
                    parent_id: userDetails.parent_id,
                    grand_parent_id: userDetails.grand_parent_id,
                    great_grand_parent_id: userDetails.great_grand_parent_id,
                    plan_price: plan_amount,
                    plans_purchased: {
                        product_type, plan_name, plan_type, plan_amount, plan_daily_earning, plan_cycle,
                        quantity: quantity,
                        date_purchased: new Date().toDateString(),
                        date_till_rewarded: new Date().toDateString(),
                        time: new Date().toDateString(),
                        ddmmyy: new Date().getMilliseconds(),
                        fullTime: new Date().addDays(plan_cycle).toDateString()
                    }
                }).then(() => {
                    console.log('Product successfully purchased');
                    setLoading(false)
                    toaster('Plan purchased!');
                    getUserDetails()
                    setpop(!pop)
                }).catch((error) => {
                    console.log('Some error occured', error);
                    setLoading(false)
                    toaster('Some error occured, try again after some time');
                })

            }

        }
    }

    const handelClick = () => {

        const plan = userDetails?.plans_purchased?.filter((e) => e.plan_amount === plan_amount && e.product_type!==0)

        if (plan?.length !== 0) {
            toaster('You can buy this plan only once')
        }

        else {
            setpop(!pop)
        }

    }

    useEffect(() => {
        setQuantity(Math.max(quantity, 1))
    }, [quantity, setQuantity])



    useEffect(() => {
        getUserDetails();

    }, [product_type])




    return (
        <>

            {pop &&
                <div className="fixed top-0 right-0 left-0 bottom-0 z-50">

                    <div className="before:content-[''] fixed top-0 left-0 right-0 bottom-0 bg-[rgba(46,46,46,0.1)] z-[1] backdrop-blur-[3px]"></div>

                    <div className="top-0 rounded-bl-[30px] rounded-br-[30px] overflow-hidden fixed investPopup left-0 right-0 bg-white backdrop-blur-[5px] shadow-[0_0_20px_3px_rgba(0,0,0,0.1)] max-w-[800px] z-[999] mx-auto ">
                        <div className="w-full max-h-[80vh] p-5 overflow-auto bg-white">
                            <div className="">

                                <div className="">
                                    <h3 className='mb-[5px] text-[#1d1d1f] text-lg font-bold'>
                                        AI
                                    </h3>
                                </div>

                                <div className="mb-[10px]">

                                    <div className="">

                                        <div className="flex flex-wrap items-center py-[5px] border-0 border-[rgba(245,245,245,0.5)] border-solid">
                                            <div className="flex-1 flex items-center">

                                                <div className="flex-1 mr-[10px] whitespace-normal break-all">
                                                    <p className='text-base text-[#4b4d5e] break-all whitespace-normal'>Invest Price</p>
                                                </div>

                                                <div className="">
                                                    <p className='text-base text-[#4b4d5e] break-all whitespace-normal'>
                                                        <em className=' p-0 px-[2px] border-0 text-base font-light not-italic leading-none '>₹</em>

                                                        {plan_amount.toFixed(2)}</p>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="flex flex-wrap items-center py-[5px] border-0 border-t-[1px] border-[rgba(245,245,245,0.5)] border-solid">
                                            <div className="flex-1 flex items-center">

                                                <div className="flex-1 mr-[10px] whitespace-normal break-all">
                                                    <p className='text-base text-[#4b4d5e] break-all whitespace-normal'>Invest Days</p>
                                                </div>

                                                <div className="">
                                                    <p className='text-base text-[#4b4d5e] break-all whitespace-normal'>{plan_cycle} Days</p>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="flex flex-wrap items-center py-[5px] border-0 border-t-[1px] border-[rgba(245,245,245,0.5)] border-solid">
                                            <div className="flex-1 flex items-center">

                                                <div className="flex-1 mr-[10px] whitespace-normal break-all">
                                                    <p className='text-base text-[#4b4d5e] break-all whitespace-normal'>Day Income</p>
                                                </div>

                                                <div className="">
                                                    <p className='text-base text-[#4b4d5e] break-all whitespace-normal'>
                                                        <em className=' p-0 px-[2px] border-0 text-base font-light not-italic leading-none '>₹</em>

                                                        {plan_daily_earning.toFixed(2)}</p>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="flex flex-wrap items-center py-[5px] border-0 border-t-[1px] border-[rgba(245,245,245,0.5)] border-solid">
                                            <div className="flex-1 flex items-center">

                                                <div className="flex-1 mr-[10px] whitespace-normal break-all">
                                                    <p className='text-base text-[#4b4d5e] break-all whitespace-normal'>Total Revenue</p>
                                                </div>

                                                <div className="">
                                                    <p className='text-base text-[#4b4d5e] break-all whitespace-normal'>
                                                        <em className=' p-0 px-[2px] border-0 text-base font-light not-italic leading-none '>₹</em>

                                                        {(plan_cycle * plan_daily_earning).toFixed(2)}</p>
                                                </div>

                                            </div>
                                        </div>

                                    </div>

                                    <div className="my-5 p-0 overflow-hidden relative bg-[rgb(246,246,246)] backdrop-blur-[5px] rounded-[7px] flex flex-wrap items-center">

                                        <div className="flex flex-wrap justify-center items-center rounded-full text-white text-[30px] w-10 h-10 bg-[#818393] font-bold" onClick={() => setQuantity(quantity - 1)}>
                                            <AiOutlineMinus />
                                        </div>

                                        <input type="number" name='setQuantity' value={quantity} maxLength={10} size={10} className='flex-1 bg-transparent outline-none shadow-0 border-0 select-text appearance-none px-[5px] py-[10px] leading-[50px] h-[50px] w-full font-bold text-center text-[26px] text-[#4b4d5e]'
                                            onChange={(e) => { setQuantity(Number(e.target.value)) }}
                                        />

                                        <div className="flex flex-wrap justify-center items-center rounded-full text-white text-[30px] w-10 h-10 bg-[#3468a3] font-bold" onClick={() => { product_type === 1 ? toaster('quantity can only be one for this plan') : setQuantity(quantity + 1) }}>
                                            <AiOutlinePlus />
                                        </div>

                                    </div>

                                </div>

                                <div className="mb-[10px]">

                                    <div className="flex flex-wrap items-center py-[5px] border-0 border-[rgba(245,245,245,0.5)] border-solid">
                                        <div className="flex-1 flex items-center">

                                            <div className="flex-1 mr-[10px] whitespace-normal break-all">
                                                <p className='text-base text-[#4b4d5e] break-all whitespace-normal'>Buying Quantity</p>
                                            </div>

                                            <div className="">
                                                <p className='text-base text-[#4b4d5e] break-all whitespace-normal'>
                                                    <em className=' p-0 px-[2px] border-0 text-base font-light not-italic leading-none '>₹</em>
                                                    {quantity}</p>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="flex flex-wrap items-center py-[5px] border-0 border-t-[1px] border-[rgba(245,245,245,0.5)] border-solid">
                                        <div className="flex-1 flex items-center">

                                            <div className="flex-1 mr-[10px] whitespace-normal break-all">
                                                <p className='text-base text-[#4b4d5e] break-all whitespace-normal'>Actually paid</p>
                                            </div>

                                            <div className="">
                                                <p className='text-[22px] font-bold text-[#0aa496] break-all whitespace-normal'>
                                                    <em className=' p-0 px-[2px] border-0 text-base font-light not-italic align-top leading-none '>₹</em>

                                                    {quantity * plan_amount.toFixed(2)}</p>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="mt-[10px] p-[10px] bg-[#f8f8f8] borderr-0 flex flex-wrap items-center rounded-[15px]  ">
                                        <p className='flex-1 mr-[10px] text-[#4b4d5e] text-base'>Balance</p>
                                        <p className=' text-[#4b4d5e] text-base'>
                                            <em className=' p-0 px-[2px] border-0 text-base font-light not-italic leading-none '>₹</em>

                                            {userDetails?.recharge_amount?.toFixed(2)}
                                        </p>
                                    </div>

                                </div>

                                <div className="mb-[10px] w-full flex flex-wrap items-stretch">

                                    <div onClick={() => setpop(!pop)} className="bg-[#818393] text-center flex-1 h-[45px] leading-[45px] px-5 text-base text-white block rounded-[500px] transition-all active:translate-y-1 duration-500 overflow-hidden relative  ">
                                        Cancel
                                    </div>

                                    <div onClick={handelInvest} className="bg-[#0aa496] flex-[3] text-center ml-[10px] h-[45px] leading-[45px] px-5 text-base text-white block rounded-[500px] transition-all active:translate-y-1 duration-500 overflow-hidden relative  ">
                                        Invest
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            }



            <div className="w-1/2 p-[5px]">
                <div className="shadow-[0_-3px_30px_1px_rgba(80,35,0,0.1)] p-[10px] bg-white backdrop-blur-sm relative rounded-[7px] ">

                    <div className="mb-[10px] overflow-hidden bg-center bg-no-repeat bg-[length:90%_90%] cardBg bg-[#fcfcfc] rounded-[3px]">
                        <img src={product_image} alt="" className={`w-full `} />
                    </div>

                    <div className="flex justify-between items-center">
                        <div className="">
                            <p className='text-xs md:text-sm text-[#4b4d5e] break-all whitespace-normal'>
                                <RiVipLine size={26} className={`text-[black] font-light `} />
                            </p>
                        </div>
                        <h2 className='text-xs md:text-xl'>Container Products</h2>
                    </div>

                    <div className="mb-[10px]">
                        <div className="">

                            <div className="flex flex-wrap items-center py-[5px] border-0 border-t-[1px] border-[rgba(245,245,245,0.5)] border-solid">
                                <div className="flex-1 flex items-center">

                                    <div className="flex-1 mr-[10px] whitespace-normal break-all">
                                        <p className='text-xs md:text-sm text-[#4b4d5e] break-all whitespace-normal'>Day Income:</p>
                                    </div>

                                    <div className="">
                                        <p className='text-xs md:text-sm text-[#4b4d5e] break-all whitespace-normal'>
                                            <em className=' p-0 px-[2px] border-0 text-xs md:text-sm font-light not-italic leading-none '>₹</em>

                                            {plan_daily_earning.toFixed(2)}</p>
                                    </div>

                                </div>
                            </div>

                            <div className="flex flex-wrap items-center py-[5px] border-0 border-t-[1px] border-[rgba(245,245,245,0.5)] border-solid">
                                <div className="flex-1 flex items-center">

                                    <div className="flex-1 mr-[10px] whitespace-normal break-all">
                                        <p className='text-xs md:text-sm text-[#4b4d5e] break-all whitespace-normal'>IncomeDays :</p>
                                    </div>

                                    <div className="">
                                        <p className='text-xs md:text-sm text-[#4b4d5e] break-all whitespace-normal'>
                                            {/* <em className=' p-0 px-[2px] border-0 text-xs md:text-sm font-light not-italic leading-none '>₹</em> */}

                                            {plan_cycle}</p>
                                    </div>

                                </div>
                            </div>

                            <div className="flex flex-wrap items-center py-[5px] border-0 border-t-[1px] border-[rgba(245,245,245,0.5)] border-solid">
                                <div className="flex-1 flex items-center">

                                    <div className="flex-1 mr-[10px] whitespace-normal break-all">
                                        <p className='text-xs md:text-sm text-[#4b4d5e] break-all whitespace-normal'>Revenue</p>
                                    </div>

                                    <div className="">
                                        <p className='text-xs md:text-sm text-[#4b4d5e] break-all whitespace-normal'>
                                            <em className=' p-0 px-[2px] border-0 text-xs md:text-sm font-light not-italic leading-none '>₹</em>

                                            {(plan_cycle * plan_daily_earning).toFixed(2)}</p>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="flex items-center justify-between">

                        <div className="text-[black] text-lg font-bold">
                            <em className=' p-0 px-[2px] border-0  font-light not-italic leading-none '>₹</em>
                            {plan_amount.toFixed(2)}
                        </div>

                        {/* {active !== false ?
                            <div className="text-[rgba(75,169,88,0.9)] py-[5px] justify-end flex" onClick={handelClick}>
                                <p className='font-bold text-lg flex items-center'>
                                    Invest now
                                    <BiRightArrowAlt size={20} />
                                </p>
                            </div>
                            :
                            <div className="text-[rgba(204,204,204,0.9)] py-[5px] justify-end flex">
                                <p className='font-bold text-lg flex items-center'>
                                    Stop selling
                                </p>
                            </div>
                        } */}
                        <div onClick={handelClick} className="w-[10vw] max-w-md max-h-md h-[10vw] bg-[#265eac] rounded-full font-bold flex justify-center items-center text-white">
                            <BsArrowUpRight size={20} />

                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default ProductCard