import React from "react";
import MerchantCard from "../../components/commons/MerchantCard";
import { useSelector } from "react-redux";
import { useGetAllMerchantDataQuery } from "../../utils/apiSlice";

const AgentMerchant:React.FC = () => {
	const user = useSelector(
		(state: any) => state?.persistedReducer?.currentUser,
	);
	const { data } = useGetAllMerchantDataQuery(user?.id);

	console.log(data);
	return (
		<div
			className='bg-white min-h-[800px] mb-10 
      rounded-[10px] p-5 shadow-shadow mt-2'>
			<div className='flex items-center'>
				<input
					placeholder='Search for a Merchant'
					className='bg-gray-50 border  text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-200 text-black 
          text-opacity-40 dark:focus:ring-blue-500 mb-3'
				/>
				<div className='w-[120px] ml-2.5 m-auto h-[45px] text-white justify-center bg-green-500 rounded-[10px] flex items-center mb-3'>
					{" "}
					Search
				</div>
			</div>
			<div className='flex justify-center flex-wrap'>
				{data?.data?.length >= 1 ? (
					<>
						{data?.data?.map((props:any) => (
							<MerchantCard props = {props} />
						))}
					</>
				) : (
					<div> you don't have any merchant</div>
				)}
			</div>
		</div>
	);
};

export default AgentMerchant;
