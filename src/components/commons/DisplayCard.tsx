import React from "react";
import { AiFillEye } from "react-icons/ai";
import { BsEyeSlashFill } from "react-icons/bs";
import {useSelector, useDispatch}  from 'react-redux'
import { toggleShowAmount } from "../../services/Reducers";
interface Iprops {
	title: string;
	icon?: any;
	amount: number | string;
}

const DisplayCard: React.FC<Iprops> = ({ amount, title }) => {
	const dispatch = useDispatch()
	const readAmount = useSelector((state:any)=> state.persistedReducer?.showAmount)
	return (
		<div className='w-[270px] p-[20px] md:flex-1 xl:flex-1 2xl:flex-1  lg:flex-1 sm:w-[100%] bg-white text-primary h-[90px]   rounded-[10px] shadow-shadow '>
			<div className='flex items-center justify-between'>
				<div className='flex'>
					<div className='h-[30px] w-[30px] bg-secondary rounded-[50%] mr-3'>
						<img />
					</div>
					<div className='font-bold text-[17px] text-black mr-2'>{title}</div>
				</div>
				{readAmount ? (
					<div
						onClick={() => {
							dispatch(toggleShowAmount());
						}}
						className='text-[20px] cursor-pointer'>
						<BsEyeSlashFill />
					</div>
				) : (
					<div
						onClick={() => {
							dispatch(toggleShowAmount());
						}}
						className='text-[20px] cursor-pointer'>
						<AiFillEye />
					</div>
				)}
			</div>
			{readAmount ? (
				<div className="text-cyan-900 text-2xl mt-1 font-bold font-['Open Sans']">
					******
				</div>
			) : (
				<div className="text-cyan-900 text-2xl font-bold font-['Open Sans']">
					#{amount}
				</div>
			)}
		</div>
	);
};

export default DisplayCard;
