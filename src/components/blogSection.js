import React from 'react'
import BlogCard from "./blogCard";
import {v4 as uuid} from "uuid";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ArrowRight } from 'react-bootstrap-icons'; 

function BlogSection() {
  const blogs = [
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
  ];
  return (
    <div>
        <div className = "container text-center my-5">
            <h1 className = "font-weight-light">
                My <span className = "text-info">Blogs</span>
            </h1>
            <div className = "lead">I share my findings and views on technology in these blogs:</div>
            <div className = "row my-5 pt-3">
                {blogs.map((blog) => (
                <div className = "col-12 col-md-4" key = {uuid()}>
                    <BlogCard blog = {blog} />
                </div>
                ))}
            </div>
            <a href = "/" className = "text-right">
                <h5>See my blogs
                  <ArrowRight className="m-1" color="royalblue" size = {20}/>
                </h5>
              </a>
        </div>
    </div>
  )
}

export default BlogSection;