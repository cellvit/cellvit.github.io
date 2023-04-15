import React from 'react'
import { Grid, Box, useTheme, useMediaQuery, Link } from "@mui/material";
// import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper} from "@mui/material";
import { TableContainer, Table, TableBody, TableRow, TableCell, Paper} from "@mui/material";


import { CustomizedTypographyRaleway } from '../styles/styles';
import { CustomizedTypographyLexendExtraLight } from '../styles/styles';

//Assets
import maxvit_arch from './Assets/maxvit_arch.png';
import maxvit_model_arch2 from './Assets/maxvit_model_arch2.png';
import fine_tuned_model from './Assets/fine_tuned_model.png';
import w_and_b_runs from './Assets/w_and_b_runs.png';



function Model() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  return (
  <Box   
  style={{marginTop:"5rem", marginLeft:"auto", marginRight:"auto", marginBottom:"auto"}} 
  width="100%"
  justifyContent="center"
  >
  <Box>
  <Grid style={{margin:"auto", }} container spacing={3}>
  <Grid item xs={12} md= {5} lg={7}>
  <CustomizedTypographyRaleway fontWeight = "bold" fontSize={{ lg:30, md:25, sm:20, xs:18 }} padding={2} variant="h4">CellViT Model</CustomizedTypographyRaleway> 

 <CustomizedTypographyLexendExtraLight fontSize={{ lg:20, md:15, sm:12, xs:12 }} variant="body2">
  <ul>
    <li><Link href="https://huggingface.co/cellvit/maxvit-large-tf-224/tree/main" underline="none"> CellViT</Link> is a fine-tuned model based on <Link href="https://github.com/google-research/maxvit" underline="none"> MaxViT</Link><sup>16</sup>, a family of hybrid (CNN+ViT) image classification models that achieves better performance than both SoTA ConvNet and Transformer models. </li>
    <li>The MaxViT model architecture consists of a stem, four MaxViT blocks and a Head with pooling and fully connected layers. Each MaxViT block is made up of three components: 1) an inverted linear bottleneck layer from MobileNetV2  (the basic building block of EfficientNet architectures), 2) the local, block attention mechanism, and 3) the global, grid attention mechanism.</li>
    </ul>
</CustomizedTypographyLexendExtraLight>
  </Grid>
  {/* <Grid item xs={12} md= {6}></Grid> */}
  <Grid item xs={12} md= {7} lg={5}>
  <img 
  src={maxvit_arch} 
  alt="maxvit_arch" 
  loading="lazy" 
  width={isMatch ? "85%" : "85%"}
  style={{marginRight:'10%'}}/>
  </Grid>
  </Grid>

  <Grid style={{margin:"auto", }} container spacing={3}>
  <Grid item xs={12} md= {5} lg={7}>
  <CustomizedTypographyRaleway fontWeight = "bold" fontSize={{ lg:30, md:25, sm:20, xs:18 }} padding={2} variant="h4">How is it different from a typical CNN?</CustomizedTypographyRaleway> 

 <CustomizedTypographyLexendExtraLight fontSize={{ lg:20, md:15, sm:12, xs:12 }} variant="body2">
  <ul>
    <li>A typical CNN gradually obtains a global receptive field by multi-layer architectures and down-sampling operators. Some of the initial Vision transformer implementations gather long range visual dependencies with a single, self-attention layer, but this is infeasible at larger dimensions because the attention operator requires quadratic complexity.14</li>
    <li>MaxViT uses a block self-attention structure for sparse local attention and a grid self-attention structure for sparse global attention.</li>
    </ul>
</CustomizedTypographyLexendExtraLight>
  </Grid>
  {/* <Grid item xs={12} md= {6}></Grid> */}
  <Grid item xs={12} md= {7} lg={5}>
  <img 
  src={maxvit_model_arch2} 
  alt="maxvit_model_arch2" 
  loading="lazy" 
  width={isMatch ? "85%" : "85%"}
  style={{marginRight:'10%'}}/>
  </Grid>
  </Grid>


  <Grid style={{margin:"auto", }} container spacing={3}>  
  <Grid item xs={12} md= {7}>
  <img 
  src={fine_tuned_model} 
  alt="fine_tuned_model" 
  loading="lazy" 
  width={isMatch ? "100%" : "85%"}
  />
  </Grid>
  <Grid item xs={12} md= {5}>
  <CustomizedTypographyRaleway fontWeight = "bold" fontSize={{ lg:30, md:25, sm:20, xs:18}} padding={2} variant="h5">Fine-tuning with PyTorch</CustomizedTypographyRaleway>  
  <CustomizedTypographyLexendExtraLight fontSize={{ lg:20, md:15, sm:12, xs:12 }} variant="body2">
  <ul>
    <li>This model requires 3 channel images that are 224x224.  The final layer was replaced with our number of classes which is 14.</li>
    <li>Custom pytorch classifier and image augmentation methods were developed for fine tuning with cell painting images, in order to handle channel extraction and image transformation.</li>
    
  </ul>
