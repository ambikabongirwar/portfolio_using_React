import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Title from "./components/title.js";
import About from "./components/About.js";
import Footer from "./components/Footer.js";
import ProjectSection from "./components/projectSection";
import BlogSection from "./components/blogSection";
import SkillStack from "./components/skillSection";
import RecommendationSection from "./components/recommendationSection";
import Contact from "./components/Contact";
import WriteRecommendation from "./components/WriteRecommendation";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NotFound from "./components/NotFound";
//import RecommendationModal from "./components/reccomendationAlert";

function App() {
    return (
        <BrowserRouter>
            <Navbar />;
            <Switch>
                <Route exact path = "/">
                    <Title name = "Ambika Bongirwar"/>;
                    <RecommendationSection />
                    <SkillStack />
                    <ProjectSection />
                    <About />
                    <BlogSection />
                </Route>
                <Route exact path = "/contact">
                    <Contact />
                </Route>
                <Route exact path = "/write-a-recommendation">
                    <WriteRecommendation />
                </Route>
                <Route component = {NotFound} />
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}

export default App;
