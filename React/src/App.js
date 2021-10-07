import NavigationBar from "./components/Navigation/NavigationBar";
import UserDetails from "./components/Pages/UserDetails/UserDetails";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import CommonLoanDetails from "./components/Pages/ApplyLoanPage/CommonLoanDetails";
import { useSelector } from "react-redux";
import Home from "./components/Pages/StaticPages/Home";
import { lazy, Suspense } from "react";

const AboutPage = lazy(() =>
  import("./components/Pages/StaticPages/AboutPage")
);
const LandingPage = lazy(() =>
  import("./components/Pages/LandingPage/LandingPage")
);
function App() {
  const isLoggedIn = useSelector((a) => a.auth.isLoggedIn);

  return (
    <Router>
      <NavigationBar></NavigationBar>
      {!isLoggedIn ? (
        <Switch>
          <Suspense fallback={<div>loading...</div>}>
            <Route exact path="/About" component={AboutPage}></Route>
            <Route exact path="/" component={LandingPage}></Route>
          </Suspense>
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/About" component={AboutPage}></Route>
          <Route exact path="/UserDetails" component={UserDetails}></Route>
          <Route exact path="/ApplyLoan" component={CommonLoanDetails} />
          <Route path="/" component={Home}></Route>
        </Switch>
      )}
    </Router>
  );
}

export default App;
