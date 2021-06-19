import React from 'react'

function BlogPage(props) {
    return (
        <div>
            <h1 className = "py-5 my-5">Blog {props.match.params.id}</h1>
        </div>
    )
}

export default BlogPage;