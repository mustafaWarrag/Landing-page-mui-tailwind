import { Box, Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Jumbotron(props) {
    const {t, i18n} = useTranslation("namespace");

    return (
        <>
            <Container maxWidth disableGutters>
                <div className="flex flex-col bg-emerald-500 p-10 lg:p-25">
                    <span style={props.lang === "ar"? {fontSize:"2.5rem"}:{fontSize:"2rem"}}  
                    className="text-center text-white text-[2rem]">
                        {t("jumbotron_title")}
                    </span>
                    <span style={props.lang === "ar"? {fontSize:"2.3rem"}:{fontSize:"1.7rem"}} 
                    className="font-[400] text-[1.7rem] text-center text-black!">
                        {t("jumbotron_description")}
                    </span>
                </div>
            </Container>
        </>
    )
}