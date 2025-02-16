import { Box, Container } from "@mui/material";
import img1 from "../images/stockImg3.jpg"
//make navbar responsive
//and use i18next for translation

export default function Home(props) {
    return (
        <Container disableGutters maxWidth 
        sx={{
            //height:{xs:"50vh", sm:"63vh", md:"73vh", lg:"94vh"},
            height:"100vh",
            backgroundImage:`url("${img1}")`,
            bgcolor:"background.default",
            backgroundSize:{xs:"cover", sm:"cover", md:"cover", lg:"100%"},
            backgroundRepeat:"no-repeat",
            backgroundPosition:{xs:"center center", sm:"center center", md:"center center", lg:"0% 10%"}
            //backgroundBlendMode:"overlay",
            //borderBottom:"5px solid",,
            //borderColor:"primary.main",
            }}>
        <Box component={"div"}
        className="p-8 flex flex-col flex-nowrap items-start justify-center h-full">
            <span className="p-5 py-10 w-[50%] md:w-[32%] bg-white/10 rounded-xl shadow-xl border-1 border-gray-400">
                    <span className="font-[Afacad Flux] text-black text-[1.7rem] md:text-[1.8rem] xl:text-[2.7rem] font-[800] tracking-[.3rem] capitalise">
                    Innovation.
                    </span>
            </span>
            <Box className="mt-3 flex flex-nowrap flex-row justify-evenly w-[50%] md:w-[32%]">
                <button className="p-2 text-black text-sm md:text-[0.9rem] lg:text-lg xl:text-xl font-[450] bg-green-500 rounded-xl duration-100 ease-in hover:bg-green-300">
                    Download
                </button>
                <button className="p-2 text-white text-sm md:text-[0.9rem] lg:text-lg xl:text-xl font-[450] bg-black/90 border-1 border-white/50 rounded-xl duration-100 ease-in hover:bg-neutral-700/90">
                    Learn More
                </button>
            </Box>
        </Box>
      </Container>
    )
}