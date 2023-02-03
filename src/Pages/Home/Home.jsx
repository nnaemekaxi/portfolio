import React from "react";
import styles from "./Home.module.css";

function Home() {
    return(
        <div className={styles.Home}>
            <section className={styles.HomeMain}>
            <h1>Elom Nnaemeka Joseph</h1>
            <p>I am a fullstack web developer. For frontend web develoment, I have mastery of such languages as: HTML, CSS, JAVASCRIPT and REACTJS.
            For backend web development, I have mastery of such languages as: PYTHON (DJANGO) and NODEJS
            </p>
            <p>You can checkout my works/social media presence by clicking any of the following:
            </p>
                <button><a href="https://facebook.com/nnaemeka11"> Facebook </a></button>
                <button><a href="https://twitter.com/nnaemekaxi"> Twitter </a></button>
                <button><a href="https://github.com/nnaemekaxi"> Github </a></button>
                <button><a href="https://L.com/nnaemeka11"> LinkedIn </a></button>
                <button><a href="https://facebook.com/nnaemeka11"> Facebook </a></button>
            <img src="" alt="" />
            </section>
        </div>
    )
}

export default Home;