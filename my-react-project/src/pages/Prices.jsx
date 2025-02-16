import { Container } from "@mui/material";
import { CheckBoxTwoTone, CloseTwoTone, CloseSharp, CheckBoxRounded } from "@mui/icons-material";

let tableDescription = [{
        desc:"Basic Access to core features and functionality.",
        free:true,
        paid:true,
        deluxe:true,
    },{
        desc:"Limited Storage. 1 GB cloud storage or data storage.",
        free:true,
        paid:true,
        deluxe:true,
    },{
        desc:"High Speed for processing or data usage.",
        free:false,
        paid:true,
        deluxe:true,
    },{
        desc:"Integrations with other tools or services (e.g., 1 or 2 integrations).",
        free:false,
        paid:true,
        deluxe:true,
    },{
        desc:"Full Security with encryption for data at rest and in transit.",
        free:false,
        paid:false,
        deluxe:true,
    },{
        desc:"Full Customization (basic settings and preferences).",
        free:false,
        paid:false,
        deluxe:true,
    },{
        desc:"Unlimited Usage (e.g., 100+ actions/requests per month).",
        free:false,
        paid:false,
        deluxe:true,
    }
]

export default function Prices(props) {
    return (
        <>
            <Container disableGutters maxWidth component="div" id="pricing">
                <div className="flex flex-col items-center justify-center bg-neutral-800 p-5 py-15 md:p-15 shadow-xl">
                    <div className="text-emerald-400 text-[2.3rem] font-[900] mb-5">
                        Our Services
                    </div>
                    <div className="text-center text-white text-[1.9rem] font-[400] mb-10">
                    Technology should make life cheaper, not more expensive. We are providing mind—intuitive, reliable, and powerful technology to fit your everyday needs.
                    </div>
                    <div className="w-[100%] md:w-[90%] border-1 border-black rounded-lg shadow-lg overflow-hidden">
                    <table className="table table-auto">
                        <thead className="bg-neutral-900 rounded-lg overflow-hidden border-b-3 border-emerald-600">
                            <tr className="text-white text-2xl md:text-[1.8rem] h-[50px]">
                                <th className="rounded-tl-md"></th>
                                <th className="text-gray-300">Free</th>
                                <th className="text-gray-100">Paid</th>
                                <th className="text-gray-100 rounded-tr-md tracking-[0.2rem]">Deluxe</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableDescription.map((val,index, array) => (
                            <tr key={index} 
                            className="bg-neutral-900 text-white font-[300] h-[50px] text-center first:border-t-0 border-0 border-gray-600 last:rounded-br-lg last:rounded-bl-lg">
                                {index===array.length-1?(
                                    <td className="p-5 rounded-bl-lg text-white">{val.desc}</td>
                                    ):(
                                    <td className="p-5 text-white">{val.desc}</td>
                                    )}
                                <td className="w-[20%] text-white stroke-black">{val.free? <CheckBoxRounded/> : <CloseSharp/>}</td>
                                <td className="w-[20%] text-white stroke-black"> {val.paid? <CheckBoxRounded/> : <CloseSharp/>} </td>
                                {index===array.length-1? (
                                    <td className="w-[20%] rounded-br-[11px] text-white stroke-black"> {val.deluxe? <CheckBoxRounded/> : <CloseSharp/>}</td>
                                    ):(
                                    <td className="w-[20%] text-white stroke-black"> {val.deluxe? <CheckBoxRounded/> : <CloseSharp/>}</td>)}
                            </tr>
                            ))}
                            
                        </tbody>
                    </table>
                    </div>
                </div>
            </Container>
        </>
    )
}