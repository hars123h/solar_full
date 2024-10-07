import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ContextApi } from '../App';
import axios from 'axios';
import BASE_URL from '../api_url';
import CopyToClipboard from 'react-copy-to-clipboard';

const Myteams = () => {

    const { userDetails, setUserDetails, user, toaster, vipimg } = useContext(ContextApi);


    const [lvl1, setLvl1] = useState([])
    const [lvl2, setLvl2] = useState([])
    const [lvl3, setLvl3] = useState([])
    const [toogle, setToogle] = useState('lvl1')

    const getUserDetails = async () => {
        // const details = await axios.post(`${BASE_URL}/get_user`, { user_id: localStorage.getItem('uid') }).then(({ data }) => data);
        await axios.post(`${BASE_URL}/lvl1`, { user_id: localStorage.getItem('uid') }).then(({ data }) => {
            setLvl1(data.level1);

        });
        await axios.post(`${BASE_URL}/lvl2`, { user_id: localStorage.getItem('uid') }).then(({ data }) => {
            setLvl2(data.level2);

        });
        await axios.post(`${BASE_URL}/lvl3`, { user_id: localStorage.getItem('uid') }).then(({ data }) => {
            setLvl3(data.level3);

        });

        // setUserDetails(details);
    }

    useEffect(() => {
        getUserDetails();

    }, [])

    const handelTooglle = (name) => {
        setToogle(name)
    }

    // console.log(typeof userDetails);


    const origin = window.location.origin



    return (
        <>
            <section data-v-d8c3c738="" className="team-page flex flex-col">
                <div data-v-d8c3c738="">
                    <div className="van-sticky">
                        <div data-v-d8c3c738="" className="team-page-header">
                            <div data-v-d8c3c738="" className="flex items-center justify-center relative">
                                <Link to={'/home'}>
                                    <svg data-v-d8c3c738="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="icon absolute">
                                        <path data-v-d8c3c738="" d="M9.9688 11.5347L9.96878 11.5347C9.84576 11.6555 9.74774 11.7993 9.68031 11.9579C9.61287 12.1165 9.57735 12.2869 9.57576 12.4593C9.57417 12.6316 9.60655 12.8026 9.67105 12.9625C9.73544 13.1221 9.83059 13.2674 9.95106 13.3903L9.96945 13.4087L9.97009 13.4093L16.3048 19.6299L16.3048 19.6299L16.3069 19.632C16.4708 19.7978 16.5628 20.0214 16.5632 20.2545C16.5635 20.4876 16.4722 20.7115 16.3088 20.8778C16.1455 21.0441 15.9233 21.1394 15.6902 21.1432C15.4572 21.1471 15.232 21.059 15.0632 20.8982L15.0632 20.8982L15.0611 20.8962L8.72467 14.6743L8.72425 14.6739L8.68666 14.6367L8.68665 14.6368L8.68451 14.6346C8.4004 14.3452 8.17607 14.0028 8.02432 13.6267C7.87258 13.2507 7.7964 12.8484 7.80013 12.443C7.80386 12.0375 7.88743 11.6367 8.04607 11.2635C8.20471 10.8903 8.4353 10.552 8.72468 10.268C8.72469 10.268 8.72469 10.268 8.7247 10.268L15.0616 4.04657L15.0616 4.04655L15.0637 4.04453C15.2324 3.88369 15.4576 3.79567 15.6907 3.79949C15.9237 3.80332 16.1459 3.89867 16.3093 4.06496C16.4726 4.23125 16.564 4.45513 16.5636 4.68822C16.5633 4.92131 16.4712 5.1449 16.3074 5.31069L16.2487 5.37012H16.2465L9.9688 11.5347Z" fill="white" stroke="white" strokeWidth="0.4"></path>
                                    </svg>
                                </Link>
                                <div data-v-d8c3c738="" className="text-center bold flex header-title">
                                    My Team
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-v-d8c3c738="" className="team-page-content flex-1 mb-20 text-gray-500">
                    <div data-v-d8c3c738="" className="team-page-content-tabs">
                        <div onClick={() => handelTooglle('lvl1')} data-v-d8c3c738="" data-key="0" className={`${toogle === 'lvl1' && 'active'} text-gray-300`}>
                            First Level
                        </div>
                        <div onClick={() => handelTooglle('lvl2')} data-v-d8c3c738="" data-key="1" className={`${toogle === 'lvl2' && 'active'} text-gray-300`}>
                            Level 2
                        </div>
                        <div onClick={() => handelTooglle('lvl3')} data-v-d8c3c738="" data-key="2" className={`${toogle === 'lvl3' && 'active'} text-gray-300`}>
                            Level 3
                        </div>
                    </div>
                    <div data-v-d8c3c738="" className="team-page-content-details left ">
                        <div data-v-d8c3c738="" className="statistics flex items-center justify-between text-gray-300">
                            <div data-v-d8c3c738="" className="flex items-center">
                                <div data-v-d8c3c738="" className="label">
                                    Quantity
                                </div>
                                <div data-v-d8c3c738="" className="value">
                                    {toogle === 'lvl1' && userDetails?.directMember?.length}
                                    {toogle === 'lvl2' && userDetails?.indirectMember?.length}
                                    {toogle === 'lvl3' && userDetails?.in_indirectMember?.length}
                                </div>
                            </div>
                            <div data-v-d8c3c738="" className="flex items-center">
                                <div data-v-d8c3c738="" className="label">
                                    Total Gains
                                </div>
                                <div data-v-d8c3c738="" className="value">
                                    ₹{toogle === 'lvl1' && userDetails?.directRecharge?.length?.toFixed(2)}
                                    {toogle === 'lvl2' && userDetails?.indirectRecharge?.length?.toFixed(2)}
                                    {toogle === 'lvl3' && userDetails?.in_indirectRecharge?.length?.toFixed(2)}
                                </div>
                            </div>
                        </div>
                        <div data-v-d8c3c738="" role="separator" className="van-divider van-divider--hairline"></div>
                        <div data-v-d8c3c738="" className="content">

                            {toogle === 'lvl1' &&

                                lvl1.map(element =>
                                    <div data-v-d8c3c738="" className={`flex items-center justify-between content-item ${element?.plans_purchased?.length > 0 && 'active'}`}>
                                        <div data-v-d8c3c738="">
                                            <div data-v-d8c3c738="">
                                                <span data-v-d8c3c738="">ID:</span>
                                                <span data-v-d8c3c738="" className="value">{element?.mobno}</span>
                                            </div> <div data-v-d8c3c738="">
                                                <span data-v-d8c3c738="">Register Time:</span>
                                                <span data-v-d8c3c738="" className="value">{new Date(element.time).toDateString()}</span>
                                            </div>
                                        </div>
                                        <div data-v-d8c3c738="" className="status">{element?.plans_purchased?.length > 0 ? 'Active' : 'Inactive'}</div>
                                    </div>
                                )

                            }

                            {toogle === 'lvl2' &&

                                lvl2.map(element =>
                                    <div data-v-d8c3c738="" className={`flex items-center justify-between content-item ${element?.plans_purchased?.length > 0 && 'active'}`}>
                                        <div data-v-d8c3c738="">
                                            <div data-v-d8c3c738="">
                                                <span data-v-d8c3c738="">ID:</span>
                                                <span data-v-d8c3c738="" className="value">{element?.mobno}</span>
                                            </div> <div data-v-d8c3c738="">
                                                <span data-v-d8c3c738="">Register Time:</span>
                                                <span data-v-d8c3c738="" className="value">{new Date(element.time).toDateString()}</span>
                                            </div>
                                        </div>
                                        <div data-v-d8c3c738="" className="status">{element?.plans_purchased?.length > 0 ? 'Active' : 'Inactive'}</div>
                                    </div>
                                )

                            }

                            {toogle === 'lvl3' &&

                                lvl3.map(element =>
                                    <div data-v-d8c3c738="" className={`flex items-center justify-between content-item ${element?.plans_purchased?.length > 0 && 'active'}`}>
                                        <div data-v-d8c3c738="">
                                            <div data-v-d8c3c738="">
                                                <span data-v-d8c3c738="">ID:</span>
                                                <span data-v-d8c3c738="" className="value">{element?.mobno}</span>
                                            </div> <div data-v-d8c3c738="">
                                                <span data-v-d8c3c738="">Register Time:</span>
                                                <span data-v-d8c3c738="" className="value">{new Date(element.time).toDateString()}</span>
                                            </div>
                                        </div>
                                        <div data-v-d8c3c738="" className="status">{element?.plans_purchased?.length > 0 ? 'Active' : 'Inactive'}</div>
                                    </div>
                                )

                            }

                        </div>
                    </div>
                </div>
                <div data-v-d8c3c738="" className="team-page-bottom text-center fixed w-full">
                    <div data-v-d8c3c738="" id="inviteLink" className="shareLink truncate">{`${origin}/register?invitationCode=${userDetails?.user_invite}`}</div>
                    <CopyToClipboard text={`${origin}/register?invitationCode=${userDetails?.user_invite}`} onCopy={() => toaster('copy succeded')}>
                        <button data-v-0df625cb="" data-v-05d1a9d0="" type="primary" className="w-full button flex items-center justify-center button-primary default">Share Link to Invite Friends
                        </button>
                    </CopyToClipboard>
                </div>
            </section>

        </>
    )
}

export default Myteams