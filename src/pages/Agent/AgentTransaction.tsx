import React from "react";
import Table from "../../components/commons/Table";

const AgentTransaction:React.FC = () => {
	return (
		<div
			className='flex-1 mt-2 bg-white min-h-[300px] mb-10 
rounded-[10px] p-5 shadow-shadow'>
			<div className="font-bold">Transaction History</div>
			<br />
			<div className='flex gap-3 items-center justify-between mb-3 sm:flex-wrap'>
				<div className='flex gap-3'>
					<div>
						<div>Time Range</div>
						<select
							id='countries'
							className='bg-gray-50 border border-gray-100  text-sm rounded-lg focus:ring-blue-500 
focus:border-blue-500 block w-full p-2.5  
dark:border-gray-600 dark:placeholder-gray-400 
text-black text-opacity-40 dark:focus:ring-blue-500 
dark:focus:border-blue-500 mb-3 h-[40px] '>
							<option selected>Choose a Bank</option>
							<option value='US'>Access</option>
							<option value='CA'>Opay</option>
							<option value='FR'>Palmpay</option>
							<option value='DE'>GTB</option>
						</select>
					</div>

					<div>
						<div>Reciepents</div>
						<select
							id='countries'
							className='bg-gray-50 border border-gray-100  
text-sm rounded-lg focus:ring-blue-500 
focus:border-blue-500 block w-full p-2.5  
dark:border-gray-600 dark:placeholder-gray-400 
text-black text-opacity-40 dark:focus:ring-blue-500 
dark:focus:border-blue-500 mb-3 h-[40px] '>
							<option selected>Choose a Bank</option>
							<option value='US'>Access</option>
							<option value='CA'>Opay</option>
							<option value='FR'>Palmpay</option>
							<option value='DE'>GTB</option>
						</select>
					</div>
				</div>

				<div className='flex items-center gap-3 mt-3'>
					<div className='flex items-center mb-4'>
						<input
							id='country-option-1'
							type='radio'
							name='countries'
							value='USA'
							className='w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600'
							checked
						/>
						<label
							htmlFor='country-option-1'
							className='block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
							All
						</label>
					</div>

					<div className='flex items-center mb-4'>
						<input
							id='country-option-1'
							type='radio'
							name='countries'
							value='USA'
							className='w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 
dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600'
							checked
						/>
						<label
							htmlFor='country-option-1'
							className='block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
						Recieved
						</label>
					</div>
					<div className='flex items-center mb-4'>
						<input
							id='country-option-1'
							type='radio'
							name='countries'
							value='USA'
							className='w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 
dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600'
							checked
						/>
						<label
							htmlFor='country-option-1'
							className='block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
							Sent
						</label>
					</div>
				</div>
			</div>
			<div>
				<Table />
			</div>
		</div>
	);
};

export default AgentTransaction;
