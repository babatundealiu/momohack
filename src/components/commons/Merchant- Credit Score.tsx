
import { AiFillEyeInvisible } from "react-icons/ai"

const RewardTwo = () => {

    return (
      <div className="w-[100%] h-[80vh] bg-black flex justify-center items-center">
          <div className="w-[420px] h-[251px] bg-white rounded-[5px] flex flex-col justify-around items-center">
            <div className="w-[95%] h-[50%] flex items-center flex-col">
                <div className="w-[95%] flex items-center">
                <p className="font-semibold text-[24px]">Total Credit</p>
                 <div className="text-[#084A5F] text-[16px] text-center flex justify-center items-center w-[30px] h-[40px]">
                 <AiFillEyeInvisible  />
                 </div>
                </div>
                  <p className="font-bold text-[40px] text-[#084A5F] font-sans w-[95%]">14,000</p>
            </div>

           

            <button className="bg-[#22C55E] w-[95%] h-[20%] rounded-[8px] text-[12px] text-[#ffff] font-sans">Get more credit</button>
          </div>
      </div>
    )
}


export default RewardTwo