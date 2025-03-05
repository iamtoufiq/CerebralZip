import { useEffect, useState } from "react";
import useFetchData from "../hooks/useFetchData";

const initialData = [
  {
    id: 1,
    title: "purchases",
    price: "$4,294",
    isGreen: true,
    interestAmount: "+32%",
  },
  {
    id: 2,
    title: "revenue",
    price: "$322,3k",
    isGreen: true,
    interestAmount: "+49%",
  },
  {
    id: 3,
    title: "refunds",
    price: "$8,2k",
    isGreen: false,
    interestAmount: "+7%",
  },
];

interface SentimentData {
  purchases: number;
  revenue: number;
  refunds: number;
}

const LeftPrice = () => {
  const { data: fetchData } = useFetchData<SentimentData>(
    "sample_assignment_api_1/"
  );

  const [updatedData, setUpdatedData] = useState(initialData);

  useEffect(() => {
    if (fetchData) {
      const formattedData = initialData.map((item) => ({
        ...item,
        price: `$${fetchData[item.title as keyof SentimentData].toLocaleString()}`,
      }));
      setUpdatedData(formattedData);
    }
  }, [fetchData]);
  return (
    <div className="flex items-center justify-between lg:mt-7 lg:mb-5">
      {
        updatedData.map((curData)=>{
         return   <div id="_first" key={curData.id} className="flex flex-col gap-5">
         <p className="leading-[14.52px] text-xs font-semibold text-[#C2C3C6]">
           {curData.title}
         </p>
         <div className="flex items-center gap-1">
           <span className="text-[20.7px] font-semibold leading-[25.05px] text-[#737478]">
             {curData.price}
           </span>
           <div className={`flex items-center  rounded-[10.75px] text-center px-[7px] gap-1 ${curData.isGreen ? "text-[#E0FEEB] border border-[#CEF1DE] bg-[#e0fdeb]" : "text-[#D09C91] border border-[#D09C91] bg-[#ffe2e2]" }`}>
             <p className={`text-[9.8px]  ${curData.isGreen ? "text-[#91CBAA]" : "text-[#D09C91]"}`}>{curData.interestAmount}</p>
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
              <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
<rect width="11" height="6" fill="url(#pattern0_3_125)"/>
<defs>
<pattern id="pattern0_3_125" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0_3_125" transform="matrix(0.0287081 0 0 0.0526316 -0.0454545 0)"/>
</pattern>
<image id="image0_3_125" width="38" height="19" preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAATCAYAAAD8in+wAAAFDklEQVR4nK2WW4yeRR2Hn9+8h2+7W2mX0sViarCKGmKIQY0pGktrkdpdWk81gMDuYtqExEO48dSkFoxWL0yjd5IYaqXhohcNlq4bsKc0kHi4QUS90EgEopZtl2B3v/2+d2Z+Xuwu2dZuinGfZG7+k/nNM+87kxmdGBmywTJThvFz08vu+/zhw23eBM8+uGNZe7J9WHCroRdAMG04tax/2Y5b9r+5nMsR5sIEriV/aFVve9/Tu3asuNLAM3cP9rfPT+/HvsmmFkggmxr7pvb56f1n7h7s/19kTg5vXzk2umU1gE6MDCUg2DaiA/on5gmX2rf5p0f/dbmA07s+vSZ14x6TtwIDUmgpSTiRA3M5nBVhrKjLhzc8cuQfV1zovUNvj4W/ZrM6mx/qxPDQa8aVRMsmIDpYE4IxOx+KufXn2x87cnbBqq7PxN2gLSKvDmVdF0UpZUPOxNQlYUuha/MqeDym8L3bHzv6t8Wknr73U+8uirgX+6MWLVlNAHaDXsRcQKIqypadBjLeERQeKYvu10+PfGItwPjw0HszaS8wCHkgVK1aRSE724FEoURRGKyccy15ABgsS+85/oVt71lMTEW8C/gw4lqsayy/VQDH7xvcRuAHQuvqqqpVlG5iQ+o2HQKT2E8RwnOYW8Afw16pqq6CglLTjbanhdtYJqgl6Es5V6Vki2gzifUr0L6PHzz6wqVix0eHvi8zCqwGBHObf1O79xjmL9iT3dhNYPX0thTq0JK1CsJnsfdgf5Ls/lD31EJKTSfangT9IaA7VehOlH8DfilIr2dhTAVcTfBtCvnbJ4e3vv9SMdsBowCerwUAbrzRdtqN9CebVzudmZn2hZlMylJIdSi1vOzpWVH29fUVfX0VzuTYRJlzwPOEuHPjz46d2vTok6dLVzsD6S4HXsCcM86CUqgf2GD0zUvlhIKxssRFYnroobz54PjvZR6weTZn/zXHOOXsTIo4dnB3Ril2yd2u3TSNMxOZ8Jycdm1+dPyP84EbDjzx0q0Hxn8LaSfieaEJQ8IuQStBH5H1jovFuAqpdhG0oHYxY1/e0qpeK28OwYdEuI7ctBwbchEIRWkIUTAB4Xcp+0u3/fzJvy+ypzk1MnhDyvqxgm82XC0rGKaBF7FfBjoBL89B78RaE+qq5RjB/m8xgF8Ob7++h/hdSxuBVSnGSuBQVo3xecwzIVYPbjx05OXFpOY5+cU73pVi+pEU1staQbCNUhFC16EwprBzpZwLV2WgaRYXAzgz+pl10d2Hs1kvebmMk7iA9Qz2tzYfPPbKlaTmeer+bR+scvpFLuuBVJVFwLT63kLVexWFStydonPh3zTtKYgRuMyvXMjpke1rY06fC6Jlydm501eGx9cvciNcjp/s+kB1Q3PdKM7foaiuISi4mSFQoKIihALlRE6RFDOUurLY/8vxkTs2yX4f+KuWrpXUR4y46YINCEkoQ8ZIBfTUICiXXmZwq0y/5TXC9xi/DdEnu8XsqcYpQTYYhGYli4B6SoDM7BFeGmx0amTonmw/YGmtxHJDi+xWamIIOUNKEBPOCeeMDPNvmwBQFcliSqa9ZGJ796INeCigddms6s7kQqkR2ZATeVYBZ5GzcBZi9q2EhYEi06jgFZHuX0oxnxzh9SwasKo6CNdv9M/ND4YCWHD7MP/VUIi2zm46MP7rsFRiEk555huCCaGGIFSENxpFQCEsqBUL2lwfINwd+8qW+j9RaaNZ9HT6tgAAAABJRU5ErkJggg=="/>
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
