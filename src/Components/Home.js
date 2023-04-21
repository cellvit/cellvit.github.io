import React from "react";
// import { Link } from "react-router-dom"

// MUI imports
import { Button, Box } from "@mui/material";

//Components

import { CustomizedTypographyRaleway } from "../styles/styles";

//Assets
import callpaintimage2 from "./Assets/callpaintimage2.jpg";

function Home() {
  return (
    <>
      <Box>
        <img src={callpaintimage2} alt="cellpaint" style={{ width: "100%",position: "absolute", height: "100vh", objectFit: "cover" }} />
        <div
          style={{
            position: "relative",
            // zIndex: "100",
            // top: "250px",
            // left: "50%",
            textAlign: "center",
            paddingTop:"15rem"
          }}
        >
          <CustomizedTypographyRaleway
            fontSize={{ lg: 70, md: 60, sm: 45, xs: 30 }}
            style={{ color: "white", fontWeight: "bolder" }}
          >
            Welcome to CellViT
          </CustomizedTypographyRaleway>
          <CustomizedTypographyRaleway
            variant="body1"
            paragraph
            fontSize={{ lg: 35, md: 30, sm: 20, xs: 16 }}
            style={{ color: "white", fontWeight: "bolder", align: "center" }}
          >
            Accelerating drug and biomarker discovery with AI-based cell painting
          </CustomizedTypographyRaleway>

          <Button
            variant="outlined"
            color="error"
            href="https://huggingface.co/cellvit/maxvit-large-tf-224/tree/main"
            sx={{
              color: "white",
              position: "relative",
            }}
          >
            <CustomizedTypographyRaleway fontSize={{ lg: 30, md: 25, sm: 16, xs: 12 }} fontWeight={"bold"}>
              TRY OUR MODEL
            </CustomizedTypographyRaleway>
          </Button>
        </div>
      </Box>
    </>
  );
}

export default Home;
