import React from 'react'
// import { Link } from "react-router-dom"


// MUI imports
import { Button, Box, useMediaQuery, useTheme} from '@mui/material';

//Components



import { CustomizedTypographyRaleway } from '../styles/styles';

//Assets
import callpaintimage2 from './Assets/callpaintimage2.jpg';



// import { createTheme, ThemeProvider } from '@mui/material/styles';

// const theme1 = createTheme({
//   status: {
//     danger: '#e53e3e',
//   },
//   palette: {
//     primary: {
//       main: '#0971f1',
//       darker: '#053e85',
//     },
//     neutral: {
//       main: '#64748B',
//       contrastText: '#fff',
//     },
//   },
// });



function Home() {
    
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    
  return (
    <>
   
    
      <Box style={{position: "relative", }}> 
      <img src={callpaintimage2} alt="cellpaint" style={{ width: "100%", height: "90vh", objectFit: "cover"}}/>
      <div style={{
						position: "absolute",
						zIndex: "100",
						top: "250px",
						left: "50px",
						textAlign: "center",
					}}>
      <CustomizedTypographyRaleway fontSize={{lg:70, md:60, sm:45, xs:30}} style={{ color: "white", fontWeight: "bolder" }}>Welcome to CELLViT</CustomizedTypographyRaleway>
      <CustomizedTypographyRaleway variant="body1" paragraph fontSize={{lg:35, md:30, sm:20, xs:16}} style={{ color: "white", fontWeight: "bolder", align: "center" }}>Accelerating drug and biomarker discovery with AI-based cell painting</CustomizedTypographyRaleway> 
      
      <Button variant="outlined" color="error" href="https://huggingface.co/cellvit/maxvit-large-tf-224/tree/main" sx={{							           
              color: "white",
							position: "relative",
              
							}}><CustomizedTypographyRaleway fontSize={{lg:30, md:25, sm:16, xs:12}} fontWeight={"bold"}>TRY OUR MODEL</CustomizedTypographyRaleway></Button>

{/* <ThemeProvider theme1={theme1}>
  <Button color="neutral" variant="outlined">
    neutral
  </Button>
</ThemeProvider> */}
      
      </div>
    
      </Box>
   
      
      
      
      
  </>
  );
}

export default Home;

