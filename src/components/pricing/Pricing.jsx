import React from "react";

const Pricing = () => {
  return (
    <div className="flex justify-center items-center flex-col px-4  h-auto w-full">
      <h3 className="urbanist text-secondary__color bg-white px-2 py-[1px] uppercase border rounded-[8px] mt-[160px] mb-5 text-[12px] tracking-wider">
        <span className="text-[20px]"> $ </span>
        pricing
      </h3>
      <h1 className="urbanist font-semibold text-[36px] leading-[38px] text-center mb-5 px-6 lg:text-[56px] lg:leading-[60px]">
        Select your ideal
        <span className=" text-primary_color "> Pricing </span>
        plan
      </h1>
      <p className="text-[18px] text-center text-para mb-10 lg:text-[20px] lg:px-[350px]">
        At Manage Wise, we believe in providing you with pricing plans that
        adapt to your unique needs.
      </p>

      {/* pricing plan cards */}
      <div className="px-4 flex justify-center items-center flex-col lg:flex-row lg:gap-8 lg:mb-[120px]">
        <div className="bg-cardbg_color  mb-10 rounded-3xl px-10 py-12 min-w-[320px] lg:min-w-[360px]">
          <h3 className="urbanist text-primary_color bg-white px-4 py-2 uppercase  mb-5 text-[12px] text-start border rounded-[8px] w-[106px] tracking-wider">
            free
          </h3>
          <div className="text-text text-[56px]">
            {" "}
            $25<span className=" text-[16px]">/month</span>
          </div>
          <ul className="text-para flex flex-col gap-2">
            <li>
              <span className="text-green-500">✔️</span> Access to all basic
              features
            </li>
            <li>
              <span>✔️</span> Access to all basic features
            </li>
            <li>
              <span>✔️</span> Access to all basic features
            </li>
            <li>
              <span>✔️</span> Access to all basic features
            </li>
          </ul>
          <button className="urbanist bg-white text-text text-[14px] font-medium capitalize  py-3  px-4 text-center rounded-xl mt-14 lg:text-[18px]">
            Get Started
          </button>
        </div>

        {/* card */}
        <div className="bg-text  mb-10 rounded-3xl px-10 py-12 min-w-[320px] lg:min-w-[360px]">
          <h3 className="urbanist text-primary_color bg-white px-4 py-2 uppercase  mb-5 text-[12px] text-start border rounded-[8px] w-[106px] tracking-wider">
            Standerd
          </h3>
          <div className="text-white text-[56px]">
            {" "}
            $25<span className=" text-[16px]">/month</span>
          </div>
          <ul className="text-para flex flex-col gap-2">
            <li>
              <span className="text-green-500">✔️</span> Access to all basic
              features
            </li>
            <li>
              <span>✔️</span> Access to all basic features
            </li>
            <li>
              <span>✔️</span> Access to all basic features
            </li>
            <li>
              <span>✔️</span> Access to all basic features
            </li>
            <li>
              <span>✔️</span> Access to all basic features
            </li>
          </ul>
          <button className="urbanist bg-secondary__color text-white text-[14px] font-medium capitalize  py-3  px-4 text-center rounded-xl mt-14 lg:text-[18px]">
            Get Started
          </button>
        </div>
        <div className="bg-cardbg_color  mb-10 rounded-3xl px-10 py-12 min-w-[320px] lg:min-w-[360px]">
          <h3 className="urbanist text-primary_color bg-white px-4 py-2 uppercase  mb-5 text-[12px] text-start border rounded-[8px] w-[106px] tracking-wider">
            business
          </h3>
          <div className="text-text text-[56px]">
            {" "}
            $25<span className=" text-[16px]">/month</span>
          </div>
          <ul className="text-para flex flex-col gap-2">
            <li>
              <span className="text-green-500">✔️</span> Access to all basic
              features
            </li>
            <li>
              <span>✔️</span> Access to all basic features
            </li>
            <li>
              <span>✔️</span> Access to all basic features
            </li>
            <li>
              <span>✔️</span> Access to all basic features
            </li>
          </ul>
          <button className="urbanist bg-white text-text text-[14px] font-medium capitalize  py-3  px-4 text-center rounded-xl mt-14 lg:text-[18px]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
// import React from "react";

// const Pricing = () => {
//   return (
//     <div className="flex justify-center items-center flex-col px-4  h-auto w-full">
//       <h3 className="urbanist text-secondary__color bg-white px-2 py-[1px] uppercase border rounded-[8px] mt-[160px] mb-5 text-[12px] tracking-wider">
//         <span className="text-[20px]"> $ </span>
//         pricing
//       </h3>
//       <h1 className="urbanist font-semibold text-[36px] leading-[38px] text-center mb-5 px-6 lg:text-[56px] lg:leading-[60px]">
//         Select your ideal
//         <span className=" text-primary_color "> Pricing </span>
//         plan
//       </h1>
//       <p className="text-[18px] text-center text-para mb-10 lg:text-[20px] lg:px-[350px]">
//         At Manage Wise, we believe in providing you with pricing plans that
//         adapt to your unique needs.
//       </p>

//       {/* pricing plan cards */}
//       <div className="flex justify-center items-center flex-col lg:flex-row lg:gap-8 lg:mb-[120px]">
//         <div className="bg-cardbg_color px-4 py-8 mb-10 rounded-3xl lg:px-10 lg:py-12 lg:min-w-[360px]">
//           <h3 className="urbanist text-primary_color bg-white px-4 py-2 uppercase  mb-5 text-[12px] text-start border rounded-[8px] w-[106px] tracking-wider">
//             free
//           </h3>
//           <div className="text-text lg:text-[56px]">
//             {" "}
//             $25<span className=" lg:text-[16px]">/month</span>
//           </div>
//           <ul className="text-para lg:flex lg:flex-col lg:gap-2">
//             <li>
//               <span className="text-green-500">✔️</span> Access to all basic
//               features
//             </li>
//             <li>
//               <span>✔️</span> Access to all basic features
//             </li>
//             <li>
//               <span>✔️</span> Access to all basic features
//             </li>
//             <li>
//               <span>✔️</span> Access to all basic features
//             </li>
//           </ul>
//           <button className="urbanist bg-white text-text text-[14px] font-medium capitalize  py-3  px-4 text-center rounded-xl mt-14 lg:text-[18px]">
//             Get Started
//           </button>
//         </div>

//         {/* card */}
//         <div className="bg-text px-4 py-8 mb-10 rounded-3xl lg:px-10 lg:py-12 lg:min-w-[360px]">
//           <h3 className="urbanist text-primary_color bg-white px-4 py-2 uppercase  mb-5 text-[12px] text-start border rounded-[8px] w-[106px] tracking-wider">
//             Standerd
//           </h3>
//           <div className="text-white lg:text-[56px]">
//             {" "}
//             $25<span className=" lg:text-[16px]">/month</span>
//           </div>
//           <ul className="text-para lg:flex lg:flex-col lg:gap-2">
//             <li>
//               <span className="text-green-500">✔️</span> Access to all basic
//               features
//             </li>
//             <li>
//               <span>✔️</span> Access to all basic features
//             </li>
//             <li>
//               <span>✔️</span> Access to all basic features
//             </li>
//             <li>
//               <span>✔️</span> Access to all basic features
//             </li>
//             <li>
//               <span>✔️</span> Access to all basic features
//             </li>
//           </ul>
//           <button className="urbanist bg-secondary__color text-white text-[14px] font-medium capitalize  py-3  px-4 text-center rounded-xl mt-14 lg:text-[18px]">
//             Get Started
//           </button>
//         </div>
//         <div className="bg-cardbg_color px-4 py-8 mb-10 rounded-3xl lg:px-10 lg:py-12 lg:min-w-[360px]">
//           <h3 className="urbanist text-primary_color bg-white px-4 py-2 uppercase  mb-5 text-[12px] text-start border rounded-[8px] w-[106px] tracking-wider">
//             business
//           </h3>
//           <div className="text-text lg:text-[56px]">
//             {" "}
//             $25<span className=" lg:text-[16px]">/month</span>
//           </div>
//           <ul className="text-para lg:flex lg:flex-col lg:gap-2">
//             <li>
//               <span className="text-green-500">✔️</span> Access to all basic
//               features
//             </li>
//             <li>
//               <span>✔️</span> Access to all basic features
//             </li>
//             <li>
//               <span>✔️</span> Access to all basic features
//             </li>
//             <li>
//               <span>✔️</span> Access to all basic features
//             </li>
//           </ul>
//           <button className="urbanist bg-white text-text text-[14px] font-medium capitalize  py-3  px-4 text-center rounded-xl mt-14 lg:text-[18px]">
//             Get Started
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Pricing;
