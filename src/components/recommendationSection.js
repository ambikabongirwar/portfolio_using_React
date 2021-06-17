import React from 'react'
import RecommendationCard from "./recommendationCard";
import {v4 as uuid} from "uuid";

function RecommendationSection() {
    const recommendations = [
        {
            title: "She is a very good engineer with excellent coding capabilities",
            excerpt: "Recommendation 1 by person1",
        },
        {
            title: "Recommendation 2",
            excerpt: "Recommendation 2 by person2",
        },
        {
            title: "Recommendation 3",
            excerpt: "Recommendation 3 by person3",
        },
    ];
  return (
    <div className = "container-fluid">
        <div className = "row d-flex flex-nowrap text-center scrollbar overflow-auto py-5 my-10">
            {recommendations.map((recommendation) => (
                <div className = "col-12 col-md-4" key = {uuid()}>
                    <RecommendationCard recommendation = {recommendation} />
                </div>
            ))}
        </div>
    </div>
  )
}

export default RecommendationSection;