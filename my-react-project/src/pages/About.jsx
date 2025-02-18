import { Container, Paper } from "@mui/material";
import img2 from "../images/office-meeting-1.jpg"
import img3 from "../images/office-space-1.jpg"
import img4 from "../images/office-meeting-2.jpg"
import { useTranslation } from "react-i18next";



export default function About(props) {
    const {t, i18n} = useTranslation("namespace");

    let arr = [{
        image:img2,
        imgDesc:"Image of people talking around a table in a meeting",
        title:t("about_first_box.title", {returnObjects:true}),
        description:t("about_first_box.description", {returnObjects:true})
    }, {
        image:img3,
        imgDesc:"Close-up Image of a computer mouse",
        title:t("about_second_box.title", {returnObjects:true}),
        description:t("about_second_box.description", {returnObjects:true})
    }, {
        image:img4,
        imgDesc:"Image of people in discussion",
        title:t("about_third_box.title", {returnObjects:true}),
        description:t("about_third_box.description", {returnObjects:true})
    }];

    return (
        <Container maxWidth disableGutters component="div" id="about"
        className="p-5 lg:p-20">
            <Paper elevation={2} sx={{
                borderRadius:"40px",
                display:{xs:"none", sm:"block"}
                }}>
                <div className="hidden md:flex flex-col">
                    {arr.map((val,index, array) => index % 2 === 0? (<div key={index} 
                    className="flex flex-row justify-between items-center flex-nowrap pt-0 pb-0">
                        <span className="grow-0 shrink-1 basis-[50%] p-5 lg:text-lg">
                            <span style={props.lang === "ar"? {fontSize:"2.1rem"}:{fontSize:"1.7rem"}}  
                            className="font-[600]">
                                {val.title}
                            </span>
                            <br/>
                            <span style={props.lang === "ar"? {fontSize:"1.5rem"}:{fontSize:"1.1rem"}}  
                            className="font-[200]">
                                {val.description}
                            </span>
                        </span>
                    
                        <span className="grow-2 shrink-0 basis-[660px] md:basis-[50%] sm:basis-[300px]">
                            {index !== array.length - 1 ? (
                            <img src={val.image} title={val.imgDesc} width={"100%"} 
                            style={props.lang==="en"? {borderTopRightRadius:"40px"} : {borderTopLeftRadius:"40px"} } />
                            ) : (
                            <img src={val.image} title={val.imgDesc} width={"100%"} 
                            style={props.lang==="en"? {borderBottomRightRadius:"40px"} : {borderBottomLeftRadius:"40px"} } />
                            )}
                        </span>
                    </div>
                    ) : (
                        <div key={index} 
                        className="flex flex-row-reverse justify-between items-center flex-nowrap pt-0 pb-0">
                        <span className="p-5 grow-0 shrink-2 basis-[50%] lg:text-lg">
                            <span style={props.lang === "ar"? {fontSize:"2.1rem"}:{fontSize:"1.7rem"}}  
                            className="font-[600]">
                                {val.title}
                            </span>
                            <br/>
                            <span style={props.lang === "ar"? {fontSize:"1.5rem"}:{fontSize:"1.1rem"}}   
                            className="font-[200]">
                            {val.description}
                            </span>
                        </span>

                        <span className="grow-2 shrink-0 basis-[660px] md:basis-[50%] sm:basis-[300px]">
                            <img src={val.image} title={val.imgDesc} width={"100%"} />
                        </span>
                    </div>
                    )
                )}
                </div>
            </Paper>

             {/*For Mobile Devices*/}
             <div className="flex flex-col justify-between p-5 md:hidden">
                {arr.map((val, index, array) => index % 2 === 0? (
                    <Paper elevation={2} key={index}
                    sx={{
                        borderRadius:"20px",
                        mt:5, mb:5
                        }}>
                        <div className="flex flex-col">
                            <span className="text-xl p-10">
                                <span className="font-[600]">
                                    {val.title}
                                </span>
                                <span className="font-[200]">
                                    {val.description}
                                </span>
                            </span>

                            <span className="grow-0 shrink-0">
                                <img src={val.image} title={val.imgDesc} width="100%" className="rounded-br-xl rounded-bl-xl" />
                            </span>
                        </div>
                    </Paper>
                ) : (<Paper elevation={2} key={index}>
                <div className="flex flex-col-reverse">
                    <span className="text-xl p-10">
                        <span className="font-[600]">
                            {val.title}
                        </span>
                        <span className="font-[200]">
                            {val.description}
                        </span>
                    </span>

                    <span className="grow-2 shrink-0">
                        <img src={val.image} title={val.imgDesc} width="100%" className="rounded-tr-xl rounded-tl-xl" />
                    </span>
                </div>
                </Paper>))}
            </div>
        </Container>
    )
}