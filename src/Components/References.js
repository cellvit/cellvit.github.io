import React from 'react'
import { Link } from "@mui/material";
import { CustomizedTypographyLexendExtraLight } from '../styles/styles';

function References() {
  return (
    <div style={{margin:"10rem", }} >    
    <CustomizedTypographyLexendExtraLight fontSize={{ lg:20, md:15, sm:12, xs:12 }} variant="body2">
   <ol>
    <li><Link href="https://www.yourgenome.org/facts/how-are-drugs-designed-and-developed/" underline="none">How are drugs designed and developed?</Link></li>
    <li>Schlander, M., Hernandez-Villafuerte, K., Cheng, CY. et al. How Much Does It Cost to Research and Develop a New Drug? A Systematic Review and Assessment.PharmacoEconomics 39, 1243–1269 (2021)</li>
    <li><Link href="https://www.moleculardevices.com/applications/cell-imaging/cell-painting" underline="none">https://www.moleculardevices.com/applications/cell-imaging/cell-painting</Link></li>
    <li>Microscopy-Based High-Content Screening, Cell 163, Boutros et al, December 3, 2015, http://dx.doi.org/10.1016/j.cell.2015.11.007</li>
    <li>Khan AQ, Kuttikrishnan S, Siveen KS, et al. RAS-mediated oncogenic signaling pathways in human malignancies. Semin Cancer Biol. 2019;54:1-13. PMID: 29524560</li>
    <li>Ostrem JML, Shokat KM. Direct small-molecule inhibitors of KRAS: from structural insights to mechanism-based design. Nat Rev Drug Discov. 2016;15(11):771-785. PMID: 27469033</li>
    <li>Uprety D, Adjei AA. KRAS: from undruggable to a druggable cancer target. Cancer Treat Rev. 2020;89:102070. PMID: 32711246</li>
    <li>Román M, Baraibar I, López I, et al. KRAS oncogene in non-small cell lung cancer: clinical perspectives on the treatment of an old target. Mol Cancer. 2018;17(1):33. PMID: 29455666</li>
    <li>Nassar AH, Adib E, Kwiatkowski DJ. Distribution of KRASG12C somatic mutations across race, sex, and cancer type. N Engl J Med. 2021;384(2):185-187. PMID: 33497555</li>
    <li>Nadal E, Chen G, Prensner JR, et al. KRAS-G12C mutation is associated with poor outcome in surgically resected lung adenocarcinoma J. Thorac Oncol. 2014;9(10):1513-1522. PMID: 25170638</li>
    <li>Bos JL. Ras oncogenes in human cancer: a review. Cancer Res 1989; 49: 4682–9. https://pubmed.ncbi.nlm.nih.gov/2547513/</li>
    <li>Friedlaender A, Drilon A, Weiss GJ, Banna GL, Addeo A. KRAS as a druggable target in NSCLC: rising like a phoenix after decades of development failures. Cancer Treat Rev. 2020;85:101978. PMID: 32062493</li>
    <li>Jarvis LM.Have drug hunters finally cracked KRas? | June 6, 2016 Issue - Vol. 94 Issue 23 | Chemical & Engineering News. Chemical & Engineering News. https://cen.acs.org/articles/94/i23/drug-hunters-finally-cracked-KRas.html.Published. 2016. Accessed November 19, 2019.</li>
    <li><Link href="https://www.ddw-online.com/cell-painting-a-vibrant-future-for-phenotypic-drug-discovery-10813-202104/" underline="none">Cell painting: a vibrant future for phenotypic drug discovery</Link></li>
    <li><Link href="https://github.com/cytomining/DeepProfiler" underline="none">Deep Profiler Image-based profiling using deep learning</Link></li>
    <li><Link href="https://github.com/google-research/maxvit" underline="none">MaxViT: Multi-Axis Vision Transformer (ECCV 2022)</Link></li>
  </ol>
</CustomizedTypographyLexendExtraLight>
    </div>
  )
}

export default References