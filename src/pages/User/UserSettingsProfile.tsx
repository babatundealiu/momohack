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
const UserSettingsProfile = () => {
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
          <h1 className="text-black font-bold mb-6 text-[20px] ">
            Update personal Information
          </h1>
         
          <form action="">
            <div className='flex flex-col'>
            <label htmlFor="FullName"
              className="text-[rgba(18,18,18,0.70)] font-normal">
              {" "} Full Name
            </label>

            <input type="text" id="FullName"
              className=" rounded-[8px] pl-4 focus:outline-none h-[45px] bg-slate-100 mb-3 w-[550px] " />
            </div>

            <div className='flex flex-col'>
            <label htmlFor="Email"
              className="text-[rgba(18,18,18,0.70)] font-normal">
              {" "} Email
            </label>

            <input type="text" id="Email"
              className=" rounded-[8px] pl-4 outline-none h-[45px] bg-slate-100 mb-3 w-[550px] " />
            </div>

            <div className='flex flex-col'>
            <label htmlFor="Phone Number (Optional)"
              className="text-[rgba(18,18,18,0.70)] font-normal">
              {" "} Phone Number (Optional)
            </label>

            <input type="text" id="PhoneNumber"
              className=" rounded-[8px] pl-4 focus:outline-none h-[45px] w-[550px] bg-slate-100 mb-3 " />
            </div>

           <div>
           <h1 className="text-black font-bold mt-5 mb-6 text-[20px] ">
            Personal Address
          </h1>
          <div className='flex justify-between '>
         <div className=' '>
         <div className='flex flex-col'>
            <label htmlFor="Country or Region"
              className="text-[rgba(18,18,18,0.70)] font-normal">
              {" "} Country or Region
            </label>

            <input type="text" id="CountryorRegion"
              className=" rounded-[8px] pl-4 focus:outline-none h-[45px]   bg-slate-100 mb-3 " />
            </div>
            <div className='flex flex-col'>
            <label htmlFor="City"
              className="text-[rgba(18,18,18,0.70)] font-normal">
              {" "} City
            </label>

            <input type="text" id="City"
              className=" rounded-[8px] pl-4 focus:outline-none h-[45px]  bg-slate-100 mb-3 " />
            </div>
         </div>
            <div>
            <div className='flex flex-col'>
            <label htmlFor="Address"
              className="text-[rgba(18,18,18,0.70)] font-normal">
              {" "} Address
            </label>

            <input type="text" id="Address"
              className=" rounded-[8px] pl-4 focus:outline-none h-[45px]  bg-slate-100 mb-3 " />
            </div>
            <div className='flex flex-col'>
            <label htmlFor="Postal code"
              className="text-[rgba(18,18,18,0.70)] font-normal">
              {" "} Postal Code
            </label>

            <input type="text" id="PostalCode"
              className=" rounded-[8px] pl-4 focus:outline-none h-[45px]  bg-slate-100 mb-3  " />
            </div>
            </div>
          </div>
           </div>
          
            <div className="flex justify-end">
              <button className="w-[125px] h-[46PX] bg-[#22C55E] text-white rounded-[10px] mt-[10px]">
                Save Profile
              </button>
            </div>
          </form>
      </div>
    </div>
  );
}

export default UserSettingsProfile