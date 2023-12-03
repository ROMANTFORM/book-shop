import { IoLogoLinkedin, IoLogoGithub, IoLogoFacebook } from "react-icons/io5";

export default function Footer(){

    let url = '';

    return(
        <div className="footer-section">
            <div className="container">
                <div className="footer-info">    
                    <div className="footer__icon-container">
                        <a href={url} className="footer__link"><IoLogoLinkedin /></a>
                        <a href={url} className="footer__link"><IoLogoGithub /></a>
                        <a href={url} className="footer__link"><IoLogoFacebook /></a>
                    
                    
                    
                    </div>
                    <p className="footer__descr"><span>Produced by</span> &#169;Roman Tykhonovskyi</p>
                </div> 
            </div>   
        </div>
    )
}