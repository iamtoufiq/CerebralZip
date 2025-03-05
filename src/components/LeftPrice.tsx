import { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    tittle: "Purchase",
    price: "$4,294",
    isGreen: true,
    interestAmount: "+32%",
  },
  {
    id: 2,
    tittle: "Revenue",
    price: "$322,3k",
    isGreen: true,
    interestAmount: "+49%",
  },
  {
    id: 3,
    tittle: "Refunds",
    price: "$8,2k",
    isGreen: false,
    interestAmount: "+7%",
  },
];

const LeftPrice = () => {
  // const [data , setData]=useState([])
  const fetchData = async () => {
    try {
      const response = await fetch("http://3.111.196.92:8020/api/v1/sample_assignment_api_1/", {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: "Basic dHJpYWw6YXNzaWdubWVudDEyMw==",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("API Response:", data);
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(()=>{
    // fetchData();
  },[])
  return (
    <div className="flex items-center justify-between">
      {
        data.map((curData)=>{
         return   <div id="_first" key={curData.id} className="flex flex-col gap-5">
         <p className="leading-[14.52px] text-xs font-semibold text-[#C2C3C6]">
           {curData.tittle}
         </p>
         <div className="flex items-center gap-1">
           <span className="text-[20.7px] font-semibold leading-[25.05px] text-[#737478]">
             {curData.price}
           </span>
           <div className="flex items-center text-[#E0FEEB] border border-[#CEF1DE] rounded-[10.75px] text-center px-[7px] gap-1">
             <p className="text-[9.8px] text-[#91CBAA]">{curData.interestAmount}</p>
             {curData.isGreen ? (
               <svg
                 width="11"
                 height="6"
                 viewBox="0 0 11 6"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg"
                 xmlnsXlink="http://www.w3.org/1999/xlink"
               >
                 <rect width="11" height="6" fill="url(#pattern0_3_141)" />
                 <defs>
                   <pattern
                     id="pattern0_3_141"
                     patternContentUnits="objectBoundingBox"
                     width="1"
                     height="1"
                   >
                     <use
                       xlinkHref="#image0_3_141"
                       transform="matrix(0.0287081 0 0 0.0526316 -0.0454545 0)"
                     />
                   </pattern>
                   <image
                     id="image0_3_141"
                     width="38"
                     height="19"
                     preserveAspectRatio="none"
                     xlinkHref="data:image/png;base64,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"
                   />
                 </defs>
               </svg>
             ) : (
               <svg
                 width="11"
                 height="6"
                 viewBox="0 0 11 6"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg"
                 xmlnsXlink="http://www.w3.org/1999/xlink"
               >
                 <rect width="11" height="6" fill="url(#pattern0_3_141)" />
                 <defs>
                   <pattern
                     id="pattern0_3_141"
                     patternContentUnits="objectBoundingBox"
                     width="1"
                     height="1"
                   >
                     <use
                       xlinkHref="#image0_3_141"
                       transform="matrix(0.0287081 0 0 0.0526316 -0.0454545 0)"
                     />
                   </pattern>
                   <image
                     id="image0_3_141"
                     width="38"
                     height="19"
                     preserveAspectRatio="none"
                     xlinkHref="data:image/png;base64,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"
                   />
                 </defs>
               </svg>
             )}
           </div>
         </div>
       </div>
        })
      }

    </div>
  );
};

export default LeftPrice;
