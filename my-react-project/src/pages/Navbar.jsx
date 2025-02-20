import { ArrowDropDown, Menu } from "@mui/icons-material";
import { Box, Button, Container, Select, Paper, Typography, MenuItem, Drawer, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

let aList = ["home", "about", "pricing"];

export default function NavBar(props) {
    const [opened, setOpen] = useState(false);
    const [drawerOpen, setDrawer] = useState(false);

    const {t, i18n} = useTranslation("namespace");
    //let list = ["navbar_items[0]","navbar_items[1]","navbar_items[2]"]
    let list = t("navbar_items", {returnObjects:true});
    
   function handleChange(e) {
        setDrawer(false);
        props.setLang(e.target.value);
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

                    {/*For laptop and large screens*/}
                    <Box component={"div"} sx={{display:{md:"none", lg:"flex"}}} 
                    className="flex-row justify-center">
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

                    {/*For Mobile screens*/}
                    <Box component="div" sx={{display:{md:"flex",lg:"none"}}} 
                    className="flex-row justify-between">
                        <IconButton onClick={()=>{setDrawer(true)}}>
                            <Menu htmlColor="primary.main" />
                        </IconButton>
                        <Drawer elevation={2} anchor={props.lang === "en"? "right" : "left"}
                        open={drawerOpen}
                        onClose={()=>{setDrawer(false)}}>
                            <ul className="p-0">
                            {list.map((val, index)=>
                                <li className="block text-md mx-auto p-1 px-12" key={index}>
                                    <button className="capitalize p-3 text-gray-200 border-2 border-teal-500/0 rounded-full duration-100 ease-in hover:border-neutral-300">
                                        <a href={`/#${aList[index]}`} onClick={()=>{setDrawer(false)}}>
                                            {val}
                                        </a>
                                    </button>
                                </li>
                            )}
                            <li className="block mx-2 px-12 text-md rounded-sm w-[50px]" 
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
                        </Drawer>

                    </Box>
                </Box>
            </Paper>
        </Container>
    )
}