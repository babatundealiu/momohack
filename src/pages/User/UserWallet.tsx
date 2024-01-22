import React from 'react'
import Table from '../../components/commons/Table'
import {MdVisibilityOff} from "react-icons/md"
import {MdVisibility} from "react-icons/md"
import { AiOutlinePlus } from 'react-icons/ai'
import { TbMobiledata } from 'react-icons/tb'
import {PiTelevisionSimple} from "react-icons/pi"
import { BiFootball } from "react-icons/bi";
import { BsFillPhoneFill } from "react-icons/bs";
import { RiLightbulbFlashFill } from "react-icons/ri";

const UserWallet:React.FC = () => {
  return (
   <div>
     
    <div className='flex gap-10 flex-wrap  '>
				<div className='flex-1 bg-white min-h-[300px] rounded-[10px] p-6   shadow-shadow'>
                    <div className="flex items-center gap-2">
                        <div className='font-bold text-[25px] '><h2>Wallet Balance</h2></div>
                        <div className="text-[#084A5F]">
                        <MdVisibilityOff/>
                        </div>
                        <div className='hidden'>
                        <MdVisibility/>
                        </div>
                    </div>
                    <div className="font-bold text-[35px] text-[#084A5F] mb-4 ">
                        <h1>134,000</h1>
                    </div>
                    <div className="mb-12 text-gray-500 font-medium">
                        <p>As at 6th October 2023</p>
                    </div>
                    <div className=' h-[45px] text-white justify-center bg-green-500 rounded-[10px] flex items-center mb-2 font-bold'>
                    Add Money To Wallet
                     </div>
                </div>
				<div className='w-[320px] min-h-[300px] bg-white rounded-[10px] shadow-shadow'></div>
			</div>
            <div className="mt-8">
                <div className='flex-1 bg-white h-[150px] rounded-[10px] p-5 shadow-shadow'>
                    <div className="flex justify-between">
                        <p className="font-bold">Pay Bills</p>
                        <p className="font-bold text-[#084A5F]">View More</p>
                    </div>
                    <div className="mt-4 flex gap-16 justify-center">
                        <div className="flex flex-col items-center justify-center">
                            <div className=" h-[52px] w-[52px] rounded-full bg-[#084A5F] flex items-center justify-center text-[35px] text-white "><AiOutlinePlus/></div>
                            <p className="font-bold">Add Money</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <div className=" h-[52px] w-[52px] rounded-full bg-[green] flex items-center justify-center text-[35px] text-white">
                            <BsFillPhoneFill />
                            </div>
                            <p className="font-bold">Airtime</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <div className=" h-[52px] w-[52px] rounded-full bg-[purple] flex items-center justify-center text-white text-[35px] "><TbMobiledata/></div>
                            <p className="font-bold">Data</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <div className=" h-[52px] w-[52px] rounded-full bg-[#d1b202] flex items-center justify-center text-[35px] text-white ">
                                <BiFootball />
                            </div>
                            <p className="font-bold">Betting</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <div className=" h-[52px] w-[52px] rounded-full bg-[#1ea3d7] flex items-center justify-center text-white text-[35px] ">
                                <PiTelevisionSimple/>
                            </div>
                            <p className="font-bold">Cable TV</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <div className=" h-[52px] w-[52px] rounded-full bg-[red] flex items-center justify-center text-[35px] text-white "><RiLightbulbFlashFill/></div>
                            <p className="font-bold">Electricity</p>
                        </div>
                    </div>
                </div>
            </div>

    <div className='min-h-[300px] rounded-[10px] mt-8 p-5 shadow-shadow  bg-white'> Revenue Flow</div>
   
    <div className='flex-1 mt-8 bg-white min-h-[300px] mb-10 rounded-[10px] p-5 shadow-shadow font-bold'>
				<div className='font-bold'>Transaction History</div>
				<div>
					<Table />
				</div>
			</div>
   </div>
   
  )
}

export default UserWallet