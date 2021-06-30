import React from 'react';
import {Consumer} from "../context";
import RecommendationCard from "./recommendationCard";
import {v4 as uuid} from "uuid";

function RecommendationSection() {
    return (
        <Consumer>
            {(value) => {
                const {recommendations} = value;
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
            }}
        </Consumer>
    )
}

export default RecommendationSection;