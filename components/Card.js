import React from "react"

export default function Card(props){
    console.log(props)
    return(
         <div className="space-6  container flex ml-8 my-14 max-w-2xl">
         <img src={props.imageUrl} alt="asda" className="w-32 h-44  rounded-md" />
    <div className="flex flex-col ml-4 my-3 ">
       <div className="flex align-middle"> 
        <img src="./images/loc.png" alt="" className="mr-1 h-3"/>
           <p className="text-[10px] tracking-[1.75px]">{props.location.toUpperCase()}</p>
           <a href={props.googleMapsUrl} className="text-[10px] ml-2 text-[#918E9B] underline underline-offset-4">view on Google Maps</a>
          
        </div>
        
        <h2 className="text-2xl text-[#2B283A] font-bold">{props.title}</h2>
        <p className="text-[10px] mt-3 font-bold text-[#2B283A]">
            {props.startDate} - {props.endDate}
        </p>
        
        <p className="leading-5 text-[10px] max-w-xs mt-2">{props.description}</p>

    </div>
    </div>
    
)
} 