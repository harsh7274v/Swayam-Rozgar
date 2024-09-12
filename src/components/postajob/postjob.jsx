import React from "react";
import './postjob.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';    
// import '../devsignup/devsignup.css';

export default function PostJob() {

    return(
        <>
        <body>
    <div className="main-container">
        <div className="left-container">
            <h1>Let's start with a strong title.</h1>
            <p>This helps your job post stand out to the right candidates. It’s the first thing they’ll see, so make it count!.</p>
        </div>

        <div className="right-container">
            <p>Write a title for your job post</p>
            <input type="text" placeholder="Title"/><br/><br/>
            
            <p>Example titles:</p>
            <p>
           
            <ul id="disc">
                <li>Build responsive WordPress site with booking/payment functionality</li>
                <li>Graphic designer needed to design ad creative for multiple campaigns</li>
                <li>Facebook ad specialist needed for product launch</li>
            </ul></p>

        </div>
        
    </div>
    <footer className="footer">
                <button className="footer-button left-button">Back</button>
                <button className="footer-button right-button">Next:Skills</button>
            </footer>
   
</body>
        </>
    );
}