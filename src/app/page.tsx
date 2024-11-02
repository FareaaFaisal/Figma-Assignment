import Image from "next/image";

export default function Home() {
  return (
 <div className="full-homepage">
  <div className="maincontent">

 <div className="project-container">
   <h1 className="project">PROJECT</h1>
   <h1 className="lorum">Lorum</h1>

   <div className="button-container">
     <img src="/Frame 9.png" alt="arrow-button" className="button-img" />
     <img src="/Frame 8.png" alt="arrow-button" className="button-img" />
   </div>
 </div>

 <div className="mainimage">
   <Image
     src="/homepic.png"
     alt="web page logo"
     width={770}
     height={829}
     layout="responsive"
   />
 </div>
 </div>
{/* ----------- ABOUT SECTION --------- */}
 <div className="About-section">
  <div className="about-images">
  <div className="align-img-about">
  <img src="/aboutimg1.png" alt="building-image" className="aboutimg" /><br/><br/>
  <img src="/aboutimg2.png" alt="building-image" className="aboutimg" /><br/><br/>
  </div>
 
 <img src="/aboutimg3.png" alt="building-image" className="aboutimg" />
 </div>
 <div className="About-text">
 <h1 className="aboutheading">About</h1>
 <p className="aboutpara">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
 <img src="/readmorebutton.png" alt="read more button"/><br/><br/><br/><br/><br/><br/><br/>
 </div>
 
 </div>

 {/* ----------------- MAIN FOCUS AREA ------------------ */}

<div className="main-focus">
<h1>Main Focus/Mission Statement</h1>
  <div className="mainfocus-content">
    <div className="focus-item">
      <div className="focus-number"><img src="/1.png" alt="1" className="focus-imageone" /></div>
      <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.<br/> Sed efficitur, lectus et<br/> facilisis placerat.</p>
    </div>
    <div className="focus-item">
      <div className="focus-number"><img src="/2.png" alt="2" className="focus-imagetwo" /></div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br/>elit. Sed efficitur, lectus<br/>et facilisis placerat, magna mauris <br/>porttitor tortor, a auctor est</p>
    </div>
  </div>
</div>

 {/* ----------------- OUR PROJECTS AREA ------------------ */}

 <div className="our-projects">
<h1>Our Projects</h1>
  <div className="our-project-images">
    <div className="flex gap-2">
      <div className="focus-number">
      <div className="container">
           <img src="img1overlay.png" alt="1"/>
           <div className="centered">Sample<br/>Projects<br/><span className="flex gap-2 text-sm">View More <img src="/arrow-2-right-long.png"/></span></div>
      </div><br/>
      </div>
      <div className="focus-number"><img src="/img2.png" alt="2" className="focus-imagetwo" /><br/></div>
    </div>
     
     <div className="flex gap-3">
     <div className="focus-number"><img src="/img3.png" alt="3" className="focus-imagethree" /></div>
      <div className="focus-number"><img src="/img4.png" alt="4" className="focus-imagefour" /></div>
      <div className="focus-number"><img src="/img5.png" alt="5" className="focus-imagefive" /></div>
     </div>
     
     <div className="button-div">
     <button type="button" className="button">
    <img src="/our-projects-button.png" alt="Button Image"/>
      </button>
     </div>

      </div>
</div>
{/* ----------------- OUR CONTACTS AREA ------------------ */}
<div className="our-contacts">
<h1>Contacts Us</h1>
<div className="contact-container">
  <div className="contact-form">
       <form method="get">
          <input type="text" placeholder="Name "/>
          <input type="tel" placeholder="Phone Number *" required/>
          <input type="email" placeholder="Email *" required/>
          <input type="text" placeholder="Interested In" />
          <textarea placeholder="message *" rows={6} required></textarea>
       </form>
  </div>
  <div className="contact-image"><img src="/manimg.png" alt="man-image" width={749} height={700}/></div>
</div>

 <div className="contact-button-div">
     <button type="button" className="contact-button">
    <img src="/sendemailbutton.png" alt="Button Image"/>
      </button>
     </div>
</div>


</div>
          

          
  );
}
