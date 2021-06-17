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
//import RecommendationModal from "./components/reccomendationAlert";

function App() {
    return (
        <div>
            <Navbar />;
            <Title name = "Ambika Bongirwar"/>;
            <RecommendationSection />;
            <SkillStack />;
            <ProjectSection />;
            <About />;
            <BlogSection />;
            <Footer />;
        </div>
    )
}

export default App;
