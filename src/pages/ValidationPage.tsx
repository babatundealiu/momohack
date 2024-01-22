import React from "react";

const ValidationPage: React.FC = () => {
  return (
    <div className=" w-[100%] h-[400px] bg-[#F7F9FC] flex flex-col justify-around items-center">
      <div className=" w-[80%]  bg-[#FFFFFF] p-[15px]">
        <h3 className=" flex justify-center font-bold pt-4 text-[#084A5F]">Your Account is Verified</h3>
        <p className=" text-xs pt-3 text-[#121212]">
          Cras ultricies mi eu turpis hendrerit fringilla. Praesent venenatis
          metus at tortor pulvinar varius. Pellentesque dapibus hendrerit
          tortor. Phasellus gravida semper nisi.
        </p>
        <button className=" bg-[#FFD11E] rounded-md mt-8 p-2 text-[#084A5F] font-semibold">Continue to Login</button>
      </div>
    </div>
  );
};

export default ValidationPage;