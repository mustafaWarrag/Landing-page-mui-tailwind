import { Box, Container, Typography } from "@mui/material";

export default function Jumbotron(props) {
    return (
        <>
            <Container maxWidth disableGutters>
                <div className="flex flex-col bg-emerald-500 text-black p-10 lg:p-25">
                    <span className="text-center text-white text-[2rem]">
                        Our Product
                    </span>
                    <span className="font-[400] text-[1.7rem] text-center">
                    The most powerful tech doesn't have to be difficult to use. Our products offer simplicity with the power to deliver outstanding results for work, play, and everything in between.
                    </span>
                </div>
            </Container>
        </>
    )
}