import React from 'react'
import { Link, Box } from "@mui/material";
import { CustomizedTypographyLexendExtraLight } from '../styles/styles';

function References() {
  return (
    <Box style={{marginTop:"7rem", marginLeft:"auto", marginRight:"auto", marginBottom:"auto"}} justifyContent="center" width="100%">    
    <CustomizedTypographyLexendExtraLight fontSize={{ lg:20, md:15, sm:12, xs:12 }} variant="body2">
   <ol>
   <li><Link href="https://visikol.com/services/in-vitro/cell-painting-assay/?utm_term=cell%20painting&utm_source=adwords&utm_medium=ppc&utm_campaign=Cell+Painting&hsa_src=g&hsa_kw=cell%20painting&hsa_mt=p&hsa_net=adwords&hsa_ver=3&hsa_ad=597874822967&hsa_tgt=kwd-857603169549&hsa_acc=4440962479&hsa_cam=17237870874&hsa_grp=136878349859&gclid=CjwKCAjwiOCgBhAgEiwAjv5whJOvCCgMpWFjj02reIVTRPqgi1Ux7fSS6y8wxBYU-kWuyXsUdnePdRoCbNQQAvD_BwE" underline="none">What is Cell Painting?</Link></li>
    <li><Link href="https://www.yourgenome.org/facts/how-are-drugs-designed-and-developed/" underline="none">How are drugs designed and developed?</Link></li>
    <li><Link href="https://www.moleculardevices.com/applications/cell-imaging/cell-painting" underline="none">https://www.moleculardevices.com/applications/cell-imaging/cell-painting</Link></li>
    <li><Link href="https://medium.com/techiepedia/binary-image-classifier-cnn-using-tensorflow-a3f5d6746697" underline="none">Binary Image classifier CNN using TensorFlow</Link></li>
    <li>Schlander, M., Hernandez-Villafuerte, K., Cheng, CY. et al. How Much Does It Cost to Research and Develop a New Drug? A Systematic Review and Assessment.PharmacoEconomics 39, 1243–1269 (2021)</li>  
    <li>Khan AQ, Kuttikrishnan S, Siveen KS, et al. RAS-mediated oncogenic signaling pathways in human malignancies. Semin Cancer Biol. 2019;54:1-13. PMID: 29524560</li>
    <li>Ostrem JML, Shokat KM. Direct small-molecule inhibitors of KRAS: from structural insights to mechanism-based design. Nat Rev Drug Discov. 2016;15(11):771-785. PMID: 27469033</li>
    <li>Jarvis LM.Have drug hunters finally cracked KRas? | June 6, 2016 Issue - Vol. 94 Issue 23 | Chemical & Engineering News. Chemical & Engineering News. https://cen.acs.org/articles/94/i23/drug-hunters-finally-cracked-KRas.html.Published. 2016. Accessed November 19, 2019.</li>
    <li>Friedlaender A, Drilon A, Weiss GJ, Banna GL, Addeo A. KRAS as a druggable target in NSCLC: rising like a phoenix after decades of development failures. Cancer Treat Rev. 2020;85:101978. PMID: 32062493</li>
    <li><Link href="https://www.ddw-online.com/cell-painting-a-vibrant-future-for-phenotypic-drug-discovery-10813-202104/" underline="none">Cell painting: a vibrant future for phenotypic drug discovery</Link></li>
    <li><Link href="https://github.com/cytomining/DeepProfiler" underline="none">Deep Profiler Image-based profiling using deep learning</Link></li>
    <li><Link href="https://github.com/google-research/maxvit" underline="none">MaxViT: Multi-Axis Vision Transformer (ECCV 2022)</Link></li>
    <li><Link href="https://arxiv.org/pdf/2204.01697.pdf" underline="none">MaxViT: Multi-Axis Vision Transformer</Link></li>
    <li>Systematic morphological profiling of human gene and allele function via Cell Painting, Rohbahn et al, eLife Computational and Systems Biology,  May 2017</li>    
  </ol>
</CustomizedTypographyLexendExtraLight>
    </Box>
  )
}

export default References