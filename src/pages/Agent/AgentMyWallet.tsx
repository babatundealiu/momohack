import React from "react";
import { AiFillEye } from "react-icons/ai";
import PayBil from "../../components/Paybil/PayBil";
import Table from "../../components/commons/Table";
import {
	useGetUserDataQuery,
} from "../../utils/apiSlice";
import { useSelector, useDispatch } from "react-redux";
import { BsEyeSlashFill } from "react-icons/bs";
import { toggleShowAmount } from "../../services/Reducers";
import ModalComp from "../../components/commons/Modal";

const AgentMyWallet:React.FC = () => {
	const dispatch = useDispatch();
	const readUser = useSelector(
		(state: any) => state?.persistedReducer?.currentUser,
	);

	const { data } = useGetUserDataQuery(readUser?.id);
	const readAmount = useSelector(
		(state: any) => state.persistedReducer?.showAmount,
	);

	
	return (
		<div>
			<div className='flex gap-10 flex-wrap '>
				<div className='flex-1 bg-white rounded-[10px] p-5 shadow-shadow'>
					<div className='flex items-center justify-between'>
						<div className='flex'>
							<div className='font-bold text-[20px] text-black mr-2'>
								Wallet Balance
							</div>
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
							#{data?.data?.wallet?.balance}
						</div>
					)}

					<div className='text-black mt-4 text-opacity-60 text-xs font-normal '>
						As at 6th October 2023{" "}
					</div>

					<ModalComp type='fundWalletAgent' />
				</div>
				<div className='w-[400px]  bg-white rounded-[10px] shadow-shadow'></div>
			</div>
			<div className='mt-10 sm:overflow-x-scroll'>
				<PayBil />
			</div>

			<div className='flex-1 bg-white h-[300px] mt-10 rounded-[10px] p-5 shadow-shadow'>
				Revenue
			</div>

			<div
				className='flex-1 mt-10 bg-white min-h-[300px] mb-10 rounded-[10px] p-5 
shadow-shadow'>
				<div>Transaction History</div>
				<div>
					<Table />
				</div>
			</div>
		</div>
	);
};

export default AgentMyWallet;
