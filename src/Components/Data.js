import React, { useState } from 'react';
import { Box, Tabs, Tab, Button, Link, tabsClasses } from "@mui/material";

import { CustomizedTypographyLexendExtraLight } from '../styles/styles';

export default function Datasets() {
  const [value, setValue] = useState(0)
  const handleTabs=(e, val)=> {
    console.warn(val)
    setValue(val)
  }
  return (
    <Box className="tab" style={{marginTop:"15rem", marginLeft:"auto", marginRight:"auto", marginBottom:"auto"}}>
    <Box className="tab-headers">
    
    {/* <AppBar position="static"> */}
      <Tabs value={value} onChange={handleTabs}
      sx={{
        "& button": {borderRadius: 1},
        "& button: hover": { borderColor: "red"},
        [`& .${tabsClasses.scrollButtons}`]: {
            '&.Mui-disabled': { opacity: 0.3 },
          },
      }}
      variant="scrollable"
      // scrollButtons={true}
      allowScrollButtonsMobile={true}
      
      
     
      >
      <Tab className="tab-header" sx={{border:1, borderColor: "divider"}} label={(<CustomizedTypographyLexendExtraLight fontWeight={"bold"} fontSize={{ lg:20, md:20, sm:15, xs:12 }} variant="subtitle2">Cell Painting Images</CustomizedTypographyLexendExtraLight>)} />
      <Tab className="tab-header" sx={{border:1, borderColor: "divider"}} label={(<CustomizedTypographyLexendExtraLight fontWeight={"bold"} fontSize={{ lg:20, md:20, sm:15, xs:12 }} variant="subtitle2">Moshkov Dataset</CustomizedTypographyLexendExtraLight>)} />
      <Tab className="tab-header" sx={{border:1, borderColor: "divider"}} label={(<CustomizedTypographyLexendExtraLight fontWeight={"bold"} fontSize={{ lg:20, md:20, sm:15, xs:12 }} variant="subtitle2">Genetic Mutations</CustomizedTypographyLexendExtraLight>)} />
      <Tab className="tab-header" sx={{border:1, borderColor: "divider"}} label={(<CustomizedTypographyLexendExtraLight fontWeight={"bold"} fontSize={{ lg:20, md:20, sm:15, xs:12 }} variant="subtitle2">AWS Data Access</CustomizedTypographyLexendExtraLight>)} />
      </Tabs>
      </Box>
      <Box className="tab-body" sx={{ width: "max_content", borderBottom: 1, borderRight: 1, borderLeft: 1, borderTop: 1 }}>
    {/* </AppBar> */}
    <TabPanel value={value} index={0}>
    <CustomizedTypographyLexendExtraLight fontSize={{ lg:20, md:20, sm:15, xs:12 }} padding={1} variant="body1">The <Link href="https://registry.opendata.aws/cellpainting-gallery/" underline="none"> Cell Painting Gallery</Link> is a collection of image datasets created using the <Link href="https://pubmed.ncbi.nlm.nih.gov/27560178/" underline="none">Cell Painting</Link> assay.</CustomizedTypographyLexendExtraLight>
  <CustomizedTypographyLexendExtraLight fontSize={{ lg:20, md:20, sm:15, xs:12 }} padding={1} variant="body1">The images of cells are captured by microscopy imaging, and reveal the response of various labeled cell components to whatever treatments are tested, which can include genetic perturbations, chemicals or drugs, or different cell types. The datasets can be used for diverse applications in basic biology and pharmaceutical research, such as identifying disease-associated phenotypes, understanding disease mechanisms, and predicting a drug’s activity, toxicity, or mechanism of action (<Link href="https://carpenter-singh-lab.broadinstitute.org/files/anne/files/141_Chandrasekaran_NatRevDrugDiscov_2020.pdf" underline="none">Chandrasekaran et al 2020</Link>). </CustomizedTypographyLexendExtraLight>
  <CustomizedTypographyLexendExtraLight fontSize={{ lg:20, md:20, sm:15, xs:12 }} padding={1} variant="body1">This collection is maintained by the <Link href="https://carpenter-singh-lab.broadinstitute.org/" underline="none">Carpenter–Singh lab</Link> and the <Link href="https://cimini-lab.broadinstitute.org/" underline="none">Cimini lab</Link> at the <Link href="https://www.broadinstitute.org/" underline="none">Broad Institute</Link>.</CustomizedTypographyLexendExtraLight>
    </TabPanel>
    <TabPanel value={value} index={1}>
    <CustomizedTypographyLexendExtraLight fontSize={{ lg:20, md:20, sm:15, xs:12 }} padding={1} variant="body1">The images specifically used for <Link href="https://github.com/cankoc95/cellvit" underline="none">CellViT</Link> were obtained from the Broad Institute’s <Link href="https://cellpainting-gallery.s3.amazonaws.com/index.html#cpg0019-moshkov-deepprofiler/broad/" underline="none">Moshkov dataset</Link>, which consist of ~8.4 million cell painting images.</CustomizedTypographyLexendExtraLight>
    <CustomizedTypographyLexendExtraLight fontSize={{ lg:20, md:20, sm:15, xs:12 }} variant="body1" padding={1}> The dataset is made of the following cell painting image types:</CustomizedTypographyLexendExtraLight>
 <CustomizedTypographyLexendExtraLight fontSize={{ lg:20, md:20, sm:15, xs:12 }} variant="body1">
  <ul>
    <li>Chemically treated cells (3.007 million cell images)</li>
    <li>Chemical control cells (3.219 million cell images)</li>
    <li>Genetically modified/mutated cells (1.636 million cell images)</li>
    <li>Genetically unmodified/wild-type cells (560.7k cell images)</li>
  </ul>
</CustomizedTypographyLexendExtraLight>
<CustomizedTypographyLexendExtraLight fontSize={{ lg:20, md:20, sm:15, xs:12 }} variant="body1" padding={1}>The Moshkov dataset was used to train the Broad Institute’s most current CNN-based <Link href="https://github.com/cytomining/DeepProfiler" underline="none">DeepProfiler</Link> tool, which was released in June, 2021.  The DeepProfiler is an EfficientNet based model that process the 5 channels of the cell painting images and produce single-cell morphology embeddings that produce improved performance from prior cell painting analysis methods using ImageNet and Broad Institute’s own <Link href="https://github.com/DistributedScience/Distributed-CellProfiler" underline="none">CellProfiler</Link> tool.<sup>15</sup></CustomizedTypographyLexendExtraLight>
    </TabPanel>
    <TabPanel value={value} index={2}>
    <CustomizedTypographyLexendExtraLight fontSize={{ lg:20, md:20, sm:15, xs:12 }} variant="body1" padding={1}> For <Link href="https://huggingface.co/cellvit/maxvit-large-tf-224/tree/main" underline="none">CellViT</Link>, a select subset of the genetically modified/ mutated and genetically unmodified/wild-type cell images were chosen for training and validation purposes (total of ~27K images).  The chosen images with genetic mutations represent missense variant expressions of regulatory genes and oncogenes, which represent classes of genes that play important roles in biological pathways.  The corresponding wild-type cell images for each regulatory/oncogene were also selected.</CustomizedTypographyLexendExtraLight>
    <CustomizedTypographyLexendExtraLight fontSize={{ lg:20, md:20, sm:15, xs:12 }} variant="body1" paddingTop={1} paddingLeft={1}>Regulatory gene expression images:</CustomizedTypographyLexendExtraLight>
 <CustomizedTypographyLexendExtraLight fontSize={{ lg:20, md:20, sm:15, xs:12 }} variant="body1">
   <ul>
    <li>AKT1: E17K variant (2k images), wildtype (2k images)</li>
    <li>CDC42: T17N variant (2k images), wildtype (2k images)</li>
    <li>RHOA: Q63L variant (1.6k images), wildtype (2k images)</li>
    </ul>
</CustomizedTypographyLexendExtraLight>
<CustomizedTypographyLexendExtraLight fontSize={{ lg:20, md:20, sm:15, xs:12 }} variant="body1" padding={1}>Oncogenes expression images:</CustomizedTypographyLexendExtraLight>
 <CustomizedTypographyLexendExtraLight fontSize={{ lg:20, md:20, sm:15, xs:12 }} variant="body1">
  <ul>
    <li>BRAF: V600E variant (1.9k images), wildtype (2k images)</li>
    <li>KRAS: G12V variant (2k images), wildtype (2k images)</li>
    <li>RAF1: L613V variant (2k images), wildtype (2k images)</li>
    </ul>
</CustomizedTypographyLexendExtraLight>
<CustomizedTypographyLexendExtraLight fontSize={{ lg:20, md:20, sm:15, xs:12 }} variant="body1" padding={1}>Empty (control, no gene expression): </CustomizedTypographyLexendExtraLight>
 <CustomizedTypographyLexendExtraLight fontSize={{ lg:20, md:20, sm:15, xs:12 }} variant="body1">
  <ul>
    <li>2k images</li>
   
  </ul>
</CustomizedTypographyLexendExtraLight>
    </TabPanel>
    <TabPanel value={value} index={3}>
    <CustomizedTypographyLexendExtraLight fontWeight = "bold" fontSize={{ lg:20, md:20, sm:15, xs:12 }} padding={1} variant="body1">Resources on AWS</CustomizedTypographyLexendExtraLight>
  <CustomizedTypographyLexendExtraLight fontSize={{ lg:20, md:20, sm:15, xs:12 }} padding={1} style={{marginLeft:"60px"}} variant="body1">Description</CustomizedTypographyLexendExtraLight>
  <CustomizedTypographyLexendExtraLight fontSize={{ lg:20, md:20, sm:15, xs:12 }} style={{marginLeft:"64px"}} variant="body1">Cell Painting data, comprising fluorescence microscopy cell images (TIFF), extracted features (CSV), and associated metadata (CSV and TXT).</CustomizedTypographyLexendExtraLight>
  <CustomizedTypographyLexendExtraLight fontSize={{ lg:20, md:20, sm:15, xs:12 }} style={{marginLeft:"64px"}} variant="body1">Resource type</CustomizedTypographyLexendExtraLight>
  <CustomizedTypographyLexendExtraLight fontSize={{ lg:20, md:20, sm:15, xs:12 }} style={{marginLeft:"64px"}} variant="body1">S3 Bucket</CustomizedTypographyLexendExtraLight>
  <CustomizedTypographyLexendExtraLight fontWeight = "bold" fontSize={{ lg:20, md:20, sm:15, xs:12 }} style={{marginLeft:"64px"}} variant="body1">Amazon Resource Name (ARN)</CustomizedTypographyLexendExtraLight>
  <CustomizedTypographyLexendExtraLight fontSize={{ lg:20, md:20, sm:15, xs:12 }}  style={{marginLeft:"64px"}} variant="body1" color="red">arn:aws:s3:::cellpainting-gallery</CustomizedTypographyLexendExtraLight>
  <CustomizedTypographyLexendExtraLight fontWeight = "bold" fontSize={{ lg:20, md:18, sm:20, xs:14 }} style={{marginLeft:"64px"}} variant="body1">AWS Region</CustomizedTypographyLexendExtraLight>
  <CustomizedTypographyLexendExtraLight fontSize={{ lg:20, md:20, sm:15, xs:12 }} style={{marginLeft:"64px"}} variant="body1" color="red">us-east-1</CustomizedTypographyLexendExtraLight>
  <CustomizedTypographyLexendExtraLight fontWeight = "bold" fontSize={{ lg:20, md:20, sm:15, xs:12 }} style={{marginLeft:"64px"}} variant="body1">AWS CLI Access (No AWS account required)</CustomizedTypographyLexendExtraLight>
  <CustomizedTypographyLexendExtraLight fontSize={{ lg:20, md:20, sm:15, xs:12 }} style={{marginLeft:"64px"}} variant="body1" color="red">aws s3 ls --no-sign-request s3://cellpainting-gallery/</CustomizedTypographyLexendExtraLight>
  <CustomizedTypographyLexendExtraLight fontWeight = "bold" fontSize={{ lg:20, md:20, sm:15, xs:12 }} style={{marginLeft:"64px"}} variant="body1">Explore</CustomizedTypographyLexendExtraLight>
  <Button variant="body1" style={{marginLeft:"64px"}} href="https://github.com/broadinstitute/cellpainting-gallery" fontSize={{ lg:20, md:20, sm:15, xs:12 }} sx={{						
            fontWeight: "bolder",
            color: "blue", 
            
            }}><CustomizedTypographyLexendExtraLight>Documentation</CustomizedTypographyLexendExtraLight></Button>
  <Button variant="body1" style={{marginLeft:"64px"}} href="https://cellpainting-gallery.s3.amazonaws.com/index.html" fontSize={{ lg:20, md:20, sm:15, xs:12 }} sx={{						
              fontWeight: "bolder",
              color: "blue",							
              
							}}><CustomizedTypographyLexendExtraLight>Browse Bucket</CustomizedTypographyLexendExtraLight></Button>
    </TabPanel>
    </Box>
    </Box>
  );
}
function TabPanel(props)
{
  const {children, value, index} = props;
  return(<div>
    {
      value===index && (
        <h1>{children}</h1>
      )
    }
  </div>)
}

// export default Data


