import React, { Component } from 'react';
import RecommendationCard from "./recommendationCard";
import {v4 as uuid} from "uuid";

class RecommendationModal extends Component {
    state = { 
        recommendations: [
            {
                title: "Recommendation 1",
                excerpt: "Recommendation 1 by person1",
            },
            {
                title: "Recommendation 2",
                excerpt: "Recommendation 1 by person1",
            },
            {
                title: "Recommendation 3",
                excerpt: "Recommendation 1 by person1",
            },
        ]
     };
    render() { 
        return ( 
            <div className = "container-fluid">
                <div className = "row d-flex flex-nowrap text-center scrollbar overflow-auto py-5 my-10">
                    {this.state.recommendations.map((recommendation) => (
                    <div className = "col-12 col-md-4" key = {uuid()}>
                        <RecommendationCard recommendation = {recommendation} />
                    </div>
                    ))}
                </div>
            </div>
        );
    }
}
 
export default RecommendationModal;