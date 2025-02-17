import { Container } from "@mui/material";
import { CheckBoxTwoTone, CloseTwoTone, CloseSharp, CheckBoxRounded } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

export default function Prices(props) {
    const {t, i18n} = useTranslation("namespace");

    let tableDescription = [{
            desc:t("pricing", {returnObjects:true})[0],
            free:true,
            paid:true,
            deluxe:true,
        },{
            desc:t("pricing", {returnObjects:true})[1],
            free:true,
            paid:true,
            deluxe:true,
        },{
            desc:t("pricing", {returnObjects:true})[2],
            free:false,
            paid:true,
            deluxe:true,
        },{
            desc:t("pricing", {returnObjects:true})[3],
            free:false,
            paid:true,
            deluxe:true,
        },{
            desc:t("pricing", {returnObjects:true})[4],
            free:false,
            paid:false,
            deluxe:true,
        },{
            desc:t("pricing", {returnObjects:true})[5],
            free:false,
            paid:false,
            deluxe:true,
        },{
            desc:t("pricing", {returnObjects:true})[6],
            free:false,
            paid:false,
            deluxe:true,
        }
    ]
    return (
        <>
            <Container disableGutters maxWidth component="div" id="pricing">
                <div className="flex flex-col items-center justify-center bg-neutral-800 p-5 py-15 md:p-15 shadow-xl">
                    <div className="text-emerald-400 text-[2.3rem] font-[900] mb-5">
                        {t("pricing_title")}
                    </div>
                    <div className="text-center text-white text-[1.9rem] font-[400] mb-10">
                        {t("pricing_subtitle")}
                    </div>
                    <div className="w-[100%] md:w-[90%] border-1 border-black rounded-lg shadow-lg overflow-hidden">
                    <table className="table table-auto">
                        <thead className="bg-neutral-900 rounded-lg overflow-hidden border-b-3 border-emerald-600">
                            <tr className="text-white text-2xl md:text-[1.8rem] h-[50px]">
                                <th className="rounded-tl-md"></th>
                                <th className="text-gray-300 text-center">{t("pricing_tier_1")}</th>
                                <th className="text-gray-100 text-center">{t("pricing_tier_2")}</th>
                                <th className="text-gray-100 text-center rounded-tr-md">{t("pricing_tier_3")}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableDescription.map((val,index, array) => (
                            <tr key={index} 
                            className="bg-neutral-900 text-white font-[300] h-[50px] text-center first:border-t-0 border-0 border-gray-600 last:rounded-br-lg last:rounded-bl-lg">
                                {index===array.length-1?(
                                    <td style={props.lang==="ar"?{fontSize:"1.6rem"}:{fontSize:"1.1rem"}} 
                                    className="p-5 text-lg rounded-bl-lg text-white">{val.desc}</td>
                                    ):(
                                    <td style={props.lang==="ar"?{fontSize:"1.6rem"}:{fontSize:"1.1rem"}} 
                                    className="p-5 text-lg text-white">{val.desc}</td>
                                    )}
                                <td className="w-[20%] text-xl text-white stroke-black">{val.free? <CheckBoxRounded/> : <CloseSharp/>}</td>
                                <td className="w-[20%] text-xl text-white stroke-black"> {val.paid? <CheckBoxRounded/> : <CloseSharp/>} </td>
                                {index===array.length-1? (
                                    <td className="w-[20%] text-xl rounded-br-[11px] text-white stroke-black"> {val.deluxe? <CheckBoxRounded/> : <CloseSharp/>}</td>
                                    ):(
                                    <td className="w-[20%] text-xl text-white stroke-black"> {val.deluxe? <CheckBoxRounded/> : <CloseSharp/>}</td>)}
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