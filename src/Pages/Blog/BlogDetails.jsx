import React, { useEffect, useState} from "react";
import axios from "axios"
import { useParams } from "react-router-dom";
import styles from "./BlogProps.module.css";

function BlogDetails(){

    const [blog, setBlog] = useState({})
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const { id } = useParams();
    

        useEffect (() => {
            const FetchData = async () => {
                try {
                    const mydata = await axios.get(`http://localhost:3500/blog/${id}`)
                    const post = mydata.data
                if(!post){
                    setIsLoading(true);
                }else{
                    setBlog(post.post)
                }
                
                } catch (error) {
                    setError(error.message)
                }
                
            } 
            FetchData();

        }, [id])
        

    return(
        <div>
            {
                isLoading && <h1>Loading...</h1>
            }
            {
                error && <div><h1>{error}</h1></div>
            }
            {
                blog && 
                
                <div className={styles.BlogDetails}>
                    <h1>{blog.title}</h1>
                   <h4> by: {blog.author}</h4>
                   <img src={blog.image} alt="pix" />
                   <p>{blog.body}</p>
                   <i>(Published on: {blog.date})</i>
                </div>
            }
        </div>
    )
}

export default BlogDetails;