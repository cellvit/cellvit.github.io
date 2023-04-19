import React from 'react'

import { Grid, Box, useTheme, useMediaQuery, Link} from "@mui/material";
// import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper} from "@mui/material";


import { CustomizedTypographyRaleway } from '../styles/styles';
import { CustomizedTypographyLexendExtraLight } from '../styles/styles';

//Assets
import maxvit_confusion_matrix from './Assets/maxvit_confusion_matrix.png';
import precision_recall from './Assets/precision_recall.PNG';
import maxvit_class_cosine_similarity from './Assets/maxvit_class_cosine_similarity.png';
import predictedclass_similarity from './Assets/predictedclass_similarity.PNG';
import pearson_corelation from './Assets/pearson_corelation.png';
import how_to_use_CellViT from './Assets/how_to_use_CellViT.png';
import pearson_correlation_subtitle from './Assets/pearson_correlation_subtitle.png';


function Results() {
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
  <CustomizedTypographyRaleway fontWeight = "bold" fontSize={{ lg:30, md:25, sm:20, xs:18 }} padding={2} variant="h4">Robust gene variant classification accuracy</CustomizedTypographyRaleway>
  <CustomizedTypographyLexendExtraLight fontSize={{ lg:20, md:15, sm:12, xs:12 }} variant="body2">
  <ul>
    <li>Overall, CellViT achieves train accuracy of 0.9815 and test accuracy of 0.73, with F1 score over 0.73 over 13 class labels, representing normal (wildtype) and mutated (variant) genes.</li>
    <li>Most importantly, the gene variant classification accuracy is very robust as shown below in the precision/recall/F1 test results:</li>    
  </ul>
</CustomizedTypographyLexendExtraLight>
<Grid item xs={8} md= {8} lg={8}>
  <img 
  src={precision_recall} 
  alt="precision_recall" 
  loading="lazy" 
  width={isMatch ? "85%" : "85%"}
  style={{marginRight:'10%', paddingLeft:'100px'}}/>
  </Grid>


  </Grid>
  
  <Grid item xs={12} md= {7} lg={5}>
  <img 
  src={maxvit_confusion_matrix} 
  alt="maxvit_confusion_matrix" 
  loading="lazy" 
  width={isMatch ? "85%" : "85%"}
  style={{marginRight:'10%'}}/>
  </Grid>
  </Grid>

  <Grid style={{margin:"auto", marginTop:"5rem" }} container spacing={3}>  
  <Grid item xs={12} md= {7}>
  <img 
  src={maxvit_class_cosine_similarity} 
  alt="maxvit_class_cosine_similarity" 
  loading="lazy" 
  width={isMatch ? "85%" : "65%"}
  />
  </Grid>
  <Grid item xs={12} md= {5}>
  <CustomizedTypographyRaleway fontWeight = "bold" fontSize={{ lg:30, md:25, sm:20, xs:18}} padding={2} variant="h5">Cosine similarities of predicted classes confirm biology</CustomizedTypographyRaleway>  
  <CustomizedTypographyLexendExtraLight fontSize={{ lg:20, md:15, sm:12, xs:12 }} variant="body2">
  <ul>
    <li>We observed class prediction similarities for certain genes.  Given this observation, we then calculated cosine similarities of the predicted classes (specific to the model’s class predictions). </li>
    <li>The cosine similarities of certain gene class predictions show to be moderately strong.</li>
    </ul>
</CustomizedTypographyLexendExtraLight>
<Grid item xs={8} md= {8} lg={8}>
  <img 
  src={predictedclass_similarity} 
  alt="predictedclass_similarity" 
  loading="lazy" 
  width={isMatch ? "100%" : "150%"}
  style={{marginRight:'10%', paddingLeft:'100px'}}/>
  </Grid>
  </Grid>  
  </Grid>


  <Grid style={{margin:"auto", marginTop:"5rem" }} container spacing={3}>
  <Grid item xs={12} md= {4} lg={4}>
  <CustomizedTypographyRaleway fontWeight = "bold" fontSize={{ lg:30, md:25, sm:20, xs:18 }} padding={2} variant="h4">Predicted class cosine similarities align with Pearson correlations of cell images</CustomizedTypographyRaleway>
  <CustomizedTypographyLexendExtraLight fontSize={{ lg:20, md:15, sm:12, xs:12 }} variant="body2">
  <ul>
    <li>The Broad Institute published Pearson correlation results for 110 genes/alleles<sup>14</sup>, using the cell painting images from the same dataset that were used to train CellViT.</li>
    <li>The genes from the RAS family (BRAF, RAF1) show strong Pearson correlation as shown on the correlation matrix.  These results align closely w/ the cosine similarity results for these genes from CellViT. </li>    
  </ul>
</CustomizedTypographyLexendExtraLight>
  </Grid>
  {/* <Grid item xs={12} md= {6}></Grid> */}
  <Grid item xs={12} md= {8} lg={8}>
  <img 
  src={pearson_corelation} 
  alt="pearson_corelation" 
  loading="lazy" 
  width={isMatch ? "85%" : "85%"}
  style={{marginRight:'10%'}}/>
  <img 
  src={pearson_correlation_subtitle} 
  alt="pearson_correlation_subtitle" 
  loading="lazy" 
  width={isMatch ? "85%" : "85%"}
  style={{marginRight:'10%'}}/>
  </Grid>
  </Grid>



  <Grid style={{margin:"auto", marginTop:"5rem" }} container direction="column" alignItems="center" justify="center">  
  <CustomizedTypographyRaleway fontWeight = "bold" color="rgba(166,69,252,1)" fontSize={{ lg:30, md:25, sm:20, xs:18 }} padding={2} variant="h4">Conclusion: CellViT is a robust tool for</CustomizedTypographyRaleway>
  <CustomizedTypographyLexendExtraLight color="rgba(105,0,161,1)" fontSize={{ lg:20, md:15, sm:12, xs:12 }} variant="body2">
  <ul>
    <li>Accurately classifying gene mutations in cell images </li>
    <li>Presenting pairwise similarities of cell morphologies</li>    
  </ul>
</CustomizedTypographyLexendExtraLight> 

  </Grid>

  <Grid container direction="column" alignItems="center" justify="center">  
<CustomizedTypographyRaleway color="rgba(180,58,58,1)" fontWeight = "bold" fontSize={{ lg:30, md:25, sm:20, xs:18 }} padding={1} variant="h4">These capabilities help inform the biological relevance of potential target compounds being studied.</CustomizedTypographyRaleway>
  </Grid>


  <Grid style={{margin:"auto", marginTop:"5rem"}} container spacing={3}>  
  <Grid item xs={12} md= {7}>
  <img 
  src={how_to_use_CellViT} 
  alt="how_to_use_CellViT" 
  loading="lazy" 
  width={isMatch ? "85%" : "65%"}
  />
  </Grid>
  <Grid item xs={12} md= {5}>
  <CustomizedTypographyRaleway fontWeight = "bold" fontSize={{ lg:30, md:25, sm:20, xs:18}} padding={2} variant="h5">How to use <Link href="https://huggingface.co/cellvit/maxvit-large-tf-224/tree/main" underline="none"> CellViT</Link>(available on HuggingFace)</CustomizedTypographyRaleway>  
  <CustomizedTypographyLexendExtraLight fontSize={{ lg:20, md:15, sm:12, xs:12 }} variant="body2">
  <ul>
    <li>Feature extraction: find similarities in morphologies of cell images.</li>
    <li>Fine tuning: find patterns introduced in cells that are treated with novel compounds </li>
    <li>Transfer learning: robustly classify images treated with novel compounds, when data is sparse</li>
    </ul>
</CustomizedTypographyLexendExtraLight>

  </Grid>  
  </Grid>


  </Box>



    </Box>
   
  )
}


export default Results