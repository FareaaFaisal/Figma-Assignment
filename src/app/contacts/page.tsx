

export default function Contacts(){
    return(
     <div className="Contact-page">
<div className="Contact-text">
<p className="text-gray-300 text-6xl ml-20 mt-10">Contact</p>
       <p className="text-black text-6xl ml-20 mt-2"><strong>Information</strong></p>
       <p className="text-black text-2xl ml-20 mt-10"><strong>AL-HAMD CENTRE</strong></p>
       <p className="text-gray-500 text-2xl ml-20 flex flex-wrap">SHOP 12.FIVESTAR ARCADE,Gulshan-e-Iqbal, Karachi</p>
       <p className="text-black text-2xl ml-20 mt-10"><strong>0300 2222222</strong></p>
       <p className="text-gray-500 text-2xl ml-20 mt-6">alhamdcentre@gmail.com</p>
     
     <button type="button" className="ml-20 mt-10 mb-10">
    <img src="/contact-us-button.png" alt="Button Image"/>
      </button>
     
</div>
      
          <div className="map-container">
          <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28950.31706085242!2d67.03625557660929!3d24.905156321379284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f9f7833f471%3A0x213c72dc0714375!2sAL%20HAMD%20HARDWARE.%20ELECTRIC.%20SANITORY%20N%20PAINT!5e0!3m2!1sen!2s!4v1730549704405!5m2!1sen!2s"
             width="600"
             height="450"
             style={{border:0}}
             allowFullScreen
             loading="lazy" 
             referrerPolicy="no-referrer-when-downgrade">

             </iframe>
        
         </div>
    
     </div>
    );
};