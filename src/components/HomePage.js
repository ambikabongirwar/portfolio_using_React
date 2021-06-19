import React from 'react';
import Title from "./title.js";
import About from "./About.js";
import ProjectSection from "./projectSection";
import BlogSection from "./blogSection";
import SkillStack from "./skillSection";
import RecommendationSection from "./recommendationSection";

function HomePage() {
    return (
        <div>
            <Title name = "Ambika Bongirwar"/>;
            <RecommendationSection />
            <SkillStack />
            <ProjectSection />
            <About />
            <BlogSection />
        </div>
    )
}

export default HomePage;