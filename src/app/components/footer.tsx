//figma Assignment

import Image from 'next/image';
import Link from "next/link";

export default function Footer() {
    return (

<footer className="footer">
    <div className="footer-container">
    <div className="logo">
                  <Image 
                      src="/logofooter.png" 
                      alt="web page logo" 
                      width={70} 
                      height={43.71}
                  />
        </div>
        <div className="footer-section">
            <h2>Information</h2>
            <ul>
                <li><a href="#">Main</a></li>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Certifications</a></li>
                <li><a href="#">Contacts</a></li>
            </ul>
        </div>

        <div className="footer-section">
            <h2>Contacts</h2>
            <ul>
                <li><img src="/mapicon.png"/>1234 Sample Street<br/>
                Austin, Texas 7B704</li>
                <br/>
                <li><img src="/callicon.png"/>(123) 456-7890</li>
                <br/>
                <li><img src="/mailicon.png"/>info@example.com</li>
            </ul>
        </div>
        
        <div className="footer-section">
            <h2>Social Media</h2>
            <ul className="social-icons">
                
                <li><a href="#"><img src="/facebookicon.png"/></a></li>
                <li><a href="#"><img src="/twittericon.png"/></a></li>
                <li><a href="#"><img src="/linked-in.png"/></a></li>
                <li><a href="#"><img src="/pinteresticon.png"/></a></li>
            </ul>
        </div>
    </div>
    
    <div className="copyright"> 
<hr className="hr"/>
<br/>
        <p className='copyrightline'>&copy; 2021 All rights reserved.</p>
    </div>
</footer>


      
    );
}


