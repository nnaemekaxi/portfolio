import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./Blog.module.css";
import BlogAside from "./BlogAside";
import BlogProps from "./BlogProps";

function Blog () {
    const[blogs, setBlogs] = useState([]);
    const [response, setResponse] = useState("");
    const [isLoading, setIsLoading] = useState("Loading....");

    const navigate = useNavigate();

    useEffect (() => {
        const FetchData = async () => {
            setIsLoading(isLoading);
            try {
                const mydata = await axios.get("http://localhost:3500/blog", 
            )
            const post = mydata.data.post
            setBlogs(post)
            setIsLoading(false);
            } catch (error) {
                console.log(error.message)
            }
            
        } 
        FetchData();
    }, [isLoading])
    
    const handleDelete = async (_id) => {

        try {
            const response = await axios.delete(`http://localhost:3500/blog/${_id}`);
            setResponse(response.data.message);
            navigate("/");
        } catch (error) {
            setResponse("Couldn't Delete Post. Try Again!");
            console.log(error.message)
        }
        
     }

    return(
        <div>
            { isLoading && <h1>{isLoading}</h1>
            
            }
            { blogs && <div className={styles.Blog}>
            <section className={styles.BlogProps}>
            <BlogProps 

                blogs={blogs}
                title="All blogs"

                handleDelete = {handleDelete}
                response = {response}
                
            />
            </section>
            <section className={styles.BlogAside}>
            <Link to="/addblog"><button type="submit" className={styles.AddBlogButton}>Add Blog</button></Link>
            <BlogAside 
            
                blogs={blogs}
                title="Recent Posts"
            />
            </section>
            </div>
            }
        </div>
    )
}

export default Blog;