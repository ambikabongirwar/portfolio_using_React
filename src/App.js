import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Contact from "./components/Contact";
import WriteRecommendation from "./components/WriteRecommendation";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NotFound from "./components/NotFound";
import ProjectPage from "./components/ProjectPage";
import BlogPage from "./components/BlogPage";
import HomePage from "./components/HomePage";
//import RecommendationModal from "./components/reccomendationAlert";

function App() {
    return (
        <BrowserRouter>
            <Navbar />;
            <Switch>
                <Route exact path = "/">
                    <HomePage />
                </Route>
                <Route exact path = "/contact">
                    <Contact />
                </Route>
                <Route exact path = "/write-a-recommendation">
                    <WriteRecommendation />
                </Route>
                <Route exact path = "/project/:id" component = {ProjectPage}></Route>
                <Route exact path = "/blog/:id" component = {BlogPage}></Route>
                <Route component = {NotFound} />
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}

export default App;
