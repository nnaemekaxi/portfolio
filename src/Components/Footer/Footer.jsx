import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import facebook from "../../Assets/Footer/facebook.png";
import twitter from "../../Assets/Footer/twitter.png";
import instagram from "../../Assets/Footer/instagram.png";
import email from "../../Assets/Footer/email.png";
import telegram from "../../Assets/Footer/telegram.png";

function Footer(params) {
    return(
        <div className={styles.Footer}>
            <div className={styles.FooterMain}>
            <section className={styles.Name}>
                <Link to="/"><h1>junetech</h1></Link>
                <ul className={styles.Socials}>
                    <li><Link to="#"> <img src= {facebook} alt="#" /></Link></li>
                    <li><Link to="#"> <img src= {twitter} alt="#" /></Link></li>
                    <li><Link to="#"> <img src= {instagram} alt="#" /></Link></li>
                    <li><Link to="#"> <img src= {telegram} alt="#" /></Link></li>
                    <li><Link to="#"> <img src= {email} alt="#" /></Link></li>
                </ul>
            </section>
            <div className={styles.Advert}>
            <section className={styles.Services}>
                <h2>Services</h2>
                <h4>FrontEnd Web Development</h4>
                <h4>BackEnd Web Development</h4>
                <h4>FullStack Web Development</h4>
            </section>
            <section className={styles.Portfolio}>
                <h2>Portfolio</h2>
                <h4>Completed Projects</h4>
                <h4>Ongoing Projects</h4>
            </section>
            <section className={styles.Extras}>
                <h2>Extras</h2>
                <h4>Documentation</h4>
                <h4>Script Writing</h4>
                <h4>Freelancing</h4>
            </section>
            </div>
            </div>
        </div>
    )
}

export default Footer;