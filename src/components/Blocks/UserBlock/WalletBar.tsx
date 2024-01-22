import React from "react";
import styled from "styled-components";
import starIcon from "../../../assets/Star2.svg";
import atm from "../../../assets/Group 255.jpg";
import { NavLink } from "react-router-dom";
const SidebarContainer = styled.div`
	/* Your sidebar styles here */
	position: fixed;
	top: 60px;
	right: 0;
	bottom: 0;
	width: 300px;
	color: black;
	z-index: 10;
	/* background-color: red; */
	padding-right: 10px;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

const Wrapper = styled.div`
	margin-top: 5px;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	text-align: center;
	width: 100%;
`;

const Cont = styled.div`
	margin-top: 25px;
	width: 100%;
`;
const Hold = styled(NavLink)``
const WalletBar: React.FC = () => {
	return (
		<SidebarContainer>
			<Wrapper>
				<Cont>
					
					<div className="">
                    
                    <div className='w-[90%] m-auto h-[40px] text-white justify-center bg-green-500 
rounded-[10px] flex items-center mb-4 cursor-pointer'><Hold to='/user-dashboard/creditscore'>
						{" "}
						View Credit Score
                        </Hold>
					</div>
                    
                    </div>
					<div className='h-[500px] w-[100%] bg-white flex-1  shadow-shadow rounded-[10px] p-3'>
						<div className='h-[150px] relative rounded-[10px] w-[100%] mb-3'>
							<img className='h-[100%] w-[100%] object-contain' src={atm} />
							<div className='absolute top-16 text-white pl-3'>
								<div className=" h-[24.30px]   text-white text-[20px] font-normal font-['Open Sans']">
									1234345735686484456
								</div>
								<div className=" h-[11.34px] text-left text-white text-[10px] font-semibold font-['Open Sans']">
									Expires 07/28
								</div>
								<div className="  text-left text-white text-[12px] font-bold font-['Open Sans']">
									Muomaife Frederick David
								</div>
							</div>
						</div>
						<div className='flex justify-start flex-col items-start'>
							<h3 className='font-bold'>Quick Transfer</h3>

							<select
								id='countries'
								className='bg-gray-50 border border-gray-100  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 text-black text-opacity-40 dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3'>
								<option selected>Choose a Bank</option>
								<option value='US'>Access</option>
								<option value='CA'>Opay</option>
								<option value='FR'>Palmpay</option>
								<option value='DE'>GTB</option>
							</select>
							<input
								placeholder='Account Number'
								className='bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 text-black text-opacity-40 dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-3'
							/>

							<div className='flex'>
								<img src={starIcon} />
								<div className="text-green-500 text-xs ml-3 font-bold font-['Open Sans']">
									Account Name
								</div>
							</div>

							<input
								placeholder='Amount'
								className='bg-gray-50 border border-gray-300  text-sm rounded-lg 
focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  
dark:border-gray-600 dark:placeholder-gray-400 text-black 
text-opacity-40 dark:focus:ring-blue-500 dark:focus:border-blue-500 
mb-3 mt-3'
							/>
							<input
								placeholder='Description'
								className='bg-gray-50 border border-gray-300  text-sm rounded-lg 
focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  
dark:border-gray-600 dark:placeholder-gray-400 text-black 
text-opacity-40 dark:focus:ring-blue-500 dark:focus:border-blue-500 
mb-3'
							/>
							<div
								className='w-[100%] m-auto h-[43px] text-white justify-center bg-green-500 
rounded-[10px] flex items-center mb-5'>
								{" "}
								Send Money
							</div>
						</div>
					</div>
				</Cont>
			</Wrapper>
		</SidebarContainer>
	);
};

export default WalletBar;
