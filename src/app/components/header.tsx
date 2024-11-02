//figma Assignment

import Image from 'next/image';
import Link from "next/link";

export default function Header() {
    return (
        <div className="header">
              <div className="logo-site-container">
                          <div className="logo">
                                    <Image 
                                        src="/logo.png" 
                                        alt="web page logo" 
                                        width={70} 
                                        height={43.71}
                                    />
                          </div>

            
              </div>

            <ul className="header-button">
                <li className='MAIN'><Link href="/">MAIN</Link></li>
                <li><Link href="/about-us">GALLERY</Link></li>
                <li><Link href="/contact-us">PROJECTS</Link></li>
                <li><Link href="/our-branches">CERTIFICATIONS</Link></li>
                <li><Link href="/our-branches">CONTACTS</Link></li>
            </ul>
        </div>
    );
}

