import React from 'react'
import {MdVisibilityOff} from "react-icons/md"
import {MdVisibility} from "react-icons/md"
import { GiCash } from 'react-icons/gi'
import { GiPiggyBank } from 'react-icons/gi'
import {GiReceiveMoney} from "react-icons/gi"


const AgentMyWallet:React.FC = () => {
  return (
   <div>
     
    <div className='flex gap-8 flex-wrap '>
				<div className='flex-1 bg-white min-h-[250px] rounded-[10px] p-6   shadow-shadow'>
                    <div className="flex items-center gap-2">
                        <div className='font-bold text-[25px] '><h2>Total Credit</h2></div>
                        <div className="text-[#084A5F] text-[20px]">
                        <MdVisibilityOff/>
                        </div>
                        <div className='hidden'>
                        <MdVisibility/>
                        </div>
                    </div>
                    <div className="font-bold text-[35px] text-[#084A5F] mb-20 ">
                        <h1>14,000</h1>
                    </div>
                    
                    <div className=' h-[45px] text-white justify-center bg-[#22C55E] rounded-[10px] flex items-center mb-2  font-bold'>
                    Get More credit
                     </div>
                </div>
				<div className='w-[320px] min-h-[250px] bg-white rounded-[10px] shadow-shadow text-center p-6'>
                    <h2 className='text-[25px] font-bold mb-5 '>Daily Rewards</h2>
                    <p className='font-semibold text-[17px] text-gray-400 mb-8'>Get a total of 6 Credit Score for every day you login to this account</p>
                    <div className=' h-[45px] text-white justify-center bg-[#22C55E] rounded-[10px] flex items-center font-bold'>
                    Get Now
                     </div>
                </div>
                
			</div>
    <div className='min-h-[300px] rounded-[10px] mt-8 pt-5 px-9 pb-5 shadow-shadow  bg-white'> 
    <div className="font-bold text-[25px] mb-5">
    Rewards
    </div>
    <div className='bg-slate-100 rounded-[10px] flex p-4 mb-5 '>
            <div className="h-[45px] w-[45px] rounded-full bg-green-600 mr-2 flex items-center justify-center text-[30px] text-white">
                <GiReceiveMoney/>
            </div>
            <div>
                <h1 className='font-bold'>Add Money to Wallet</h1>
                <p className='text-[gray]'>Add money to wallet and get 5 Credit Score</p>
            </div>
    </div>
    <div className='bg-slate-100 rounded-[10px] flex p-4 mb-5'>
            <div className="h-[45px] w-[45px] rounded-full bg-green-600 mr-2 flex items-center justify-center text-[30px] text-white">
            <GiPiggyBank/>
            </div>
            <div>
                <h1 className='font-bold'>Save Now</h1>
                <p className='text-[gray]'>Save now and get 3 Credit Score</p>
            </div>
    </div>
    <div className='bg-slate-100 rounded-[10px] flex p-4 mb-5 '>
            <div className="h-[45px] w-[45px] rounded-full bg-green-600 mr-2 flex items-center justify-center text-[30px] text-white">
                <GiCash/>
            </div>
            <div>
                <h1 className='font-bold'>Refer & Earn</h1>
                <p className='text-[gray]'>Refer and earn 600 for every person you refer</p>
            </div>
    </div>
    <div className='bg-slate-100 rounded-[10px] flex p-4 mb-5 '>
            <div className="h-[45px] w-[45px] rounded-full bg-green-600 mr-2 flex items-center justify-center text-[30px] text-white">
            <GiReceiveMoney/>
            </div>
            <div>
                <h1 className='font-bold'>Add Money to Wallet</h1>
                <p className='text-[gray]'>Add money to wallet and get 5 credit score</p>
            </div>
    </div>
    <div className='bg-slate-100 rounded-[10px] flex p-4 mb-10 '>
            <div className="h-[45px] w-[45px] rounded-full bg-green-600 mr-2 flex items-center justify-center text-[30px] text-white">
                <GiPiggyBank/>
            </div>
            <div>
                <h1 className='font-bold'>Save Now</h1>
                <p className='text-[gray] '>Save now and get 3 Credit Score</p>
            </div>
    </div>
    </div>
    
   </div>
   
  )
}

export default AgentMyWallet