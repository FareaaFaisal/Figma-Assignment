import Header from "@/app/components/header"
import Footer from "@/app/components/footer"
import Link from "next/link"

export default function Certifications(){
    return(

       <div className="our-projects">
       <p className="text-gray-300 text-6xl ml-20 mt-10">PHOTO</p>
       <p className="text-black text-6xl ml-20"><strong>Gallery</strong></p>
  <div className="our-project-images">
    <div className="flex gap-4 mt-20 ml-20">
         <div><img src="/galleryimg1.png" alt="1" className="focus-imagethree" /></div>
         <div><img src="/galleryimg2.png" alt="2" className="focus-imagetwo" /></div>
         <div><img src="/galleryimg3.png" alt="3" className="focus-imagethree" /></div>
         <div><img src="/galleryimg4.png" alt="4" className="focus-imagefour" /></div>
         <div><img src="/galleryimg5.png" alt="5" className="focus-imagefive" /></div>
    </div>
     
     <div className="flex gap-4 mt-6 ml-20">
         <div><img src="/galleryimg6.png" alt="6" className="focus-imagethree" /></div>
         <div><img src="/galleryimg7.png" alt="7" className="focus-imagefour" /></div>
         <div><img src="/galleryimg8.png" alt="8" className="focus-imagefive" /></div>
         <div><img src="/galleryimg9.png" alt="9" className="focus-imagefour" /></div>
         <div><img src="/galleryimg10.png" alt="10" className="focus-imagefive" /></div>
     </div>
     
     <div className="flex gap-20 mt-10 ml-20 mb-20">
     <div className="focus-number"><img src="/slide-numbers.png" alt="10" className="focus-imagefive" /></div>
     <div className="focus-number"><img src="/Frame 9.png" alt="10" className="focus-imagefive" /></div>
     <div className="focus-number"><img src="/Frame 8.png" alt="10" className="focus-imagefive" /></div>
     </div>
     
      </div>
</div>

    );
};






