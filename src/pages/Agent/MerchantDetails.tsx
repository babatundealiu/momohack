import { FaUserLarge } from "react-icons/fa6";
import Table from "../../components/commons/Table";
import { useParams } from "react-router-dom";

import { useGetMerchantDataQuery } from "../../utils/apiSlice";


const MerchantDetails = () => {
    const {id} = useParams()
		const { data } = useGetMerchantDataQuery(id);
        console.log(data);
	return (
		<div>
			<div className='flex justify-center text-center p-5 bg-[#f7f9fc]'>
				<div className='h-[380px] w-[100%] bg-[white] text-center  flex flex-col items-center rounded-[10px] '>
					<div className='h-[100px] w-[100px]  rounded-full relative text-[60px] border-[1px] border-green-500 bg-[#eeeff0] text-[lightgrey] flex justify-center items-center object-cover '>
						<FaUserLarge />
					</div>
					<br />
					<div>
						<p className='text-[25px] font-bold'>{data?.data?.fullName}</p>
					</div>

					<br />
					<div className=' w-[90%]  flex p-0'>
						<div className='h-[100%] w-[40%] bg-[white] text-left  font-medium text-[13px]'>
							<p className=''>Phone Number :</p>
							<br />
							<p className=''>Country :</p>
							<br />
							<p className=''>City :</p>
							<br />
							<p className=''>Address :</p>
							<br />
							<p className=''>Postal Code :</p>
						</div>
						<div className='h-[100%] w-[60%] bg-[white] text-left   text-[13px] font-bold'>
							<p className=''>{data?.data?.phoneNumber} </p>
							<br />
							<p className=''>Nigeria</p>
							<br />
							<p className=''>Lagos</p>
							<br />
							<p className=''>21 G1 Festac, Lagos</p>
							<br />
							<p className=''>101101</p>
						</div>
					</div>
				</div>
			</div>
			<div className='flex-1 bg-white  rounded-[10px] p-5 shadow-shadow'>
				<div className='flex justify-between '>
					<div className='flex '>
						<div>
							<div className='flex items-center'>
								<div>Total Ajo</div> :
								<div className='font-bold ml-2'>#4000</div>
							</div>
							<div className='flex items-center'>
								<div>Ajo Type</div> :<div className='font-bold ml-2'>Daily</div>
							</div>
							<div className='flex items-center'>
								<div>Fixed Saving</div> :
								<div className='font-bold ml-2'>#1000</div>
							</div>
						</div>
						<div className='ml-12'>
							<div>
								<div className='flex items-center'>
									<div>Loan Given</div> :
									<div className='font-bold ml-2'>#0</div>
								</div>
								<div className='flex items-center'>
									<div>Amount Re-paid</div> :
									<div className='font-bold ml-2'>#0</div>
								</div>
								<div className='flex items-center'>
									<div>Amount Remaining</div> :
									<div className='font-bold ml-2'>#27000</div>
								</div>
							</div>
						</div>
					</div>
					<div>
						<button
                        disabled
							className='w-[150px] m-auto h-[40px] text-white justify-center 
bg-green-500 rounded-[10px] flex items-center mb-2 cursor-pointer'>
							{" "}
							Ajo created
						</button>
					</div>
				</div>
				<br />
				<br />
				<Table />
			</div>
		</div>
	);
};

export default MerchantDetails;
