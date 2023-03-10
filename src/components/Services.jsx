import React from "react";
import servicesVideo from "@/assets/poliVideo.mp4";
import PageSection from "@/components/PageSection";
import { AiOutlineMail } from "react-icons/ai";

const Services = () => {
  return (
    <PageSection
      name="Portada"
      title="Proyecto De Investigación Formativa "
      
    >
      <div className="flex flex-col lg:flex-row items-center justify-center gap-16 text-lg">
        <div className="flex flex-col gap-4 w-full lg:w-1/2 p-8 shadow-xl shadow-black rounded-lg">
          
          <p className="text-center">
            Santiago Ospina  
          </p>
          <p className="text-center">
          Isabella Salazar  
          </p>
          <p className="text-center">
          Bryan Sañudo  
          </p>
          
         
          
          
          
          
          <div className="flex items-center gap-4 justify-center mt-10">
            <a href="mailto: saospina9@poligran.edu.co">
            <AiOutlineMail />
            </a>
          
            <p className=" ">
            saospina9@poligran.edu.co
            </p>
          </div>
          <div className="flex items-center gap-4 justify-center">
            <a href="mailto: issalazar2@poligran.edu.co">
            <AiOutlineMail />
            </a>
          
            <p className=" ">
            issalazar2@poligran.edu.co
            </p>
          </div>
          <div className="flex items-center gap-4 justify-center mb-10">
            <a href="mailto: brsanudo@poligran.edu.co">
            <AiOutlineMail />
            </a>
          
            <p className=" ">
            brsanudo@poligran.edu.co
            </p>
          </div>
          
          <p className="text-center">Desarrollo De Aplicaciones Web </p>
          <p className="text-center">Neider Xavier Vergara Humánez</p>
        
        
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <a
            href="https://www.instagram.com/p/CogCoiuuub4/"
            target="_blank"
            rel="noreferrer"
          >
            <video
              src={servicesVideo}
              loop
              autoPlay
              muted
              type="video/mp4"
              playsInline
              className="rounded-lg shadow-xl shadow-black h-[400px] lg:h-[500px]"
            ></video>
          </a>
        </div>
      </div>
    </PageSection>
  );
};

export default Services;
