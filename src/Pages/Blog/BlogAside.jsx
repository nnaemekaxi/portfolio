import React from "react";
import { Link } from "react-router-dom"
import styles from "./BlogProps.module.css";


function BlogAside({blogs, title}){
    return(
        <div className={styles.BlogAside}>
            <section className={styles.BlogAsideMain}>
                <h1>{title}</h1>
                {blogs.map((blog) => (
                <div className={styles.BlogAsideSection} key={blog._id}>
                    
                <Link to={`/blog/${blog._id}`}> <h1>{blog.title}</h1></Link>
                    <h6>by: {blog.author}</h6>
                    </div>

            ))}
            </section>
        </div>
    )
}

export default BlogAside
