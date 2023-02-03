import React, {useState} from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import menu from "../../Assets/Header/menu.png"
import closer from "../../Assets/Header/close.png"

function Header() {
    const [myMenu, setMyMenu] = useState(false)

    function showMenu(){
        setMyMenu(true);
    }
    function hideMenu(){
        setMyMenu(false);
    }

    return(
        <div className={styles.Header}>
            <header className={styles.HeaderHeader}>
                <main className={styles.HeaderMain}>
                    <Link to="/"><h1>junetech</h1></Link>
                   <button onClick={showMenu}><img src={menu} alt="menu" className={styles.Menu} /></button> 
                </main>
                <nav className={styles.HeaderNav}>
                    <ul className={styles.HeaderNavList1}>
                        <li className={styles.HeaderNavList1El}><Link to="/blog"> Blog</Link></li>
                        <li className={styles.HeaderNavList1El}><Link to="/activity">Activity</Link></li>
                        <li  className={styles.HeaderNavList1El}><Link to="/contact">Contact</Link></li>
                    </ul>
                    <ul className={styles.HeaderNavList2}>
                        <li className={styles.HeaderNavList2El}><Link to="/sign-up">Sign Up</Link></li>
                        <li className={styles.HeaderNavList2El}><Link to="/login">Login</Link></li>
                    </ul>
                    <ul className={styles.HeaderNavList3}>
                       <button onClick={showMenu}> <img src={menu} alt="menu" /></button>
                    </ul>
                </nav>
            </header>
            { myMenu && 
            <header className={styles.SideBar}>
                <section className={styles.MenuCloser}>
                        <button onClick={hideMenu}><img src={closer} alt="menu" className={styles.Closer} /></button>
                </section>
            <nav className={styles.SideBarHeaderNav}>
                    <ul className={styles.SideBarHeaderNavList1}>
                        <li className={styles.SideBarHeaderNavList1El}><Link to="/blog"> Blog</Link></li>
                        <li className={styles.SideBarHeaderNavList1El}><Link to="/activity">Activity</Link></li>
                        <li  className={styles.SideBarHeaderNavList1El}><Link to="/contact">Contact</Link></li>
                    </ul>
                    <ul className={styles.SideBarHeaderNavList2}>
                        <li className={styles.SideBarHeaderNavList2El}><Link to="/sign-up">Sign Up</Link></li>
                        <li className={styles.SideBarHeaderNavList2El}><Link to="/login">Login</Link></li>
                    </ul>
                    
                </nav>
            </header>
            }
        </div>
    )
}

export default Header;