import React from 'react';
import { Routes, Route, Link } from "react-router-dom";


const Demo = () => {

    const manu = <>


        <li>
            <Link to='/dashboard'>Dashboard</Link>
            <Link to='/startPage'>StartPage</Link>
        </li>
        <li><Link to='/safetyPage'>SafetyPage</Link></li>
        <li> <Link to='/introSlide'>IntroductionSlides</Link></li>

        <li><Link to='/covidStatus'>CovidStatus</Link></li>
        <li><Link to='/healthCondition'>HealthConditions</Link></li>

        <li> <Link to='/lastStep'>LastStep</Link></li>
        <li> <Link to='/countPage'>CountPage</Link></li>

        <li> <Link to='/signTheVowel'>SingTheVowel</Link></li>
        <li><Link to='/languagePage'>LanguagePage</Link></li>

        <li> <Link to='/thankyou'>thankyou</Link></li>
        <li><Link to='/congras'>Congratulations</Link></li>

        <li><Link to='/covidSymptoms'>CovidSymptoms</Link></li>
        <li>  <Link to='/quietPlace'>QuietPlace</Link>
        </li>

    </>
    return (
        <div>



            <ul class="menu menu-compact bg-base-100 w-56 p-2 rounded-box">
                {manu}
            </ul>

        </div>
    );
};

export default Demo;