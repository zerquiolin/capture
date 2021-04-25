import React from "react";
//Pages
import AboutUs from "./Pages/AboutUs";
import Nav from "./Pages/Nav";
import OurWork from "./Pages/OurWork";
import ContactUs from "./Pages/ContactUs";
import MovieDetails from "./Pages/MovieDetails";
//Global Style
import GlobalStyle from "./Styles/GlobalStyle";
//Router
import { Switch, Route, useLocation } from "react-router-dom";
//Animation
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="capture/" exact>
            <AboutUs />
          </Route>
          <Route path="capture/work" exact>
            <OurWork />
          </Route>
          <Route path="capture/work/:id">
            <MovieDetails />
          </Route>
          <Route path="capture/contact">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
