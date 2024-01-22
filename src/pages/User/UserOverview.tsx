import React from "react";
import DisplayCard from "../../components/commons/DisplayCard";
import Table from "../../components/commons/Table";
import { GiPayMoney } from "react-icons/gi";
import { TbCurrencyNaira } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import {PiTelevisionSimple} from "react-icons/pi"
import { RiLightbulbFlashFill } from "react-icons/ri";
import { BiFootball } from "react-icons/bi";
import { TbMobiledata } from "react-icons/tb";
import { BsFillPhoneFill } from "react-icons/bs";

const UserOverview:React.FC = () => {
	return (
		<div>
			<div className='flex gap-8 flex-wrap '>
				<DisplayCard title='Wallet Balance' amount={"134,000"} icon={<TbCurrencyNaira/>} />
				<DisplayCard title='Total Savings' amount={"74,000"} icon={<GiPayMoney/>}  />
				<DisplayCard title='Total Credit Score' amount={"4,000"} icon=""  />
			</div>
            <div className="mt-8">
                <div className='flex-1 bg-white h-[150px] rounded-[10px] p-5 shadow-shadow'>
                    <div className="flex justify-between">
                        <p className="font-bold">Pay Bills</p>
                        <p className="font-bold text-[#084A5F]">View More</p>
                    </div>
                    <div className="mt-4 flex gap-16 justify-center">
                        <div className="flex flex-col items-center justify-center">
                            
                            <div className=" h-[52px] w-[52px] rounded-full bg-[#084b5f] flex items-center justify-center text-white text-[35px]  "> <AiOutlinePlus/></div>
                            <p className="font-bold">Add Money</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <div className=" h-[52px] w-[52px] rounded-full bg-[green] flex items-center justify-center text-[35px] text-white "> 
                            <BsFillPhoneFill/>
                            </div>
                            <p className="font-bold">Airtime</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <div className=" h-[52px] w-[52px] rounded-full bg-[purple] flex items-center justify-center text-white text-[35px] "> <TbMobiledata/></div>
                            <p className="font-bold">Data</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <div className=" h-[52px] w-[52px] rounded-full bg-[#d1b202] flex items-center justify-center text-[35px] text-white ">
                                <BiFootball/>
                            </div>
                            <p className="font-bold">Betting</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <div className=" h-[52px] w-[52px] rounded-full bg-[#1ea3d7] flex items-center justify-center text-white text-[35px] "><PiTelevisionSimple/></div>
                            <p className="font-bold">Cable TV</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <div className=" h-[52px] w-[52px] rounded-full bg-[red] flex items-center justify-center text-[35px] text-white  "> <RiLightbulbFlashFill/></div>
                            <p className="font-bold">Electricity</p>
                        </div>
                    </div>
                </div>
            </div>

			<div className='flex gap-8 flex-wrap mt-8'>
				<div className='flex-1 bg-white h-[300px] rounded-[10px] p-5 shadow-shadow font-bold'>Revenue Flow</div>
				<div className='w-[300px] h-[300px] bg-white rounded-[10px] shadow-shadow'></div>
			</div>

			<div className='flex-1 mt-8 bg-white min-h-[300px] mb-10 rounded-[10px] p-5 shadow-shadow font-bold'>
				<div className="font-bold">Transaction History</div>
				<div>
					<Table  />
				</div>
			</div>
		</div>
	);
};

export default UserOverview;
