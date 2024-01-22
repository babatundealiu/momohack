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

const UserSettingsNotification = () => {
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
      <div className='border-l'>
      <div>
         <div className='min-h-[300px] rounded-[10px] px-9 pb-5  bg-white'> 
    <div className="font-bold text-[25px] mb-5">
    Notifications
    </div>
    
    <div className='flex items-center justify-between'>
        <select
            id='notifications'
            className='bg-gray-50 border border-gray-100  text-sm rounded-lg focus:ring-blue-500 
         focus:border-blue-500 block  p-2.5  
        dark:border-gray-300 dark:placeholder-gray-400 
        text-black text-opacity-40 dark:focus:ring-blue-500             dark:focus:border-blue-500 mb-3 h-[40px] w-[200px] '>
							<option selected>All</option>
							<option value='TS'>Transfer Successful</option>
							<option value='TU'>Transfer Unsuccessful</option>
							<option value='DP'>Data Purchase</option>
							
						</select>
                        <p className=''>Mark all as read</p>
    </div>
    <div className='text-center my-2 text-gray-500 text-[14px]'>1.41pm 12-10-23</div>
    
    <div className='bg-slate-100 rounded-[10px] flex  items-center p-4 mb-5 justify-between '>
           <div className='  flex  items-baseline  justify-between '>
           <div className="h-[15px] w-[30px] rounded-full bg-green-500 mr-3 "></div>
            <div>
                <h1 className='font-bold text-[20px]'>Transfer Successful</h1>
                <p className='text-[gray] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem repellat ut fugit sapiente minus nihil veniam, eaque et qui hic.</p>
           </div>
            </div>
            <div className="text-green-500 font-bold text-right w-[200px]">View</div>
    </div>
    <div className='bg-slate-100 rounded-[10px] flex  items-center p-4 mb-5 justify-between '>
           <div className='  flex  items-baseline  justify-between '>
           <div className="h-[15px] w-[22px] rounded-full bg-green-500 mr-2 "></div>
            <div>
                <h1 className='font-bold text-[20px]'>Data Purchase</h1>
                <p className='text-[gray]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, distinctio? Autem, enim.</p>
           </div>
            </div>
            <div className="text-green-500 font-bold w-[200px] text-right">View</div>
    </div>

    <div className='text-center my-2 text-gray-500 text-[14px]'>1.41pm 12-10-23</div>

    <div className='bg-slate-100 rounded-[10px] flex  items-center p-4 mb-5 justify-between '>
           <div className='  flex  items-baseline  justify-between '>
           <div className="h-[15px] w-[30px] rounded-full bg-green-500 mr-3 "></div>
            <div>
                <h1 className='font-bold text-[20px]'>Transfer Successful</h1>
                <p className='text-[gray] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem repellat ut fugit sapiente minus nihil veniam, eaque et qui hic.</p>
           </div>
            </div>
            <div className="text-green-500 font-bold text-right w-[200px]">View</div>
    </div>

    <div className='text-center my-2 text-gray-500 text-[14px]'>1.41pm 12-10-23</div>

    <div className='bg-slate-100 rounded-[10px] flex  items-center p-4 mb-5 justify-between '>
           <div className='  flex  items-baseline  justify-between '>
           <div className="h-[15px] w-[30px] rounded-full bg-red-500 mr-3 "></div>
            <div>
                <h1 className='font-bold text-[20px]'>Transfer Unsuccessful</h1>
                <p className='text-[gray] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem repellat ut fugit sapiente minus nihil veniam, eaque et qui hic.</p>
           </div>
            </div>
            <div className="text-green-500 font-bold text-right w-[200px]">View</div>
    </div>
    <div className='bg-slate-100 rounded-[10px] flex  items-center p-4 mb-5 justify-between '>
           <div className='  flex  items-baseline  justify-between '>
           <div className="h-[15px] w-[30px] rounded-full bg-green-500 mr-3 "></div>
            <div>
                <h1 className='font-bold text-[20px]'>Transfer Successful</h1>
                <p className='text-[gray] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem repellat ut fugit sapiente minus nihil veniam, eaque et qui hic.</p>
           </div>
            </div>
            <div className="text-green-500 font-bold text-right w-[200px]">View</div>
    </div>
    <div className='bg-slate-100 rounded-[10px] flex  items-center p-4 mb-5 justify-between '>
           <div className='  flex  items-baseline  justify-between '>
           <div className="h-[15px] w-[30px] rounded-full bg-green-500 mr-3 "></div>
            <div>
                <h1 className='font-bold text-[20px]'>Transfer Successful</h1>
                <p className='text-[gray] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem repellat ut fugit sapiente minus nihil veniam, eaque et qui hic.</p>
           </div>
            </div>
            <div className="text-green-500 font-bold text-right w-[200px]">View</div>
    </div>
    <div className='bg-slate-100 rounded-[10px] flex  items-center p-4 mb-5 justify-between '>
           <div className='  flex  items-baseline  justify-between '>
           <div className="h-[15px] w-[30px] rounded-full bg-green-500 mr-3 "></div>
            <div>
                <h1 className='font-bold text-[20px]'>Transfer Successful</h1>
                <p className='text-[gray] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem repellat ut fugit sapiente minus nihil veniam, eaque et qui hic.</p>
           </div>
            </div>
            <div className="text-green-500 font-bold text-right w-[200px]">View</div>
    </div>
    <div className='bg-slate-100 rounded-[10px] flex  items-center p-4 mb-5 justify-between '>
           <div className='  flex  items-baseline  justify-between '>
           <div className="h-[15px] w-[30px] rounded-full bg-green-500 mr-3 "></div>
            <div>
                <h1 className='font-bold text-[20px]'>Transfer Successful</h1>
                <p className='text-[gray] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem repellat ut fugit sapiente minus nihil veniam, eaque et qui hic.</p>
           </div>
            </div>
            <div className="text-green-500 font-bold text-right w-[200px]">View</div>
    </div>


    
    
    
    
    </div>
</div>
    </div>
  </div>


  )
}

export default UserSettingsNotification