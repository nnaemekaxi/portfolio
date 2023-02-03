import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./BlogProps.module.css";


function ComposeBlog(){
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [image, setImage] = useState("")
    const [body, setBody] = useState("")
    const [blog, setBlog] = useState();
    const date = new Date().toUTCString();
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect (() => {
        const FetchData = async () => {
            try {
                const mydata = await axios.get(`http://localhost:3500/blog/${id}`)
                const post = mydata.data.post
                setTitle(post.title);
                setAuthor(post.author);
                setImage(post.image);
                setBody(post.body);
            } catch (error) {
                console.log(error.message)
            }
            
        } 
        FetchData();

    }, [id])

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
            await axios.patch(`http://localhost:3500/blog/${id}`,
            blog
        );
        navigate("/blog");
            
        } catch (error) {
            console.log(error.message)
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
            </form>
        </div>
    )
}

export default ComposeBlog;