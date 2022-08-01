import React from "react";
import logo from "./logo.svg";
import "./App.css";
import StartPage from "./pages/StartPage/StartPage";
import SafetyPage from "./pages/SafetyPage/SafetyPage";
import LanguagePage from "./pages/LanguagePage/LanguagePage";
import IntroductionSlides from "./pages/IntroductionSlides/IntroductionSlides";
import CovidStatus from "./pages/CovidStatus/CovidStatus";



function App() {
  return <div>

    {/* <StartPage></StartPage> */}
    {/* <SafetyPage></SafetyPage> */}
    {/* <IntroductionSlides></IntroductionSlides> */}
    <CovidStatus></CovidStatus>



  </div>;
}

export default App;
