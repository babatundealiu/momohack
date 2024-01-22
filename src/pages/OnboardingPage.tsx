import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const OnboardingPage: React.FC = () => {
	return (
		<div className=' sm:flex-col bg-[#FFFFFF] p-[10px] h-[700px]  flex lg:flex  items-center justify-center gap-10 sm:gap-0 '>
			<div className=''>
				<div className=' flex justify-center items-center pt-[100px] font-extrabold text-3xl pb-4'>
					<h3 className=' text-[#084A5F]'>Market</h3>
					<h3 className=' text-[#FFCB05]'>Padi</h3>
				</div>
				<div className=' flex justify-center font-semibold'>
					<p className='text-[#FFCB05]'>Duis</p>
					<p className=' text-[#084A5F] w-[350px] sm:w-[100%] text-center'>
						lobortis massa imperdiet quam. Lorem ipsum dolor sit amet,
						consectetuer adipiscing elit.
					</p>
				</div>
			</div>
			<div>
				<Link to='/signupuser'>
					<div
						className=' h-[100px] w-[400px] sm:w-[100%] border p-2 mt-12 bg-[#FFCB05] 
rounded-md flex items-center gap-1 cursor-pointer'>
						<div className=' w-[300px]'>
							<h3 className=' text-1sm font-bold text-[#084A5F]'>
								Sign Up As A User
							</h3>
							<p className=' text-xs pt-1 text-[#084A5F]'>
								Cras id dui. Quisque libero metus, condimentum nec, tempor a,
								commodo mollis, magna.
							</p>
						</div>
						<div
							className=' h-[40px] w-[40px] rounded-[50%] bg-[#084A5F] flex 
justify-center items-center'>
							<p className=' text-[#FFCB05] font-extrabold'>
								{<BsArrowRight />}
							</p>
						</div>
					</div>
				</Link>

				<Link to='/agentsignup'>
					<div
						className=' h-[80px] w-[400px] sm:w-[100%] border p-2 mt-5 bg-[#084A5F] 
rounded-md flex items-center cursor-pointer'>
						<div className=' w-[300px]'>
							<h3 className=' text-1sm font-bold text-[#FFCB05]'>
								Sign Up As An Agent
							</h3>
							<p className=' text-xs p-1 text-[#FFCB05]'>
								Cras id dui. Quisque libero metus, condimentum nec, tempor a,
								commodo mollis, magna.
							</p>
						</div>
						<div
							className=' h-[40px] w-[40px] rounded-[50%] bg-[#FFCB05] flex 
justify-center items-center'>
							<p className='text-[#084A5F] font-extrabold'>
								{<BsArrowRight />}
							</p>
						</div>
					</div>
				</Link>

				<Link to='/merchantsignup'>
					<div
						className=' h-[80px] w-[400px] sm:w-[100%] border p-2 mt-5 bg-[#22C55E] 
rounded-md flex items-center cursor-pointer'>
						<div className=' w-[300px]'>
							<h3 className=' text-1sm font-bold text-[#FFFFFF]'>
								Sign Up As A Merchant
							</h3>
							<p className=' text-xs p-1 text-[#FFFFFF]'>
								Cras id dui. Quisque libero metus, condimentum nec, tempor a,
								commodo mollis, magna.
							</p>
						</div>
						<div
							className=' h-[40px] w-[40px] rounded-[50%] bg-[#FFFFFF] flex 
justify-center items-center'>
							<p className='text-[#22C55E] font-extrabold'>
								{<BsArrowRight />}
							</p>
						</div>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default OnboardingPage;
