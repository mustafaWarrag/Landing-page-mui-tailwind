import { Download, Facebook, Instagram, LinkedIn, Twitter, YouTube } from "@mui/icons-material";
import { Container } from "@mui/material";

let arr1 = ["About", "Blog", "Privacy Policy", "Legal Team", "Documentation"]
let arr2 = ["Help Center", "Report", "Hiring", "Licence", "Copyright"];
let icons = [<Facebook />, <Instagram />, <Twitter />, <YouTube />, <LinkedIn />]

export default function Footer(props) {
    return (
        <>
            <Container disableGutters maxWidth>
                <div className="p-3 md:p-10 py-15 h-[100vh] md:h-[60vh] flex flex-row justify-between">
                    <span className="flex flex-col flex-nowrap justify-between items-start md:grid grid-cols-3 grid-rows-auto auto-rows-auto gap-3 md:gap-10 w-[100vw] md:justify-end">
                        
                        <span className="col-start-1 row-span-full md:justify-self-start grid grid-row-3 content-evenly">
                            <span className="text-[1.4rem] md:text-[1.7rem] lg:text-[2.3rem] font-[600] row-start-1">
                                Technology Made Easy.
                            </span>
                            <br/>
                            <span className="row-start-2">
                                <button className="my-5 mx-1 md:m-3 md:ml-0 p-2 md:p-2 lg:p-3 text-[1rem] md:text-md lg:text-lg text-black bg-emerald-500 shadow-lg rounded-lg duration-100 ease-in hover:bg-emerald-700" >
                                    <Download sx={{display:{sm:"inline", md:"none"}}} /> 
                                    <span className="hidden md:inline">Download On</span> IOS
                                </button>
                                <button className="my-5 mx-1 md:m-3 md:ml-0 p-2 md:p-2 lg:p-3 text-[1rem] md:text-md lg:text-lg border-1 border-teal-500 shadow-lg rounded-lg  duration-100 ease-in hover:bg-black">
                                    <Download sx={{display:{sm:"inline", md:"none", lg:"none"}}} /> 
                                    <span className="hidden md:inline">Download On</span> Android
                                </button>
                            </span>
                            
                            <span className="row-start-3 flex flex-nowrap text-left justify-start">
                                {icons.map((val,index)=> <a key={index} href="#"
                                className="mx-2 duration-100 ease-in hover:text-emerald-500">
                                    {val}
                                </a>)}
                            </span>
                        </span>
                    
                        <span className="flex flex-col col-start-2 row-span-full md:justify-self-center md:self-center">
                            <span className="text-sm md:text-xl text-gray-400 uppercase tracking-[0.3rem] md:tracking-[0.9rem]">
                                Company
                            </span>
                            {arr1.map((val,index) => <span key={index}
                            className="py-2 md:py-4"
                            ><a href="#" className="hover:underline">{val}</a>
                            </span>)}
                        </span>

                        <span className="flex flex-col col-start-3 row-span-full md:justify-self-center md:self-center">
                            <span className="text-sm md:text-xl text-gray-400 uppercase tracking-[0.3rem] md:tracking-[0.9rem]">
                                Tech Support
                            </span>
                            {arr2.map((val,index) => <span key={index}
                            className="py-2 md:py-4"
                            ><a href="#" className="hover:underline">{val}</a>
                            </span>)}
                        </span>
                    </span>    
                </div>
                <div className="my-5 font-[Roboto] font-[400] md:pl-2 text-[1.2rem] md:text-xl text-gray-400 text-center md:text-left tracking-[.1rem] w-[100%]">
                        Mustafa Warrag &copy;2025
                </div>
            </Container>
        </>
    )
}