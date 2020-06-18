import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header, Home, Footer, ErrorPage, Test } from './components';
function App() {
  return (
    <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/test" exact component={Test} />
                <Route component={ErrorPage} />
            </Switch>
            <Footer />
    </Router>
  );
}
export default App;