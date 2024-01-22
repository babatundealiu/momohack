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

const UserSettingsTerms = () => {
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
    Terms And Condition
    </div>
    
    <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, eaque quidem, explicabo quaerat corporis possimus reiciendis ipsam provident facilis eligendi nihil earum dolorem eum mollitia cum saepe eveniet dignissimos cumque tempora praesentium id, ipsum unde. Est dolores iure fuga ab! Temporibus esse repellat neque corrupti quos assumenda delectus voluptate? Necessitatibus deserunt consequatur sunt libero autem labore quae qui reprehenderit id ipsum vel dolorum modi quis quisquam ullam itaque accusantium repudiandae atque accusamus voluptatem beatae repellendus, in, tempore iusto! Eius quisquam odit perspiciatis magnam dolores earum modi voluptatem exercitationem nihil molestias laudantium reiciendis magni, inventore quod eum, consequuntur aperiam harum id ullam tempora. Nisi, alias! Reiciendis debitis perferendis molestias consequatur blanditiis quis, corporis, odit qui ex, dignissimos eaque eos sint incidunt voluptatibus illo totam fugiat temporibus voluptatum. Ad ipsa nesciunt itaque necessitatibus assumenda repellendus distinctio. Aut, velit dolor voluptates maxime voluptas laudantium dolorum fugiat vero laboriosam, esse itaque nostrum nulla, ratione est dolores ut quia dolorem praesentium. Saepe dolorum magni consequatur fugiat atque, mollitia, ex deleniti minus ipsa dolores officia, itaque dolor accusantium soluta. Odit omnis, perspiciatis illum, ipsa iste tenetur maxime libero eaque consequatur iure, placeat pariatur culpa a tempore. Voluptatem quibusdam aspernatur molestias accusamus deleniti culpa dignissimos modi voluptas veniam officiis. Et adipisci facilis, tempora illum iure quo, cumque numquam fugiat quisquam sed itaque voluptatem doloremque? Dignissimos expedita eaque, cum, dolore harum magni architecto labore dolorem odit aperiam velit voluptates consequuntur voluptas quidem quo eius quos vel! Nostrum sit est at itaque modi ratione possimus laboriosam accusamus ea autem sapiente veritatis, totam obcaecati optio nam dicta voluptatibus. Deleniti corrupti deserunt debitis voluptas harum asperiores necessitatibus obcaecati dolor dolorem, cum repudiandae aliquid inventore architecto adipisci totam quod, similique unde nam fugit natus, eaque quas sunt ut laboriosam? Facere harum placeat cumque exercitationem eaque odio architecto, a explicabo modi repellat possimus.</p>
    </div>
     
    </div>
</div>
    </div>
  </div>


  )
}

export default UserSettingsTerms