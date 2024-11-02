export default function Projects(){
    return(
     <div className="Projects-Page">

       <p className="text-gray-300 text-6xl ml-20 mt-10">Our</p>
       <p className="text-black text-6xl ml-20 mb-6"><strong>Projects</strong></p>

       <div className="Prject-collection">
        <div className="div-1">
                <div className="div1-image">
                 <img src="/div1-image.png" alt="1" className="ml-20 mb-10 mt-20" width={500} height={350}/>
                </div>
        
                <div className="div1-text">
                 <h1 className="text-2xl text-gray-400 mt-24 mb-10">Sample Project 1</h1>
                 <p className="flex flex-wrap">Lorem Ipsum is simply dummy text of the printing<br/> and typesetting industry. Lorem Ipsum has been <br/>the industry's standard dummy text ever since <br/>the 1500s, when an unknown printer took a galley<br/>of type and scrambled it to make a type specimen<br/> book.</p>
                     <button type="button" className="ml-20 mt-10 mb-10">
                      <img src="/viewmore-button.png" alt="Button Image"/>
                     </button>
                </div>
        </div>
       
        <div className="div-2">
                <div className="div2-image">
                 <img src="/div2-image.png" alt="2" className="ml-20 mb-10 mt-20" width={500} height={350}/>
                </div>
        
                <div className="div2-text">
                 <h1 className="text-2xl text-gray-400 mt-24 mb-10">Sample Project 2</h1>
                 <p className="flex flex-wrap">Lorem Ipsum is simply dummy text of the printing<br/> and typesetting industry. Lorem Ipsum has been <br/>the industry's standard dummy text ever since <br/>the 1500s, when an unknown printer took a galley<br/>of type and scrambled it to make a type specimen<br/> book.</p>
                     <button type="button" className="ml-20 mt-10 mb-10">
                      <img src="/viewmore-button.png" alt="Button Image"/>
                     </button>
                </div>
        </div>


        <div className="div-3">
                <div className="div3-image">
                 <img src="/div3-image.png" alt="3" className="ml-20 mb-10 mt-20" width={500} height={350}/>
                </div>
        
                <div className="div3-text">
                 <h1 className="text-2xl text-gray-400 mt-24 mb-30">Sample Project 3</h1>
                 <p className="flex flex-wrap">Lorem Ipsum is simply dummy text of the printing<br/> and typesetting industry. Lorem Ipsum has been <br/>the industry's standard dummy text ever since <br/>the 1500s, when an unknown printer took a galley<br/>of type and scrambled it to make a type specimen<br/> book.</p>
                     <button type="button" className="ml-20 mt-10 mb-10">
                      <img src="/viewmore-button.png" alt="Button Image"/>
                     </button>
                </div>
                     
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