</CustomizedTypographyLexendExtraLight>
  </Grid>  
  </Grid>


  <Grid style={{margin:"auto", }} container spacing={3}>
  <Grid item xs={12} md= {5} lg={7}>
  <CustomizedTypographyRaleway fontWeight = "bold" fontSize={{ lg:30, md:25, sm:20, xs:18 }} padding={2} variant="h4">Hyperparameter tuning</CustomizedTypographyRaleway> 

 <CustomizedTypographyLexendExtraLight fontSize={{ lg:20, md:15, sm:12, xs:12 }} variant="body2">
  <ul>
    <li>For hyper parameter tuning, we started by following the general recommendations given to us for fine tuning a MaxViT large model on the original paper15 and adjusted them as we went.</li>
    <li>Due to gpu memory limitations in AWS (24Gb), we limited the batch size to 16.</li>
    </ul>
</CustomizedTypographyLexendExtraLight>
  </Grid>
  {/* <Grid item xs={12} md= {6}></Grid> */}
  <Grid item xs={12} md= {7} lg={5}>
  <TableContainer component={Paper}>
  <Table aria-label='simple table'>
  {/* <TableHead>
    <TableRow>
      <TableCell>id</TableCell>
      <TableCell align='center'>Training parameter name</TableCell>
      <TableCell align='center'>Parameter values</TableCell>
      
    </TableRow>
  </TableHead> */}
  <TableBody>
    {tableData.map((row) => (
      <TableRow
      key={row.id}
      sx={{ '&:last-child td, &:last-child th': { border: 0}}}>
      {/* <TableCell>{row.id}</TableCell> */}
      <TableCell align='center'>{row.parameter_name}</TableCell>
      <TableCell align='center'>{row.value}</TableCell>
      </TableRow>
    ))}
  </TableBody>

  </Table>
  </TableContainer>
 
  </Grid>
  </Grid>

  <Grid style={{margin:"auto", }} container spacing={3}>  
  <Grid item xs={12} md= {7}>
  <img 
  src={w_and_b_runs} 
  alt="w_and_b_runs" 
  loading="lazy" 
  width={isMatch ? "85%" : "85%"}
  />
  </Grid>
  <Grid item xs={12} md= {5}>
  <CustomizedTypographyRaleway fontWeight = "bold" fontSize={{ lg:30, md:25, sm:20, xs:18}} padding={2} variant="h5">Observability with Weights & Biases</CustomizedTypographyRaleway>  
  <CustomizedTypographyLexendExtraLight fontSize={{ lg:20, md:15, sm:12, xs:12 }} variant="body2">
  <ul>
    <li>In order to help with observability during training which takes multiple days, we integrated <Link href="https://wandb.ai/site" underline="none"> Weights and Biases</Link> for checking our model stats live.</li>
    <li>Since model training is costly we also added checkpointing, if something goes wrong we can reload the model and train from where we left off.</li>
    
  </ul>
</CustomizedTypographyLexendExtraLight>
  </Grid>  
  </Grid>

  

  
  
  </Box>
  </Box>

  )
}

const tableData = [{
  "id": 1,
  "parameter_name": "Model Name",
  "value": "maxvit_large_tf_224",
  
}, {
  "id": 2,
  "parameter_name": "Batch size",
  "value": "16",
 
}, {
  "id": 3,
  "parameter_name": "Train epochs",
  "value": "27",
  
}, {
  "id": 4,
  "parameter_name": "Optimizer",
  "value": "AdamW",
 
}, {
  "id": 5,
  "parameter_name": "Adam epsilon",
  "value": "1e-6",
 
}, {
  "id": 6,
  "parameter_name": "Weight decay",
  "value": "1e-8",
 
}, {
  "id": 7,
  "parameter_name": "Learning rate",
  "value": "5e-5",
 
}]
export default Model