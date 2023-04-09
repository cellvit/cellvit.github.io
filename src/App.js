import { BrowserRouter, Route, Routes} from "react-router-dom"
import React from "react";


//MUI imports
import CssBaseline from '@mui/material/CssBaseline';

// Components
import Home from "./Components/Home";
import Datasets from "./Components/Data";
import Motivation from "./Components/Motivation";
import References from "./Components/References";
import Team from "./Components/Team";
import Header from "./Components/Header";
import Model from "./Components/Model";
import Results from "./Components/Results";



const linksArray = ["home", "motivation", "datasets", "model", "results", "team", "references"];

function App() {
  return (
    <>
    <BrowserRouter>
    <CssBaseline />
    <Header links={linksArray} />
    <Routes>
    <Route path = '/' element= {<Home />}/>
    <Route basename={process.env.PUBLIC_URL} path = '/motivation' element= {<Motivation />}/>
    <Route basename={process.env.PUBLIC_URL} path = '/datasets' element= {<Datasets />}/>
    <Route basename={process.env.PUBLIC_URL} path = '/model' element= {<Model />}/>
    <Route basename={process.env.PUBLIC_URL} path = '/results' element= {<Results />}/>
    <Route basename={process.env.PUBLIC_URL} path = '/team' element= {<Team />}/>
    <Route basename={process.env.PUBLIC_URL} path = '/references' element= {<References />}/>     
    
    </Routes>
    
    </BrowserRouter>
    
    </>
  );
}

export default App;
