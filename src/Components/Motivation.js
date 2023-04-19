import React from 'react'
import { Grid, Box, useTheme, useMediaQuery, } from "@mui/material";


import { CustomizedTypographyRaleway } from '../styles/styles';
import { CustomizedTypographyLexendExtraLight } from '../styles/styles';

//Assets
import drugiscoveryimage from './Assets/drugiscoveryimage.JPG';
import cellpaintingassayworkflow from './Assets/cell_painting_workflow_2.png';
import oncogenmutation from './Assets/oncogenmutation.JPG';
import cell_painting_image from './Assets/cell_painting_image.png';


function Motivation() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  return (
  <Box   
  style={{marginTop:"7rem", marginLeft:"auto", marginRight:"auto", marginBottom:"auto"}} 
  width="100%"
  >
  <Box justifyContent="center" alignItems="center">
  <Grid style={{margin:"auto", }} container spacing={3}>
  <Grid item xs={12} md= {5} lg={7}>
  <CustomizedTypographyRaleway fontWeight = "bold" fontSize={{ lg:30, md:25, sm:20, xs:18 }} padding={2} variant="h4">CellViT: Cell-painting Vision Transformer</CustomizedTypographyRaleway>
  <CustomizedTypographyLexendExtraLight fontSize={{ lg:20, md:15, sm:12, xs:12}} variant="body2" padding={1}> Through the use of a transformer-based neural network, we aim to significantly boost the performance of cell-painting assays and help accelerate therapeutic 
              target & biomarker discovery efforts in drug development.
 </CustomizedTypographyLexendExtraLight>
 <CustomizedTypographyLexendExtraLight fontSize={{ lg:22, md:17, sm:14, xs:14 }} variant="body1" padding={1}> Project Objectives:</CustomizedTypographyLexendExtraLight>
 <CustomizedTypographyLexendExtraLight fontSize={{ lg:20, md:15, sm:12, xs:12 }} variant="body2">
  <ul>
    <li>Accurately classify cell treatments applied (chemical & genetic)</li>
    <li>Improve classification accuracy beyond the convolutional neural network based method (current best-in-class approach)</li>
    <li>Provide a pre-trained MaxVit model specific for cell painting images for community use</li>
  </ul>
</CustomizedTypographyLexendExtraLight>
<CustomizedTypographyLexendExtraLight fontSize={{ lg:20, md:15, sm:12, xs:12 }} variant="body2" component="div">
The goal of this project is to provide a proof of concept model using the multi-axis transformer to improved the cell painting assay image classification performance. 
</CustomizedTypographyLexendExtraLight>
  </Grid>
  {/* <Grid item xs={12} md= {6}></Grid> */}
  <Grid item xs={12} md= {7} lg={5}>
  <img 
  src={drugiscoveryimage} 
  alt="drugiscoveryimage" 
  loading="lazy" 
  width={isMatch ? "85%" : "85%"}
  style={{marginRight:'10%'}}/>
  </Grid>
  </Grid>

  


  <Grid style={{marginTop:"5rem"}} container spacing={3}>  
  <Grid item xs={12} md= {7}>
  <img 
  src={cellpaintingassayworkflow} 
  alt="cellpaintingassayworkflow" 
  loading="lazy" 
  width={isMatch ? "100%" : "85%"}
  />
  </Grid>
  <Grid item xs={12} md= {5}>
  <CustomizedTypographyRaleway fontWeight = "bold" fontSize={{ lg:30, md:25, sm:20, xs:18}} padding={2} variant="h5">Why does Cell Painting matter?</CustomizedTypographyRaleway>
  <CustomizedTypographyLexendExtraLight fontSize={{ lg:20, md:15, sm:12, xs:12}} padding={1} variant="body1">Today, nine out of ten drugs fail in clinical trials. Furthermore, it takes over a decade and an average cost of $2 billion to develop and approve each medicine.<sup>2</sup></CustomizedTypographyLexendExtraLight>
  <CustomizedTypographyLexendExtraLight fontSize={{ lg:20, md:15, sm:12, xs:12}} padding={1} variant="body1">Promising in vitro (lab tested) candidates often fail in the real-world clinical testing, as in vitro models turn out to be insufficiently predictive and translatable to the clinical setting.</CustomizedTypographyLexendExtraLight>
  <CustomizedTypographyLexendExtraLight fontSize={{ lg:20, md:15, sm:12, xs:12}} padding={1} variant="body1">Cell Painting is a high-content, multiplexed image-based assay used for cytological profiling.  Cell painted image profiles can be used to identify the biological impact of novel drugs by comparing the induced morphological profile with the profiles of reference compounds or gene expressions.</CustomizedTypographyLexendExtraLight>
  
  </Grid>
  
  </Grid>


  <Grid style={{margin:"auto", marginTop:"5rem"}} container spacing={3}>
  <Grid item xs={12} md= {5} lg={7}>
  <CustomizedTypographyRaleway fontWeight = "bold" fontSize={{ lg:30, md:25, sm:20, xs:18 }} padding={2} variant="h4">What can we learn from profiling an oncogene mutation?</CustomizedTypographyRaleway>

 <CustomizedTypographyLexendExtraLight fontSize={{ lg:20, md:15, sm:12, xs:12 }} variant="body2">
  <ul>
    <li>KRAS is one of the most prevalent oncogenes in human cancers with the highest mutation rate among all cancers.<sup>5,6</sup></li>
    <li>KRAS mutations cause three deadliest types of cancer in the United States: pancreatic (95%), colorectal(45%) and lung(35%).<sup>7</sup></li>
    <li>Over four decades of research have failed to produce a clinically viable KRAS cancer therapy (drugs that block the function of the KRAS oncoprotein for cancer treatment)<sup>8</sup></li>
    <li>Morpohological profiles produced for KRAS can enable researchers to find novel drugs/compounds that suppress its signaling pathways to block the function of the KRAS oncoprotein.</li>
    </ul>
</CustomizedTypographyLexendExtraLight>
  </Grid>
  {/* <Grid item xs={12} md= {6}></Grid> */}
  <Grid item xs={12} md= {7} lg={5}>
  <img 
  src={oncogenmutation} 
  alt="oncogenmutation" 
  loading="lazy" 
  width={isMatch ? "85%" : "85%"}
  style={{marginRight:'10%'}}/>
  </Grid>
  </Grid>


  <Grid style={{margin:"auto", marginTop:"5rem"}} container spacing={2}>  
  <Grid item xs={12} md= {7}>
  <img 
  src={cell_painting_image} 
  alt="cell_painting_image" 
  loading="lazy" 
  width={isMatch ? "100%" : "85%"}
  />
  </Grid>
  <Grid item xs={12} md= {5}>
  <CustomizedTypographyRaleway fontWeight = "bold" fontSize={{ lg:30, md:25, sm:20, xs:18}} padding={2} variant="h5">What is a Cell Painting image? </CustomizedTypographyRaleway>
  <CustomizedTypographyLexendExtraLight fontSize={{ lg:20, md:15, sm:12, xs:12}} padding={1} variant="body1">In a Cell Painting assay, up to six fluorescent dyes are used to label different components of the cell including the nucleus, endoplasmic reticulum, mitochondria, cytoskeleton, Golgi apparatus, and RNA. The goal is to “paint” as much of the cell as possible to capture a representative image of the whole cell. </CustomizedTypographyLexendExtraLight>
  <CustomizedTypographyLexendExtraLight fontSize={{ lg:20, md:15, sm:12, xs:12}} padding={1} variant="body1">Using image analysis methods such as CellViT,  features are learned and profiled from each cell. </CustomizedTypographyLexendExtraLight>
  
  </Grid>
  
  </Grid>
  
  </Box>
  </Box>

  )
}

export default Motivation;