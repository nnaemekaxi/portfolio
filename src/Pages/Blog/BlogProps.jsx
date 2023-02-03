import React from "react";
import { Link } from "react-router-dom"
import styles from "./BlogProps.module.css";

function BlogProps({blogs, title, handleDelete, response}){

    return(
        <div className={styles.BlogProps}>
            <h1 className={styles.BlogPropsTitle}>{title}</h1>
            {blogs.map((blog) => (
            <div className={styles.BlogPropsMain} key={blog._id}>
                
               <Link to={`/blog/${blog._id}`}> <h1 className={styles.BlogTitle}>{blog.title}</h1></Link>
                <h6 className={styles.BlogAuthor}>by: {blog.author}</h6>
                <div className={styles.GridBody}>
                {
                    blog.image &&
                    
                    <img src={blog.image} alt="pix" className={styles.BlogImage} />
                }
                
                <p className={styles.BlogBody}>{blog.body.slice(0, 250)}...<Link to={`/blog/${blog._id}`}>Read More</Link></p>
                </div>
                <b className={styles.BlogInfo}>{blog.info}</b>
                
                <div className={styles.ButtonsDiv}>
                    <Link to={`/editblog/${blog._id}`}><button type="submit" className={styles.BlogButton}>Edit Post</button></Link>
                    <button type="submit" onClick={() => handleDelete(blog._id)} className={styles.BlogButton}>Delete Post</button>
                </div>
                <p>{response}</p>
            </div>

            ))}
        </div>
    )
}

export default BlogProps;