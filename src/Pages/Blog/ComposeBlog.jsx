import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BlogProps.module.css";


function EditBlog(){
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [image, setImage] = useState("")
    const [body, setBody] = useState("")
    const [blog, setBlog] = useState();
    const date = new Date().toUTCString();
    const [response, setResponse] = useState("")
    const navigate = useNavigate();


    async function handlePost (e) {
        e.preventDefault();

        try {
            setBlog({
                title:title,
                author:author,
                image:image,
                body:body,
                date:date
            })
            await axios.post(`http://localhost:3500/blog`,
            blog
        );
        setResponse("Post Successful");
        navigate("/blog");
            
        } catch (error) {
            setResponse("Error Sending Post. Try Again!")
        }
    }

    return(
        <div className={styles.ComposeBlog} >
            <form onSubmit={handlePost} className={styles.BlogForm}>
                <input type="text" 
                    name="title"
                    placeholder="Title"
                    required
                    value={title} onChange={(e) => setTitle(e.target.value)}
                />
                <input type="text" 
                    name="author"
                    placeholder="Author"
                    required
                    value={author} onChange={(e) => setAuthor(e.target.value)}
                />
                <input type="text" 
                    name="pix"
                    placeholder="Image url"
                    required
                    value={image} onChange={(e) => setImage(e.target.value)}
                />
                <textarea type="text" 
                    name="body"
                    placeholder="Body"
                    required
                    value={body} onChange={(e) => setBody(e.target.value)}
                />
                <button type="submit" className={`${styles.PostBlog} ${styles.PostButton}`}>Post Blog</button>
                <p>{response}</p>
            </form>
        </div>
    )
}

export default EditBlog;