
import React from 'react'
import personIcon from "../../assets/Group.svg"
import security from '../../assets/security.svg'
import conditions from '../../assets/conditions.svg'
import notification from '../../assets/Group 207.svg'
import { Link } from 'react-router-dom'



interface Iprops{
    text: string
    icon:any
}
export const InfoCard:React.FC<Iprops>= ({text,icon}) => {
    return (
      <div className="flex w-[280px] h-[50px] rounded-md mt-[10px]  items-center gap-2 bg-slate-100 cursor-pointer ">
        <div className="w-[30px] h-[30px] rounded-full bg-bgIcon flex justify-center items-center ml-[10px]">
          <img className="text-black" src={icon} alt="" />
        </div>
        <p className="text-gray-800 font-poppins text-10 font-semibold">
          {text}
        </p>
      </div>
    );
}
const UserSettingsSecurity = () => {
  return (
    <div className='min-h-[300px] pb-10 rounded-[10px] pt-5 pl-8  shadow-shadow  flex bg-white'>
      
        <div className=" h-[100%]  mr-9 flex flex-col items-center gap-3   border-gray-200"
        >
           <Link to='/user-dashboard/settingsprofile'>
        <InfoCard text="Personal Information" icon={personIcon} /></Link>
        <Link to='/user-dashboard/settingssecurity'>
        <InfoCard icon={security} text="Security" /></Link>
        
        <Link to='/user-dashboard/settingsnotification'>
        <InfoCard icon={notification} text="Notifications" /></Link>
        <Link to='/user-dashboard/settingsterms'>
        <InfoCard icon={conditions} text="Terms and conditions" /></Link>
        </div>
        <div className='border-l pl-10'>
          <div className='mb-10 mt-1'>
          <h1 className="text-black font-bold  text-[22px] ">
            Password
          </h1>
          <p className='text-gray-500 font-medium'>Check or view your password</p>
          </div>
         
          <form action="">
            

            <div className='flex flex-col'>
            <label htmlFor="OldPassword"
              className="text-gray-500 font-medium pb-2">
              {" "} Old Password
            </label>

            <input type="text" id="OldPassword"
              className=" rounded-[8px] pl-4 outline-none h-[55px] bg-slate-100 mb-3 w-[550px] " />
            </div>

            <div className='flex flex-col'>
            <label htmlFor="OldPassword"
              className="text-gray-500 font-medium pb-2">
              {" "} New Password
            </label>

            <input type="text" id="OldPassword"
            placeholder='Minimum of 8 characters'
              className=" rounded-[8px] pl-4 focus:outline-none h-[55px] w-[550px] bg-slate-100 mb-12 " />
            </div>

         
          
            <div className="flex justify-end">
              <button className=" h-[56PX] bg-[#22C55E] text-white rounded-[10px] mt-[10px] font-bold px-8">
                Save Changes
              </button>
            </div>

            <div className='flex flex-col mt-10'>
            <h1 className="text-black font-bold  text-[22px] mb-3 ">
            Change Pin
          </h1>
            <label htmlFor="OldPassword"
              className="text-gray-500 font-medium pb-2">
              {" "} Old Password
            </label>

            <input type="text" id="OldPassword"
              className=" rounded-[8px] pl-4 outline-none h-[55px] bg-slate-100 mb-3 w-[550px] " />
            </div>

            <div className='flex flex-col'>
            <label htmlFor="OldPassword"
              className="text-gray-500 font-medium pb-2">
              {" "} New Password
            </label>

            <input type="text" id="OldPassword"
            placeholder='Minimum of 8 characters'
              className=" rounded-[8px] pl-4 focus:outline-none h-[55px] w-[550px] bg-slate-100 mb-12 " />
            </div>

         
          
            <div className="flex justify-end">
              <button className=" h-[56PX] bg-[#22C55E] text-white rounded-[10px] mt-[10px] font-bold px-8">
                Save Changes
              </button>
            </div>
          </form>
      </div>
    </div>
  );
}

export default UserSettingsSecurity