import { ArrowDropDown } from "@mui/icons-material";
import { Box, Button, Container, Select, Paper, Typography, MenuItem } from "@mui/material";
import { useEffect, useState } from "react";
let list = ["home", "about", "pricing"];

export default function NavBar(props) {
    const [lang, setLang] = useState("EN");
    const [opened, setOpen] = useState(false);

    function handleChange(e) {
        setLang(e.target.value);
        console.log(lang);
    }

    useEffect(()=>{

    },[lang])

    return (
        <Container maxWidth="xl" disableGutters>
            <Paper elevation={3}>
                <Box component={"div"} className="flex items-center p-2 flex-row justify-between">
                    <Typography variant="overline" className="text-gray-300" sx={{
                        letterSpacing:"0.6rem",
                        fontSize:"1.1rem",
                        fontFamily:"Aldrich, serif"
                    }}>
                        Company
                    </Typography>
                    <Box component={"div"} className="flex flex-row justify-center">
                        <ul className="p-0">
                        {list.map((val, index)=>
                            <li className="inline text-md p-0" key={index}>
                                <button className="capitalize text-gray-200 mx-3 p-3 border-2 border-teal-500/0 rounded-full duration-100 ease-in hover:border-neutral-300">
                                    <a href={`/#${val}`}>{val}</a>
                                </button>
                            </li>
                        )}
                        <li className="inline text-md rounded-sm w-[50px]" 
                        onClick={()=>{setOpen(true)}}>
                            <label htmlFor="language"></label> 
                                <Select name="language" className="bg-neutral-800" 
                                onChange={handleChange} value={lang}>
                                    <MenuItem value="EN">
                                        EN 
                                    </MenuItem>
                                    <MenuItem value="AR">
                                        AR 
                                    </MenuItem>
                                </Select>
                                
                        </li>
                        </ul>
                    </Box>
                </Box>
            </Paper>
        </Container>
    )
}