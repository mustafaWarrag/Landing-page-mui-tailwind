import { Box, Container } from "@mui/material";
import img1 from "../images/stockImg2.jpg"
import { useTranslation } from "react-i18next";
//make navbar responsive
//and use i18next for translation

export default function Home(props) {
    const {t, i18n} = useTranslation("namespace");

    let lang_spacing = props.lang === "en"? "0.3rem" : "0rem";

    return (
        <Container disableGutters maxWidth 
        sx={{
            //height:{xs:"50vh", sm:"63vh", md:"73vh", lg:"94vh"},
            height:"100vh",
            backgroundImage:`url("${img1}")`,
            bgcolor:"background.default",
            backgroundSize:{xs:"cover", sm:"cover", md:"cover", lg:"100%"},
            backgroundRepeat:"no-repeat",
            backgroundPosition:{xs:"10% 0%", sm:"10% 0%", md:"center center", lg:"0% 10%"}
            }}>
        <Box component={"div"}
        className="p-8 flex flex-col flex-nowrap items-start justify-center h-full">
            <span className="p-5 py-10 w-[50%] md:w-[32%] bg-white/10 rounded-xl shadow-xl border-1 border-gray-400">
                    <span style={{letterSpacing:lang_spacing}}
                    className="text-black text-[1.7rem] md:text-[1.8rem] xl:text-[2.7rem] font-[Afacad Flux] font-[800] capitalise">
                    {t("home_tagline")}.
                    </span>
            </span>
            <Box className="mt-3 flex flex-nowrap flex-row justify-evenly w-[50%] md:w-[32%]">
                <button className="p-2 text-black text-sm md:text-[0.9rem] lg:text-lg xl:text-xl font-[450] bg-green-500 rounded-xl duration-100 ease-in hover:bg-green-300">
                {t("home_button_1")}
                </button>
                <button className="p-2 text-white text-sm md:text-[0.9rem] lg:text-lg xl:text-xl font-[450] bg-black/90 border-1 border-white/50 rounded-xl duration-100 ease-in hover:bg-neutral-700/90">
                {t("home_button_2")}
                </button>
            </Box>
        </Box>
      </Container>
    )
}