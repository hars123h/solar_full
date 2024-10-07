import React, { useContext, useEffect, useState } from 'react'
import { LiaAngleLeftSolid } from 'react-icons/lia'
import { Link, useNavigate } from 'react-router-dom'
import { ContextApi } from '../App';
import chip from '../images/Chip.svg'
import BASE_URL from '../api_url';
import axios from 'axios';

const Widthdrawl = () => {

    const navigate = useNavigate();


    const { userDetails, setLoading, setUserDetails, getUserDetails, user, toaster, amounts, setAmounsts } = useContext(ContextApi);

    // console.log(amounts);

    // const [bank_details, setBank_details] = useState(
    //     {
    //         fullName: '',
    //         bankAccount: '',
    //         ifsc: '',
    //     }
    // )
    const [bank_details, setBank_details] = useState(userDetails?.bank_details)

    const [deposit, setDeposit] = useState()
    const [wpwd, setWpwd] = useState()
    const [wpwd2, setWpwd2] = useState(localStorage.getItem('wpwd'))
    const [nextBtn, setnextBtn] = useState(false)

    const date = new Date()
    date.setHours(0, 0, 0, 0)

    const withdrawDate = new Date(userDetails?.lastWithdrawal)
    withdrawDate.setHours(0, 0, 0, 0)

    const isBetween = () => {
        var startTime = '10:00:00';
        var endTime = '17:00:00';

        var currentDate = new Date()

        var startDate = new Date(currentDate.getTime());
        startDate.setHours(startTime.split(":")[0]);
        startDate.setMinutes(startTime.split(":")[1]);
        startDate.setSeconds(startTime.split(":")[2]);

        var endDate = new Date(currentDate.getTime());
        endDate.setHours(endTime.split(":")[0]);
        endDate.setMinutes(endTime.split(":")[1]);
        endDate.setSeconds(endTime.split(":")[2]);


        var valid = startDate < currentDate && endDate > currentDate;
        //console.log(valid);
        return valid;
    }

    const handleWithdrawal = async () => {

        setnextBtn(true)

        if (Number(deposit) === false || Number(deposit) <= 0) {
            toaster('Enter a valid number');

            return;
        }

        if ((Number(deposit)) < Number(amounts.mwamount)) {
            //console.log((Number(deposit)+Number(amounts.withdrawal_fee)), Number(amounts.mwamount));
            toaster(`Amount should be greater than ${amounts.mwamount}`);


            //console.log(deposit, amounts.amount);
            return;
        }

        if (withdrawDate.toDateString() === date.toDateString()) {
            toaster('you can withdraw once in a day.')

            return
        }

        if ((Number(deposit) > 50000)) {
            toaster('Amount should not be greatr than Rs 50,000');

            return;
        }

        if (((Number(deposit)) > Number(userDetails.balance))) {
            toaster('You dont have enough balance');

            return;
        }
        //&& otp === otpfield
        if (userDetails.wpwd === wpwd) {
            try {
                //const docRef1 = 
                var temp_details = bank_details;
                delete temp_details._id;

                setLoading(true)

                await axios.post(`${BASE_URL}/place_withdrawal`, {
                    withdrawalAmount: (Number(deposit)),
                    ...temp_details,
                    afterDeduction: (Number(deposit) - (Number(amounts.withdrawal_fee) * Number(deposit) / 100)),
                    user_id: localStorage.getItem('uid'),
                    time: new Date(),
                    balance: userDetails.balance,
                    // status: 'pending'
                }).then(() => {
                    setLoading(false)
                    toaster('Withdrawal request placed successfully!');
                    setTimeout(() => {
                        navigate('/widthdrawlrecords')
                    }, 3000);
                }).catch(e => {
                    setLoading(false)
                    toaster("some error occured")

                    console.log(e);
                })

            } catch (e) {
                setLoading(false)
                toaster('error adding document')

                console.error("Error adding document: ", e);

            }
        } else {
            setLoading(false)
            toaster('Trade Password is incorrect');

            //console.log(wpassword, loc.state.withdrawalPassword);
        }

    }

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

    useEffect(() => {

        if (wpwd2 === 'undefined') {
            toaster('Set Trade Password')
            setTimeout(() => {
                navigate('/changewidthdrawlpassword')
            }, 3000);
        }

        else if (userDetails?.bank_details.bankAccount.length === 0) {
            toaster("Add bank details first")
            setTimeout(() => {
                navigate('/bankcardadd')
            }, 3000);
        }
    }, [])


    // console.log(bank_details,'withdrawl');


    // console.log(userDetails);




    return (
        <>

            <section className="withdraw-page flex flex-col">
                <div className="withdraw-page-content flex-1">
                    <div className="input-amount">
                        <div className="text-center">
                            <div className="title">Withdraw</div>
                            <div className="withdrawBalance">Withdraw Balance {(Number(userDetails?.balance)).toFixed(2)}
                            </div>
                        </div>
                        <div className="flex items-center input-amount-content">
                            ₹
                            <input
                                placeholder="0"
                                type="number"
                                style={{ width: '100%' }}
                                onChange={e => setDeposit(e.target.value)}

                            />
                        </div>
                    </div>
                    <div className="trade-password relative">
                        <div className="label absolute">Trade Password </div>
                        <input
                            type="password"
                            placeholder="Please enter your tradePin PIN"
                            style={{ width: '100%' }}
                            onChange={e => setWpwd(e.target.value)}

                        />
                    </div>
                    {/* <div className="select-bank">
                        <div className="title">Select receiving bank card</div>
                        <div role="radiogroup" className="select-bank-content van-radio-group">
                            {userDetails?.bank_details?.fullName &&
                                <div className="">
                                    <input type='radio' className='' />{userDetails?.bank_details?.bankAccount} ({userDetails?.bank_details?.fullName})
                                </div>
                            }
                        </div>
                    </div> */}
                    <div className="withdraw-page-content-tips mt-5">
                        <div className="text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="61" height="60" viewBox="0 0 61 60" fill="none" className='inline-block'>
                                <path d="M30.5 3.75C16.0026 3.75 4.25 15.5026 4.25 30C4.25 44.4975 16.0025 56.25 30.5 56.25C44.9975 56.25 56.75 44.4975 56.75 30C56.75 15.5026 44.9975 3.75 30.5 3.75ZM30.5 52.5C18.0736 52.5 8 42.4264 8 30C8 17.5736 18.0736 7.5 30.5 7.5C42.9264 7.5 53 17.5736 53 30C53 42.4264 42.9264 52.5 30.5 52.5Z" fill="#FF8F0C"></path>
                                <path d="M26.75 43.125C26.75 44.1196 27.1451 45.0734 27.8484 45.7766C28.5516 46.4799 29.5054 46.875 30.5 46.875C31.4946 46.875 32.4484 46.4799 33.1516 45.7766C33.8549 45.0734 34.25 44.1196 34.25 43.125C34.25 42.1304 33.8549 41.1766 33.1516 40.4734C32.4484 39.7701 31.4946 39.375 30.5 39.375C29.5054 39.375 28.5516 39.7701 27.8484 40.4734C27.1451 41.1766 26.75 42.1304 26.75 43.125Z" fill="#FF8F0C"></path>
                                <path d="M30.5 13.125C27.6523 13.125 25.3438 15.4335 25.3438 18.2812C25.3438 18.4393 25.3437 18.75 25.5788 19.8246L28.625 33.75C28.625 34.7855 29.4645 35.625 30.5 35.625C31.5355 35.625 32.375 34.7855 32.375 33.75L35.4212 19.8246C35.6562 18.75 35.6562 18.4393 35.6562 18.2812C35.6562 15.4335 33.3478 13.125 30.5 13.125Z" fill="#FF8F0C"></path>
                            </svg>
                            <div className="withdraw-page-content-tips-title">Withdraw Instructions</div>
                        </div>
                        <ul>
                            <li>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                                        <circle cx="3" cy="3" r="3" fill="#FF8F0C"></circle>
                                    </svg>
                                </span>The daily withdrawal time is from 10:00:00 to 17:00:00
                            </li>
                            <li>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                                        <circle cx="3" cy="3" r="3" fill="#FF8F0C"></circle>
                                    </svg>
                                </span>
                                The amount of a single withdrawal is 200-50000,
                                only multiples of 100
                            </li>
                            <li>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                                        <circle cx="3" cy="3" r="3" fill="#FF8F0C"></circle>
                                    </svg>
                                </span>
                                10% of the withdrawal amount will be charged as tax for each withdrawal
                            </li>
                            <li>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                                        <circle cx="3" cy="3" r="3" fill="#FF8F0C"></circle>
                                    </svg>
                                </span>
                                In order to facilitate financial settlement, you can only apply for cash withdrawal 1 times a day
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="withdraw-page-bottom fixed w-full">
                    <div className="flex">
                        <Link to={'/home'} className="close flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M5.705 16.885C5.31564 17.2744 5.31564 17.9056 5.705 18.295C6.09436 18.6844 6.72564 18.6844 7.115 18.295L12 13.41L16.885 18.295C17.2744 18.6844 17.9056 18.6844 18.295 18.295C18.6844 17.9056 18.6844 17.2744 18.295 16.885L13.41 12L18.295 7.115C18.6844 6.72564 18.6844 6.09436 18.295 5.705C17.9056 5.31564 17.2744 5.31564 16.885 5.705L12 10.59L7.115 5.705C6.72564 5.31564 6.09436 5.31564 5.705 5.705C5.31564 6.09436 5.31564 6.72564 5.705 7.115L10.59 12L5.705 16.885Z" fill="black"></path>
                            </svg>
                        </Link>
                        {isBetween() ?
                            <button onClick={() => { setnextBtn(true); handleWithdrawal() }} disabled={nextBtn} data-v-0df625cb="" type="primary" className="button flex items-center justify-center button-primary default w-full">Submit</button>
                            :
                            <button onClick={() => toaster('The daily withdrawal time is from 10:00:00 to 20:00:00')} disabled={nextBtn} data-v-0df625cb="" type="primary" className="button flex items-center justify-center button-primary default w-full">Submit</button>
                        }
                    </div>
                </div>
            </section>

        </>
    )
}

export default Widthdrawl