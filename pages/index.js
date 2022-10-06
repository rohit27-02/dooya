/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Home() {

  return (

    <div className="text-[#252525]">
      <Head>
        <title>
          Vyoma | Home
        </title>
      </Head>
      <div className="absolute top-0 -z-10 overflow-hidden">
        <img className="scale-125" src="/slider01.webp"></img>
      </div>
      <div className="mt-[25vw]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,256L13.3,261.3C26.7,267,53,277,80,250.7C106.7,224,133,160,160,122.7C186.7,85,213,75,240,96C266.7,117,293,171,320,186.7C346.7,203,373,181,400,192C426.7,203,453,245,480,261.3C506.7,277,533,267,560,256C586.7,245,613,235,640,229.3C666.7,224,693,224,720,202.7C746.7,181,773,139,800,117.3C826.7,96,853,96,880,80C906.7,64,933,32,960,37.3C986.7,43,1013,85,1040,112C1066.7,139,1093,149,1120,138.7C1146.7,128,1173,96,1200,117.3C1226.7,139,1253,213,1280,208C1306.7,203,1333,117,1360,96C1386.7,75,1413,117,1427,138.7L1440,160L1440,320L1426.7,320C1413.3,320,1387,320,1360,320C1333.3,320,1307,320,1280,320C1253.3,320,1227,320,1200,320C1173.3,320,1147,320,1120,320C1093.3,320,1067,320,1040,320C1013.3,320,987,320,960,320C933.3,320,907,320,880,320C853.3,320,827,320,800,320C773.3,320,747,320,720,320C693.3,320,667,320,640,320C613.3,320,587,320,560,320C533.3,320,507,320,480,320C453.3,320,427,320,400,320C373.3,320,347,320,320,320C293.3,320,267,320,240,320C213.3,320,187,320,160,320C133.3,320,107,320,80,320C53.3,320,27,320,13,320L0,320Z"></path></svg>
      </div>

      <div style={{ fontFamily: `'Cormorant Garamond', serif` }} className="flex flex-col justify-evenly px-[8vw] -mt-[25vw] bg-white mx-[8vw] text-[4.6875vw] drop-shadow-xl h-[29vw] w-[50vw]">
        Elegant Floral<br></br> Fabric Curtains
        <div style={{ fontFamily: `"montserrat",sans-serif`, fontWeight: 700 }} className="text-[1.25vw] flex items-center ">
          <p className=" hover:text-[#abd890] cursor-pointer "> Learn More <span className="text-[2vw] ml-[1vw]">→</span></p>
        </div>

      </div>

      <div className="flex ">
        <div className="w-[46vw] h-[41.5vw] overflow-hidden ml-[8vw] mt-[8vw] drop-shadow-xl">
          <img className="h-[41.5vw] hover:scale-125 transition-all duration-1000 object-cover" src="/deconovo-uKBSq6O1BMw-unsplash.jpg"></img>
        </div>
        <div className="drop-shadow-lg mt-[16vw] -mx-[3vw] mr-[8vw] h-[38vw] w-[47.5vw] bg-[#D5F3C1] flex flex-col justify-evenly px-[4vw]">
          <h1 className="text-[3.6vw]" style={{ fontFamily: `'Cormorant Garamond', serif` }}>Welcome</h1>
          <p className="text-[1.25]" style={{ fontFamily: `"montserrat",sans-serif`, }}>Dooya strives for excellence by providing customized solutions. Our knowledgeable experts selects the most genuine and experienced
            vendors after in-depth research.</p>
          <div style={{ fontFamily: `"montserrat",sans-serif`, fontWeight: 700 }} className="text-[1.25vw]   flex items-center ">
            <p className="hover:text-white  cursor-pointer transition a"> Learn More <span className="text-[2vw] ml-[1vw]">→</span></p> 
          </div>
        </div>
      </div>

      <div style={{ fontFamily: `'Cormorant Garamond', serif` }} className="flex mt-[8vw] text-[3.6vw] text-center justify-evenly">
        <div className="flex flex-col justify-center items-center">
          <span>Blinds</span>
          <img className="w-[8.75vw]" src="/icon_3_300x300.webp"></img>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span>Motors</span>
          <img className="w-[8.75vw]" src="/icon_1_300x300.webp"></img>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span>Accessories</span>
          <img className="w-[8.75vw]" src="/icon_0b224ac6-a78e-4336-a05d-5da7881371eb_300x300.webp"></img>
        </div>
      </div>

    </div>
  )
}
