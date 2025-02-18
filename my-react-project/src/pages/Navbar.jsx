import { ArrowDropDown } from "@mui/icons-material";
import { Box, Button, Container, Select, Paper, Typography, MenuItem } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

let aList = ["home", "about", "pricing"];

export default function NavBar(props) {
    const [opened, setOpen] = useState(false);

    const {t, i18n} = useTranslation("namespace");
    //let list = ["navbar_items[0]","navbar_items[1]","navbar_items[2]"]
    let list = t("navbar_items", {returnObjects:true});
    
   function handleChange(e) {
        props.setLang(e.target.value);
        console.log(props.lang);
    }

    let lang_spacing = props.lang === "en"? "0.6rem" : ".0rem";
    let lang_size = props.lang === "en"? "1.1rem" : "1.6rem"

    return (
        <Container maxWidth="xl" disableGutters>
            <Paper elevation={3}>
                <Box component={"div"} className="flex items-center p-2 flex-row justify-between">
                    <Typography variant="overline" className="text-gray-300" sx={{
                        letterSpacing:lang_spacing,
                        fontSize:lang_size,
                        fontFamily:"Aldrich, serif"
                    }}>
                        {t('navbar_logo')}
                    </Typography>
                    <Box component={"div"} className="flex flex-row justify-center">
                        <ul className="p-0">
                        {list.map((val, index)=>
                            <li className="inline text-md p-0" key={index}>
                                <button className="capitalize text-gray-200 mx-3 p-3 border-2 border-teal-500/0 rounded-full duration-100 ease-in hover:border-neutral-300">
                                    <a href={`/#${aList[index]}`}>
                                        {val}
                                    </a>
                                </button>
                            </li>
                        )}
                        <li className="inline text-md rounded-sm w-[50px]" 
                        onClick={()=>{setOpen(true)}}>
                            <label htmlFor="language"></label> 
                                <Select name="language" className="bg-neutral-800 uppercase" 
                                onChange={handleChange} value={props.lang}>
                                    <MenuItem value="en" sx={{textTransform:"uppercase"}}>
                                        en
                                    </MenuItem>
                                    <MenuItem value="ar" sx={{textTransform:"uppercase"}}>
                                        ar
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