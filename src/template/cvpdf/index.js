import React from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/cvpdf.module.sass";

export function cvpdfTemplate() {
   return (
      <div className={styles.container}>
         <div className={styles.headerName}>
            <span>
               Carlos Ponce - <h1>Front-End Developer</h1>
            </span>
         </div>
         <div className={styles["links--container"]}>
            <Link to="/" className={styles.link}>
               <span>Port-folio</span>
               <small>clink me</small>
            </Link>
            <Link to="/" className={styles.link}>
               <span>Curriculum</span>
               <small>clink me</small>
            </Link>
         </div>
         <div className={styles.contact__links}>
            <div className={styles["contact__links--container"]}>
               <a href="mailto:srtager555@gmail.com">Mail</a>
               <a href="https://www.linkedin.com/in/srtager555" target="_blank">
                  LinkedIn
               </a>
               <a href="https://github.com/srtager555" target="_blank">
                  GitHub
               </a>
            </div>
         </div>
      </div>
   );
}