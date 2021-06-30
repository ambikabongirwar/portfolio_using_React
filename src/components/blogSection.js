import React from 'react'
import BlogCard from "./blogCard";
import {v4 as uuid} from "uuid";
import {Consumer} from "../context";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ArrowRight } from 'react-bootstrap-icons'; 
import {Link} from "react-router-dom";

function BlogSection() {
    return (
        <Consumer>
            {(value) => {
                const {blogs} = value;
                return (
                  <div>
                      <div className = "container text-center my-5">
                          <h1 className = "font-weight-light">
                              My <span className = "text-info">Blogs</span>
                          </h1>
                          <div className = "lead">I share my findings and views on technology in these blogs:</div>
                          <div className = "row my-5 pt-3">
                              {blogs.slice(0, 3).map((blog) => (
                              <div className = "col-12 col-md-4" key = {uuid()}>
                                  <BlogCard blog = {blog} />
                              </div>
                              ))}
                          </div>
                          <Link to = "/allblogs" className = "float-right">
                              <h5>See my blogs
                                <ArrowRight className="m-1" color="royalblue" size = {20}/>
                              </h5>
                            </Link>
                      </div>
                  </div>
                )
            }}
        </Consumer>
    )
}

export default BlogSection;