import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import Tradmark from './Tradmark'
import hot from '../images/hot.svg'
import ProductCard from './ProductCard'
import img202 from '../images/sungrow/teamBg.png'
import img302 from '../images/301.png'
import { ContextApi } from '../App'
import s1 from '../images/tsmc/t1.jpg'
import s2 from '../images/tsmc/t2.jpg'
import s3 from '../images/tsmc/t3.jpg'
import s4 from '../images/tsmc/t4.jpg'
import s5 from '../images/tsmc/t5.jpg'
// import s6 from '../images/tsmc/t6.webp'
// import s7 from '../images/tsmc/t7.webp'


const Invest = () => {

    const navigate = useNavigate();


    const { userDetails, setUserDetails, getUserDetails, user, toaster } = useContext(ContextApi);

    const [totalEarn, setTotalEarn] = useState(0)
    const [toogle, setToogle] = useState('Super')


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

    const DateDifference = (date1, date2) => {


        //console.log(date1, date2);    
        var Difference_In_Time = date2.getTime() - date1.getTime();
        //console.log(Difference_In_Time);
        var Difference_In_Days = Math.floor(Difference_In_Time / (1000 * 3600 * 24));

        //console.log(Difference_In_Days);

        return Difference_In_Days;
    }

    useEffect(() => {


        userDetails?.plans_purchased?.forEach(element => {
            setTotalEarn(
                totalEarn + (DateDifference(new Date(element.date_purchased), new Date(element.date_till_rewarded)) * element.quantity * element.plan_daily_earning)
            )

        });

    }, [])

    const handelTooglle = (name) => {
        setToogle(name)
    }





    return (
        <>

            {/* <div className="mx-auto mb-28 bgimg">
                <div className="w-full mx-auto max-w-[800px]" >

                    <Link to={`/orders`}>
                        <div className='max-w-full min-h-[90px] mx-auto bg-[rgb(1,77,173)] invite pb-[120px] ' >

                            <div className="relative z-10 flex flex-wrap items-start pt-5 px-5 pb-[10px]">

                                <div className="flex-[3]">
                                    <p className='text-[26px] font-bold text-white leading-none' >
                                        <em className='p-0 px-[2px] border-0 text-base font-light align-top not-italic leading-none '>₹</em>
                                        {userDetails?.totalInvestment.toFixed(2)}
                                    </p>
                                    <span className=' text-white opacity-80 leading-none'>Total Investment</span>
                                </div>

                                <div className="flex-[2]">
                                    <p className='text-[26px] font-bold text-white leading-none' >
                                        <em className=' p-0 px-[2px] border-0 text-base font-light not-italic leading-none '>₹</em>
                                        {totalEarn?.toFixed(2)}
                                    </p>
                                    <span className=' text-white opacity-80 leading-none'>Bought-in</span>
                                </div>

                            </div>

                            <div className="left-0 right-0 px-5 py-[10px] absolute z-[1]"></div>

                        </div>
                    </Link>

                    <div className="relative -top-[120px] mx-auto z-[1]">


                        <div className="m-[10px]">


                            <div className="mx-auto relative overflow-hidden p-0 z[1] ">

                                <div className="swiper pt-[10px] overflow-hidden overflow-x-scroll relative w-full h-full z-[1] flex transition-transform box-content rounded-[7px] ">

                                    <div onClick={() => swiperHandel('stable')} className={`${stable} w-auto mr-[3px] px-[15px] pt-[15px] pb-5 no-underline inline-block relative flex-shrink-0 h-full transition-transform rounded-tl-[7px] rounded-tr-[7px]  `}>
                                        <p>Stable</p>
                                        {activelist === 'stable' &&
                                            <>
                                                <div className="opacity-100 block -left-10 -bottom-[5px] rotate-45 z-[1] absolute w-[50px] h-[50px] border-[10px] border-solid border-transparent border-r-white rounded-[100%] duration-300 "></div>
                                                <div className="opacity-100 block -right-10 -bottom-[5px] -rotate-45 z-[1] absolute w-[50px] h-[50px] border-[10px] border-solid border-transparent border-l-white rounded-[100%] duration-300 "></div>
                                            </>
                                        }
                                    </div>

                                    <div onClick={() => swiperHandel('welfare')} className={`${welfare} w-auto mr-[3px] px-[15px] pt-[15px] pb-5 no-underline inline-block relative flex-shrink-0 h-full transition-transform rounded-tl-[7px] rounded-tr-[7px]  `}>
                                        <p>Welfare</p>
                                        {activelist === 'welfare' &&
                                            <>
                                                <div className="opacity-100 block -left-10 -bottom-[5px] rotate-45 z-[1] absolute w-[50px] h-[50px] border-[10px] border-solid border-transparent border-r-white rounded-[100%] duration-300 "></div>
                                                <div className="opacity-100 block -right-10 -bottom-[5px] -rotate-45 z-[1] absolute w-[50px] h-[50px] border-[10px] border-solid border-transparent border-l-white rounded-[100%] duration-300 "></div>
                                            </>
                                        }
                                    </div>

                                    <div onClick={() => swiperHandel('activity')} className={`${activity} w-auto mr-[3px] px-[15px] pt-[15px] pb-5 no-underline inline-block relative flex-shrink-0 h-full transition-transform rounded-tl-[7px] rounded-tr-[7px]  `}>
                                        <img className='w-6 top-0 right-0 absolute' src={hot} alt="" />
                                        <p>Activity</p>

                                        {activelist === 'activity' &&
                                            <>
                                                <div className="opacity-100 block -left-10 -bottom-[5px] rotate-45 z-[1] absolute w-[50px] h-[50px] border-[10px] border-solid border-transparent border-r-white rounded-[100%] duration-300 "></div>
                                                <div className="opacity-100 block -right-10 -bottom-[5px] -rotate-45 z-[1] absolute w-[50px] h-[50px] border-[10px] border-solid border-transparent border-l-white rounded-[100%] duration-300 "></div>
                                            </>
                                        }

                                    </div>
                                </div>


                            </div>


                            <div className="">

                                {activelist === 'stable' &&
                                    <div className="block bg-white -top-[10px] pt-[10px] px-[5px] pb-12 relative z-[2] rounded-[7px] ">
                                        <div className="flex flex-wrap items-center justify-between">

                                            <ProductCard
                                                product_image={img202}
                                                product_type={0}
                                                plan_cycle={60}
                                                plan_amount={495}
                                                plan_daily_earning={190}
                                            />

                                            <ProductCard
                                                product_image={img202}
                                                product_type={0}
                                                plan_cycle={60}
                                                plan_amount={1930}
                                                plan_daily_earning={750}
                                            />

                                            <ProductCard
                                                product_image={img202}
                                                product_type={0}
                                                plan_cycle={60}
                                                plan_amount={3780}
                                                plan_daily_earning={1480}
                                            />

                                            <ProductCard
                                                product_image={img202}
                                                product_type={0}
                                                plan_cycle={60}
                                                plan_amount={7700}
                                                plan_daily_earning={3190}
                                            />

                                            <ProductCard
                                                product_image={img202}
                                                product_type={0}
                                                plan_cycle={60}
                                                plan_amount={20000}
                                                plan_daily_earning={8490}
                                            />

                                            <ProductCard
                                                product_image={img202}
                                                product_type={0}
                                                plan_cycle={60}
                                                plan_amount={50000}
                                                plan_daily_earning={21800}
                                            />

                                            <ProductCard
                                                product_image={img202}
                                                product_type={0}
                                                plan_cycle={60}
                                                plan_amount={100000}
                                                plan_daily_earning={45500}
                                            />

                                            <ProductCard
                                                product_image={img202}
                                                product_type={0}
                                                plan_cycle={60}
                                                plan_amount={100000}
                                                plan_daily_earning={90000}
                                            />

                                        </div>
                                    </div>

                                }

                                {activelist === 'welfare' &&
                                    <div className="block bg-white -top-[10px] pt-[10px] px-[5px] pb-12 relative z-[2] rounded-[7px] ">
                                        <div className="flex flex-wrap items-center justify-between">

                                            <ProductCard
                                                product_type={1}
                                                plan_cycle={1}
                                                plan_amount={210}
                                                plan_daily_earning={300}
                                            />

                                            <ProductCard
                                                product_type={1}
                                                plan_cycle={1}
                                                plan_amount={1700}
                                                plan_daily_earning={3000}
                                            />

                                            <ProductCard
                                                product_type={1}
                                                plan_cycle={3}
                                                plan_amount={3700}
                                                plan_daily_earning={2266}
                                            />

                                            <ProductCard
                                                product_type={1}
                                                plan_cycle={3}
                                                plan_amount={7700}
                                                plan_daily_earning={4600}
                                            />

                                            <ProductCard
                                                product_type={5}
                                                plan_cycle={3}
                                                plan_amount={30000}
                                                plan_daily_earning={21000}
                                            />

                                            <ProductCard
                                                product_type={6}
                                                plan_cycle={3}
                                                plan_amount={50000}
                                                plan_daily_earning={37500}
                                            />

                                        </div>
                                    </div>

                                }

                                {activelist === 'activity' &&
                                    <div className="block bg-white -top-[10px] pt-[10px] px-[5px] h-screen pb-12 relative z-[2] rounded-[7px] ">
                                        <div className="flex flex-wrap items-center justify-between h-3/5">

                                            <ProductCard
                                                product_type={1}
                                                product_image={img302}
                                                plan_cycle={20}
                                                plan_amount={2001}
                                                plan_daily_earning={1500.75}
                                            />

                                            <ProductCard
                                                product_type={1}
                                                product_image={img302}
                                                plan_cycle={20}
                                                plan_amount={5000}
                                                plan_daily_earning={3900}
                                            />

                                            <ProductCard
                                                product_type={1}
                                                product_image={''}
                                                plan_cycle={27}
                                                plan_amount={11500}
                                                plan_daily_earning={8970}
                                            />

                                            <ProductCard
                                                product_type={1}
                                                product_image={img302}
                                                plan_cycle={30}
                                                plan_amount={1500}
                                                plan_daily_earning={675}
                                            />

                                            <ProductCard
                                                product_type={1}
                                                product_image={img302}
                                                plan_cycle={30}
                                                plan_amount={5000}
                                                plan_daily_earning={2350}
                                            />

                                            <ProductCard
                                                product_type={1}
                                                product_image={img302}
                                                plan_cycle={30}
                                                plan_amount={10000}
                                                plan_daily_earning={5000}
                                            />

                                            <ProductCard
                                                product_type={1}
                                                product_image={img302}
                                                plan_cycle={30}
                                                plan_amount={50000}
                                                plan_daily_earning={40000}
                                            />

                                            <ProductCard
                                                product_type={1}
                                                product_image={''}
                                                plan_cycle={1}
                                                plan_amount={200}
                                                plan_daily_earning={300}
                                                active={false}
                                            />

                                            <ProductCard
                                                product_type={2}
                                                product_image={''}
                                                plan_cycle={1}
                                                plan_amount={2700}
                                                plan_daily_earning={3483}
                                                active={false}
                                            />

                                            <div className="h-[50px] relative overflow-hidden text-xs translate-z-0 mx-auto my-auto ">
                                                <div className="h-[50px] leading-[50px] text-center text-[#cfd0d9]">No more data</div>
                                            </div>

                                        </div>
                                    </div>

                                }

                            </div>

                        </div>

                    </div>
                    <div className="fixed bottom-0">
                        <Tradmark />
                    </div>

                </div>
            </div> */}

            {/* footer  */}
            {/* <Navbar /> */}

            <section data-v-d8c3c738="" className="team-page flex flex-col">
                <div data-v-d8c3c738="">
                    <div className="van-sticky">
                        <div data-v-d8c3c738="" className="team-page-header">
                            <div data-v-d8c3c738="" className="flex items-center justify-center relative">
                                {/* <Link to={'/home'}>
                                    <svg data-v-d8c3c738="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="icon absolute">
                                        <path data-v-d8c3c738="" d="M9.9688 11.5347L9.96878 11.5347C9.84576 11.6555 9.74774 11.7993 9.68031 11.9579C9.61287 12.1165 9.57735 12.2869 9.57576 12.4593C9.57417 12.6316 9.60655 12.8026 9.67105 12.9625C9.73544 13.1221 9.83059 13.2674 9.95106 13.3903L9.96945 13.4087L9.97009 13.4093L16.3048 19.6299L16.3048 19.6299L16.3069 19.632C16.4708 19.7978 16.5628 20.0214 16.5632 20.2545C16.5635 20.4876 16.4722 20.7115 16.3088 20.8778C16.1455 21.0441 15.9233 21.1394 15.6902 21.1432C15.4572 21.1471 15.232 21.059 15.0632 20.8982L15.0632 20.8982L15.0611 20.8962L8.72467 14.6743L8.72425 14.6739L8.68666 14.6367L8.68665 14.6368L8.68451 14.6346C8.4004 14.3452 8.17607 14.0028 8.02432 13.6267C7.87258 13.2507 7.7964 12.8484 7.80013 12.443C7.80386 12.0375 7.88743 11.6367 8.04607 11.2635C8.20471 10.8903 8.4353 10.552 8.72468 10.268C8.72469 10.268 8.72469 10.268 8.7247 10.268L15.0616 4.04657L15.0616 4.04655L15.0637 4.04453C15.2324 3.88369 15.4576 3.79567 15.6907 3.79949C15.9237 3.80332 16.1459 3.89867 16.3093 4.06496C16.4726 4.23125 16.564 4.45513 16.5636 4.68822C16.5633 4.92131 16.4712 5.1449 16.3074 5.31069L16.2487 5.37012H16.2465L9.9688 11.5347Z" fill="white" stroke="white" strokeWidth="0.4"></path>
                                    </svg>
                                </Link> */}
                                <div data-v-d8c3c738="" className="text-center bold flex header-title">
                                    Investable Products
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-v-d8c3c738="" className="team-page-content flex-1">
                    <div data-v-d8c3c738="" className="team-page-content-tabs text-gray-300">
                        <div onClick={() => handelTooglle('Super')} data-v-d8c3c738="" data-key="0" className={`${toogle === 'Super' && 'active'}`}>
                            Super
                        </div>
                        <div onClick={() => handelTooglle('Give Back')} data-v-d8c3c738="" data-key="1" className={`${toogle === 'Give Back' && 'active'}`}>
                            Give Back
                        </div>
                        <div onClick={() => handelTooglle('Snap Up')} data-v-d8c3c738="" data-key="2" className={`${toogle === 'Snap Up' && 'active'}`}>
                            Snap Up
                        </div>
                    </div>
                    <div data-v-d8c3c738="" className="team-page-content-details left">

                        {/* <div data-v-d8c3c738="" role="separator" className="van-divider van-divider--hairline"></div> */}
                        <div data-v-d8c3c738="" className="content flex flex-wrap">

                            {toogle === 'Super' &&


                                <>
                                    <ProductCard
                                        product_image={s1}
                                        product_type={0}
                                        plan_cycle={37}
                                        plan_amount={535}
                                        plan_daily_earning={214}
                                        product_no={1}
                                    />

                                    <ProductCard
                                        product_image={s2}
                                        product_type={0}
                                        plan_cycle={37}
                                        plan_amount={1701}
                                        plan_daily_earning={680.57}
                                        product_no={2}
                                    />

                                    <ProductCard
                                        product_image={s3}
                                        product_type={0}
                                        plan_cycle={37}
                                        plan_amount={5157}
                                        plan_daily_earning={2114.37}
                                        product_no={3}
                                    />

                                    <ProductCard
                                        product_image={s4}
                                        product_type={0}
                                        plan_cycle={37}
                                        plan_amount={11000}
                                        plan_daily_earning={4620}
                                        product_no={4}
                                    />

                                    <ProductCard
                                        product_image={s5}
                                        product_type={0}
                                        plan_cycle={37}
                                        plan_amount={21000}
                                        plan_daily_earning={9031.29}
                                        product_no={5}
                                    />

                                    <ProductCard
                                        product_image={s1}
                                        product_type={0}
                                        plan_cycle={37}
                                        plan_amount={50000}
                                        plan_daily_earning={22000}
                                        product_no={6}
                                    />

                                </>


                            }

                            {toogle === 'Give Back' &&

                                <>
                                    <ProductCard
                                        product_image={s1}
                                        product_type={1}
                                        plan_cycle={1}
                                        plan_amount={500}
                                        plan_daily_earning={700}
                                        product_no={1}
                                    />


                                    <ProductCard
                                        product_image={s5}
                                        product_type={2}
                                        plan_cycle={3}
                                        plan_amount={1701}
                                        plan_daily_earning={1020.6}
                                        product_no={2}
                                    />

                                    <ProductCard
                                        product_image={s5}
                                        product_type={2}
                                        plan_cycle={5}
                                        plan_amount={5100}
                                        plan_daily_earning={3000}
                                        product_no={2}
                                    />


                                    <ProductCard
                                        product_image={s5}
                                        product_type={2}
                                        plan_cycle={7}
                                        plan_amount={15500}
                                        plan_daily_earning={6000}
                                        product_no={2}
                                    />

                                    {/* <ProductCard
                                        product_image={s3}
                                        product_type={3}
                                        plan_cycle={3}
                                        plan_amount={5157}
                                        plan_daily_earning={3094.2}
                                        product_no={3}
                                    />

                                    <ProductCard
                                        product_image={s4}
                                        product_type={4}
                                        plan_cycle={3}
                                        plan_amount={11000}
                                        plan_daily_earning={7700}
                                        product_no={4}
                                    />

                                    <ProductCard
                                        product_image={s1}
                                        product_type={5}
                                        plan_cycle={3}
                                        plan_amount={21003}
                                        plan_daily_earning={14702.1}
                                        product_no={5}
                                    />

                                    <ProductCard
                                        product_image={s2}
                                        product_type={6}
                                        plan_cycle={3}
                                        plan_amount={50000}
                                        plan_daily_earning={40000}
                                        product_no={6}
                                    /> */}
                                </>

                            }

                            {toogle === 'Snap Up' &&

                                <>
                                    {/* <>
                                    <ProductCard
                                        product_image={s3}
                                        product_type={1}
                                        plan_cycle={3}
                                        plan_amount={930}
                                        plan_daily_earning={410}
                                        product_no={1}
                                    />

                                    <ProductCard
                                        product_image={s4}
                                        product_type={1}
                                        plan_cycle={10}
                                        plan_amount={2230}
                                        plan_daily_earning={630}
                                        product_no={2}
                                    />

                                    <ProductCard
                                        product_image={s3}
                                        product_type={1}
                                        plan_cycle={12}
                                        plan_amount={5530}
                                        plan_daily_earning={930}
                                        product_no={3}
                                    />
                                </> */}

                                    {/* <p className='text-center align-middle h-full w-full'>No Plans</p> */}
                                    <ProductCard
                                        product_image={s1}
                                        product_type={1}
                                        plan_cycle={1}
                                        plan_amount={1030}
                                        plan_daily_earning={1550}
                                        product_no={1}
                                    />

                                    <ProductCard
                                        product_image={s5}
                                        product_type={2}
                                        plan_cycle={7}
                                        plan_amount={2050}
                                        plan_daily_earning={1530}
                                        product_no={2}
                                    />

                                </>


                            }

                        </div>
                    </div>
                </div>
                <Navbar />
            </section>

        </>
    )
}

export default Invest