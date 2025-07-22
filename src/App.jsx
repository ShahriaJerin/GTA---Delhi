import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import 'remixicon/fonts/remixicon.css'


const App = () => {
  let[showContent,setShowContent] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group",{
      rotate:10,
      duration:4,
      ease:"power4.inOut",
      transformOrigin:"50% 50%",
    }).to(".vi-mask-group",{
      scale:10,
      duration:2,
      delay:-1.8,
      ease:"expo.easeInOut",
      transformOrigin:"50% 50%",
      opacity:0,
      onUpdate: function(){
        if(this.progress()>= 0.9){
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      }
    })
  })

  useGSAP(()=>{
    const main = document.querySelector(".main");
    main?.addEventListener("mousemove",function(e){
      const xMove = (e.clientX / window.innerWidth - 0.5) *60;
      gsap.to(".main .text" ,{
        x: `${xMove*0.4}%`,
      })
      gsap.to(".sky" ,{
        x: xMove,
      })
      gsap.to(".bg" ,{
        x: xMove*1.7,
      })
    });
  },[showContent]);


  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && <div className='main w-full'>
        <div className='landing h-screen w-full bg-black'>
            <div className="navbar w-full py-7 px-10 asolute top-0 left-0 z-[10] absolute ">
                <div className="logo flex gap-5">
                  <div className="lines flex flex-col gap-[5px]">
                    <div className="line w-15 h-[6px] bg-white"></div>
                    <div className="line w-9 h-[6px] bg-white"></div>
                    <div className="line w-4 h-[6px] bg-white"></div>
                  </div>
                  <h3 className='text-3xl text-white -mt-[10px]'>Rockstars</h3>
                </div>
            </div>

            <div className='imgDiv relative h-screen w-full overflow-hidden'>
                <img className=' sky object-cover w-full h-full absolute top-0 left-0 scale-[1.3]' src="./sky.png" alt="" />
                <img className='bg object-cover w-full h-full absolute top-0 left-0 scale-[1.3]' src="./bg.png" alt="" />
                <div className="text text-white flex flex-col absolute left-230 -translate-x-1/2">
                    <h1 className="text-[8rem] leading-none -ml-50 text-white shadow-blackish">grand</h1>
                    <h1 className='text-[8rem] leading-none ml-50 shadow-blackish'>theft</h1>
                    <h1 className='text-[8rem] leading-none -ml-75 shadow-blackish'>auto</h1>
                </div>
                <img  className='absolute -bottom-[55%] left-1/2 -translate-x-1/2 scale-[.8]' src="./girlbg.png" alt="" />
            </div>

            <div className="btmbar text-white absolute bottom-0 left-0 w-full px-10 py-15 bg-gradient-to-t from-black to-transparent">
                <div className='gap-3 flex items-center relative top-10'>
                    <i className ="text-4xl ri-arrow-down-line"></i>
                    <h3 className='text-xl font-medium font-[Montserrat]'>Scroll down</h3>
                </div>
                <img className='h-[45px] absolute top-28 left-1/2 -translate-x-1/2 -translate-y-1/2' src="./ps5.png" alt="" />
            </div>
          

        </div>

        <div className=" h-[57vw] w-full bg-black flex items-center justify-center pt-35">
            <div className="cntr w-full h-screen flex text-white ">
                <div className="limg w-1/2 f-full relative pt-10 ">
                    <img className='absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[.7]' src="./imag.png" alt="" />
                </div>
                <div className="rg w-[43%]">
                    <h1 className='text-8xl'>Still Running ,</h1>
                    <h1 className='text-8xl'>Not Hunting</h1>
                    <p className='font-[Montserrat] pt-10 pr-10 text-[2.2vh]'>Welcome to <strong>GTA Delhi</strong> – the fusion of Delhi's chaos and Los Santos' thrill. Dive into India's most immersive GTA roleplay experience!</p>
                    <p className='font-[Montserrat] pt-10 pr-10 text-[2.2vh]'>Create your story, build your gang, rule the streets – only at GTA Delhi. </p>
                    <button className="px-4 py-2 bg-yellow-300 text-black text-2xl mt-16 rounded transition duration-300 hover:shadow-glow">Download Now</button>
                </div>
               
            </div>
             
        </div>
      </div> }
    </>
  )
}

export default App