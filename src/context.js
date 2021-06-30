import React, {Component} from "react";

const Context = React.createContext();

export class Provider extends Component {
    addProjectHandler = (newProject) => {
        this.setState({
            projects: [newProject, ...this.state.projects],
        })
    }
    /*handler = (action, newObject) => {
        switch (action) {
            case "ADD_PROJECT":
                this.setState ({
                    projects: [newObject, ...this.state.projects],
                })
                break;
            case "ADD_BLOG":
                this.setState ({
                    blogs: [newObject, ...this.state.blogs],
                })
                break;
            case "ADD_RECOMMENDATION":
                this.setState ({
                    recommendations: [newObject, ...this.state.recommendations],
                })
                break;
        }
    };*/

    state = {
        //handler: this.handler,
        addProjectHandler: this.addProjectHandler,
        projects: [
            {
                id: 1,
                title: "Project 1",
                imageUrl: "https://www.shapebureau.com/wp-content/uploads/2017/01/web-design-1.jpg",
                excerpt: "This is my project about...",
                body: "body 1",
            },
            {
                id: 2,
                title: "Project 2",
                imageUrl: "https://img.roidfa.com/easy.sudoku.puzzle.solver.free/Images/Logo/sudoku-free-classic-sudoku-puzzles-icon.jpg?version=150",
                excerpt: "This is my project about...",
                body: "body 2",
            },
            { 
                id: 3,
                title: "Project 3",
                imageUrl: "http://1.bp.blogspot.com/-3n3FV3yHmGE/UenxsHtms-I/AAAAAAAAIZo/sKuQGxTWY4U/s1600/TDRS+satellite.jpg",
                excerpt: "This is my project about...",
                body: "body 3",
            },
            { 
                id: 4,
                title: "Project 4",
                imageUrl: "https://www.shapebureau.com/wp-content/uploads/2017/01/web-design-1.jpg",
                excerpt: "This is my project about...",
                body: "body 4",
            },
        ],

        skills: [
            {
                id: 1,
                name: "HTML5",
                imageUrl: "https://storage.googleapis.com/unschool-portfolio-website/html5.png",
                starsTotal: 3,
                starsActive: 2,
            },
            {
                id: 2,
                name: "CSS 3",
                imageUrl: "https://storage.googleapis.com/unschool-portfolio-website/css3.png",
                starsTotal: 3,
                starsActive: 3,
            },
            {
                id: 3,
                name: "Javascript",
                imageUrl: "https://storage.googleapis.com/unschool-portfolio-website/javascript.png",
                starsTotal: 3,
                starsActive: 2,
            },
            {
                id: 4,
                name: "Bootstrap 4",
                imageUrl: "https://storage.googleapis.com/unschool-portfolio-website/bootstrap4.png",
                starsTotal: 3,
                starsActive: 1,
            },
            {
                id: 5,
                name: "React",
                imageUrl: "https://storage.googleapis.com/unschool-portfolio-website/react.png",
                starsTotal: 3,
                starsActive: 3,
            },
            {
                id: 6,
                name: "MySQL",
                imageUrl:
                  "https://storage.googleapis.com/unschool-portfolio-website/mysql.png",
                starsTotal: 3,
                starsActive: 2,
              },
              {
                id: 7,
                name: "Python",
                imageUrl:
                  "https://storage.googleapis.com/unschool-portfolio-website/python.png",
                starsTotal: 3,
                starsActive: 3,
              },
              {
                id: 8,
                name: "Flask",
                imageUrl:
                  "https://storage.googleapis.com/unschool-portfolio-website/flask.png",
                starsTotal: 3,
                starsActive: 2,
              },
              
        ],

        recommendations: [
            {
                id: 1,
                name: "Random person 1",
                company: "ABC company",
                designation: "CEO",
                message: "She is a very good engineer with excellent coding capabilities",
            },
            {
                id: 2,
                name: "Random person 2",
                company: "ABC company",
                designation: "Director",
                message: "Recommendation 2",
            },
            {
                id: 3,
                name: "Random person 3",
                company: "ABC company",
                designation: "Manager",
                message: "Recommendation 3",
            },
            {
                id: 4,
                name: "Random person 4",
                company: "ABC company",
                designation: "Manager",
                message: "Recommendation 4",
            }
        ],

        blogs: [
            {
              id: 1,
              title: "Blog 1",
              imageUrl: "https://www.shapebureau.com/wp-content/uploads/2017/01/web-design-1.jpg",
              excerpt: "This is my blog about...",
            },
            {
              id: 2,
              title: "Blog 2",
              imageUrl: "https://img.roidfa.com/easy.sudoku.puzzle.solver.free/Images/Logo/sudoku-free-classic-sudoku-puzzles-icon.jpg?version=150",
              excerpt: "This is my blog about...",
            },
            {
              id: 3,
              title: "Blog 3",
              imageUrl: "http://1.bp.blogspot.com/-3n3FV3yHmGE/UenxsHtms-I/AAAAAAAAIZo/sKuQGxTWY4U/s1600/TDRS+satellite.jpg",
              excerpt: "This is my blog about...",
            },
          ],
    };

    render() {
        return  (
            <Context.Provider value = { this.state }>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;