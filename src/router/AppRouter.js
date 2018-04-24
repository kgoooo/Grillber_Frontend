import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import HomePage from "../components/HomePage";
import HeroPage from "../components/HeroPage";
import SignUpPage from "../components/SignUpPage";
import HowitWorks from "../components/HowitWorks";
import About from "../components/AboutUs";
import ContactUs from "../components/ContactUs";
import LoginPage from "../components/LoginPage";
import AboutUs from "../components/AboutUs";
import Header from  "../components/Header"
import OrderPage from "../components/OrderPage";

const AppRouter = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={HeroPage} />
      <Route path="/signup" component={SignUpPage} />
      <Route path="/howitworks" component={HowitWorks} />
      <Route path="/about" component={AboutUs} />
      <Route path="/contact" component={ContactUs} />
      <Route path="/login" component={LoginPage} />
      <Route path="/order" component={OrderPage}/>
    </Switch>
  </div>
);

export default AppRouter;