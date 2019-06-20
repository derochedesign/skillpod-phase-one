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
        {/* <Route exact path="/skill" component={LoginPage} /> Go somewhere!!! */}
        <Route exact path="/skill/:skill"  render={(props) => <SkillHomePage skill={props.match.params.skill} {...props} />  } />
        <Route exact path="/skill/:skill/:type/:comp/:page" render={(props) => <CompetencyPage skill={props.match.params.skill} type={props.match.params.type} comp={props.match.params.comp} page={props.match.params.page} {...props} /> } />
      </div>
    </Router>
  ); // end return
}
export default App;
