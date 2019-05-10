import React, { useState } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import {IndexPage, DashboardPage, GoalsPage, SignupPage, LoginPage, HelpPage, SkillHomePage, CompetencyPage, PortfolioEditPage, PortfolioDisplayPage, PortfolioCreatePage} from 'components/page';


const App = props => {
  
  // const [navSettings, setNavSettings] = useState({
  //   collapsed: true,
  //   more: true,
  //   hidden: false
  // });
  
  return (
    <Router>
      <div className="app">
        {/* <TipsPopup /> */}
        <Route exact path="/" component={IndexPage} />
        <Route path="/yourgoal" component={GoalsPage} />
        <Route path="/dashboard" component={DashboardPage}/>
        <Route exact path="/portfolio" component={PortfolioDisplayPage} />
        <Route path="/portfolio/create" component={PortfolioCreatePage} />
        <Route path="/portfolio/edit" component={PortfolioEditPage} />
        <Route path="/help" component={HelpPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/skill" component={SkillHomePage} /> {/*put literal skill name here*/}
        <Route path="/competency/1" component={CompetencyPage} />
        <Route path="/competency/2" component={CompetencyPage} />
        <Route path="/competency/3" component={CompetencyPage} />
        <Route path="/competency/4" component={CompetencyPage} />
      </div>
    </Router>
  ); // end return
}
export default App;
