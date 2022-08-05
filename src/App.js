import React from "react";
import { Routes, Route } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";

import Congratulations from "./pages/Congratulations/Congratulations";
import Dashboard from "./pages/Dashboard/Dashboard.js";
import Thankyou from "./pages/Thankyou/Thankyou";
import StartPage from "./pages/StartPage/StartPage";




import SafetyPage from "./pages/SafetyPage/SafetyPage";
import LanguagePage from "./pages/LanguagePage/LanguagePage";
import IntroductionSlides from "./pages/IntroductionSlides/IntroductionSlides";
import CovidStatus from "./pages/CovidStatus/CovidStatus";
import CovidSymptoms from "./pages/CovidSymptoms/CovidSymptoms.js";
import HealthConditions from "./pages/HealthConditions/HealthConditions";
import LastStep from "./pages/LastStep/LastStep.js";
import CountPage from "./pages/CountPage/CountPage";
import QuietPlace from "./pages/QuietPlace/QuietPlace";
import SingTheVowel from "./pages/SingTheVowel/SingTheVowel";
import Demo from "./pages/Demo/Demo";



function App() {
  return <div>


    <Routes>
      <Route path='/' element={<Demo></Demo>} ></Route>

      <Route path='startPage' element={<StartPage></StartPage>} ></Route>
      <Route path='safetyPage' element={<SafetyPage></SafetyPage>} ></Route>
      <Route path='introSlide' element={<IntroductionSlides />} ></Route>
      <Route path='covidStatus' element={<CovidStatus></CovidStatus>} ></Route>
      <Route path='healthCondition' element={<HealthConditions></HealthConditions>} ></Route>
      <Route path='lastStep' element={<LastStep></LastStep>} ></Route>

      <Route path='countPage' element={<CountPage />}></Route>
      <Route path='quietPlace' element={<QuietPlace />}></Route>
      <Route path='signTheVowel' element={<SingTheVowel></SingTheVowel>}></Route>
      <Route path='languagePage' element={<LanguagePage></LanguagePage>}></Route>
      <Route path='thankyou' element={<Thankyou></Thankyou>}></Route>

      <Route path="congras" element={<Congratulations></Congratulations>}></Route>
      <Route path="dashboard" element={<Dashboard></Dashboard>}></Route>
      <Route path="covidSymptoms" element={<CovidSymptoms></CovidSymptoms>}></Route>
      {/* <Route path="" element={}></Route> */}

    </Routes>






  </div>;
}

export default App;
