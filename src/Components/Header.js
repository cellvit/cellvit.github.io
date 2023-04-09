import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"


//MUI imports
import { Button, Grid, AppBar, Toolbar, useTheme, useMediaQuery, Tabs, Tab} from '@mui/material';
import DrawerComp from './DrawerComp';



//Assets
import Logo2Edited from './Assets/Logo2Edited.png';




function Header({links}) {
  const navigate = useNavigate();
  const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  const [value, setvalue] = useState()
 
  return (
    <AppBar sx={{backgroundImage:"linear-gradient(90deg, rgba(180,58,58,1) 2%, rgba(49,49,116,1) 36%, rgba(105,0,161,1) 73%, rgba(166,69,252,1) 100%)"}}>
  <Toolbar>
  {isMatch ? <>
    
      
      <Button><img src={Logo2Edited } alt="" width={isMatch ? "40%" : "60%" } onClick={() => navigate("/")}/></Button>
      {/* <Button color="inherit" onClick={() => navigate("/")}><Typography variant="h4">Cell<span style={{color: 'red'}}>ViT</span></Typography></Button> */}
    <DrawerComp links= {links} />
  </> : <Grid sx={{placeItems:'center'}}container>
    <Grid item xs={4}>
     
      <Button><img src={Logo2Edited } alt="" width={isMatch ? "100%" : "50%" } onClick={() => navigate("/")}/></Button>
      {/* <Button color="inherit" onClick={() => navigate("/")}><Typography variant="h4">Cell<span style={{color: 'red'}}>ViT</span></Typography></Button> */}
      {/* <img src={websitelogotransparent1 } onClick={() => navigate("/")}/ > */}
    </Grid>
    <Grid item xs={6}>
      <Tabs indicatorColor="secondary" textColor="inherit" value={value} onChange={(e, val) => setvalue(val)}>
        {links.map((link, index) => (
          <Tab LinkComponent={Link} to={`/${link==="home" ? "" : link}`} sx={{textDecoration: "none", ":hover": {textDecoration: "underline", textUnderlineOffset: "18px"},}} key={index} label={link}/>
        ))}
      </Tabs>
    </Grid>
    <Grid item xs={1} />
    

  </Grid>}
    
    
      
    </Toolbar>
   
  </AppBar>
  )
}

export default Header



