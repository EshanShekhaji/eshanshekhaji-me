import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub, faDiscord } from "@fortawesome/free-brands-svg-icons";

export default function Footer()
{
    return(
        <footer className="footer">
            <div>
                <h3 className="footer-madeby">Made by Eshan <span class="footer-aka">(aka Koei32)</span></h3>
                <h3 className="footer-copyright">© Eshan Shekhaji 2022. All rights reserved.</h3>
            </div>
            <hr />
            <div className="icons">
                <a href="https://www.instagram.com/eshanmshekhaji/" className="icon">
                    <FontAwesomeIcon icon={faInstagram}/>
                </a>
                <a href="https://github.com/EshanShekhaji" className="icon">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://discord.gg/CgReGGeR" class="icon">
                    <FontAwesomeIcon icon={faDiscord} />
                </a>
            </div>
        </footer>
    )
}