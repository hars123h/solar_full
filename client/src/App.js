import React, { createContext, useCallback, useEffect, useState } from 'react'
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Fallback from './components/Fallback';
import Invest from './components/Invest';
import Account from './components/Account';
import axios from 'axios';
import BASE_URL from './api_url';
import customHistory from './myHistory.js'
import Deposit from './components/Deposit';
import RechargeWindow from './components/RechargeWindow';
import DepositRecords from './components/DepositRecords';
import BankCard from './components/BankCard';
import BankCardAdd from './components/BankCardAdd';
import Widthdrawl from './components/Widthdrawl';
import WidthdrawlRecords from './components/WidthdrawlRecords';
import WpasswordChange from './components/WpasswordChange';
import WithdrawlPassword from './components/WithdrawlPassword';
import ChangePassword from './components/ChangePassword';
import ForgotPassword from './components/ForgotPassword';
import Invite from './components/Invite';
import Comissions from './components/Comissions';
import { getuserearn } from './utils/apis';
import Order from './components/Order';
import UpdateData from './components/UpdateData';
import Task from './components/Task';
import Vip from './components/Vip';
import v0 from './images/v0.png'
import v01 from './images/v01.png'
import v1 from './images/v1.png'
import v2 from './images/v2.png'
import v3 from './images/v3.png'
import v4 from './images/v4.png'
import v5 from './images/v5.png'
import v6 from './images/v6.png'
import v7 from './images/v7.png'
import v8 from './images/v8.png'
import Message from './components/Message';
import Article from './components/Article';
import Company from './components/Company';
import Myteams from './components/Myteams';
import BalanceRecord from './components/BalanceRecord';

export const ContextApi = createContext();

function App() {

  const [user, setUser] = useState(localStorage.getItem('uid'))
  const [loading, setLoading] = useState(false);
  const [toasterShow, setToasterShow] = useState(false);
  const [toasterText, setToasterText] = useState('');
  const [toasterStatus, setToasterStatus] = useState('')
  const [userDetails, setUserDetails] = useState();
  const [amounts, setAmounsts] = useState({});
  const [earning, setEarning] = useState()
  const [vipimg, setVipimg] = useState()

  const toaster = useCallback((text, status) => {
    setToasterText(text);
    setToasterShow(true);
    setToasterStatus(status);
    setTimeout(() => {
      setToasterShow(false);
      //navigate('/mine');
    }, 3000);

  }, [])


  const getUserDetails = async () => {
    await axios.post(`${BASE_URL}/get_user`, { user_id: localStorage.getItem('uid') }).then(({ data }) => {
      if (data) {
        setUserDetails(data);
        // setOriginalwpwd(data.wpwd);
        // setOriginalpwd(data.pwd);
        localStorage.setItem('user_invite', data.user_invite);
        localStorage.setItem('wpwd', data.wpwd);

        return data
      } else {
        //console.log('Data not found');
        // toaster('Please login')
      }
    }).catch(error => console.log('Some error occured', error));

    getuserearn();
  }

  const getData = async () => {

    //console.log('hello');
    const dataRes = await axios.get(`${BASE_URL}/amounts`).then(({ data }) => data);
    //console.log(dataRes);
    if (dataRes) {
      // console.log(dataRes);
      setAmounsts(dataRes);
    }

  }


  useEffect(() => {
    getData();
    // getUserDetails();
    // getuserearn();
  }, [])

  useEffect(() => {

    if (userDetails?.vipLevel === 0) {
      setVipimg(v0)
    }
    else if (userDetails?.vipLevel === 1) {
      setVipimg(v1)
    }
    else if (userDetails?.vipLevel === 2) {
      setVipimg(v2)
    }
    else if (userDetails?.vipLevel === 3) {
      setVipimg(v3)
    }
    else if (userDetails?.vipLevel === 4) {
      setVipimg(v4)
    }
    else if (userDetails?.vipLevel === 5) {
      setVipimg(v5)
    }
    else if (userDetails?.vipLevel === 6) {
      setVipimg(v6)
    }
    else if (userDetails?.vipLevel === 7) {
      setVipimg(v7)
    }
    else if (userDetails?.vipLevel === 7) {
      setVipimg(v8)
    }

  }, [getUserDetails])


  return (
    <>
      <ContextApi.Provider value={
        {
          user, setUser,
          userDetails, setUserDetails,
          loading, setLoading,
          toasterShow, setToasterShow,
          toasterText, setToasterText,
          toaster, getUserDetails,
          amounts, setAmounsts,
          earning, setEarning,
          vipimg, setVipimg
        }
      }>
        <BrowserRouter>
          {toasterShow &&
            <div className={`van-toast van-toast--middle van-toast--${toasterStatus} z-[99999]`} >
              <i className={`van-icon van-icon-${toasterStatus} van-toast__icon`}></i>
              <div className="van-toast__text">{toasterText}</div>
            </div>
          }

          {/* {loading &&
            <div className='top-0 left-0 right-0 bottom-0 p-5 z-[9999] fixed flex items-center'>
              <div className="before:content-[''] fixed top-0 left-0 right-0 bottom-0 bg-[rgba(46,46,46,0.1)] z-[1] backdrop-blur-[3px]"></div>
              <div className="bg-transparent backdrop-filter-[initial] backdrop-blur-[initial] max-w-[250px] p-5 -top-5 relative mx-auto ">
                <div className="w-[60px] mx-auto relative flex flex-wrap justify-center items-center cp-spinner cp-balls"></div>
              </div>
            </div>
          } */}

          <Routes>

            <Route path="/" element={<Fallback />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/home' element={<Home />} />
            <Route path='/products' element={<Invest />} />
            <Route path='/settings' element={<Account />} />
            <Route path='/deposit' element={<Deposit />} />
            <Route path="/recharge_window/:recharge_value" element={<RechargeWindow />} />
            <Route path='/deposit_records' element={<DepositRecords />} />
            <Route path='/commissionInfo' element={<Invite />} />
            <Route path='/vip' element={<Vip />} />
            <Route path='/investment' element={<Order />} />
            <Route path='/bankCard' element={<BankCard />} />
            <Route path='/bankCardAdd' element={<BankCardAdd />} />
            <Route path='/widthdraw' element={<Widthdrawl />} />
            <Route path='/widthdrawlrecords' element={<WidthdrawlRecords />} />
            <Route path='/changewidthdrawlpassword' element={<WpasswordChange />} />
            {/* <Route path='/widthdrawlpassword' element={<WithdrawlPassword />} /> */}
            {/* <Route path='/changepassword' element={<ChangePassword />} /> */}
            {/* <Route path='/forgotpassword' element={<ForgotPassword />} /> */}
            <Route path='/comissions' element={<Comissions />} />
            <Route path='/update' element={<UpdateData />} />
            <Route path='/tasks' element={<Task />} />
            <Route path='/message' element={<Message />} />
            {/* <Route path='/article' element={<Article />} /> */}
            <Route path='/company' element={<Company />} />
            <Route path='/team' element={<Myteams />} />
            <Route path='/balancerecord' element={<BalanceRecord />} />
          </Routes>

        </BrowserRouter>

        <ToastContainer />
      </ContextApi.Provider>

    </>
  );
}

export default App;
