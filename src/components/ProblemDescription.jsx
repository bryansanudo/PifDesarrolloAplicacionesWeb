import React from "react";


import PageSection from "@/components/PageSection";

const ProblemDescription = () => {
  
  return (
    
    <PageSection
      name="Descripcion"
      title="Descripcion del problema "
      
    >

        <div className="grid gap-12 md:px-12 grid-cols-1  ">
          
          <div className="rounded-lg shadow-lg shadow-[#3db2de] flex items-center flex-col justify-center gap-30  ">
            <div className="my-10">
              
              <p className="mt-10  text-sm md:text-lg md:mx-10 mx-2 ">
              ¿Por qué es importante llevar un control de nuestros ingresos mensuales y nuestros gastos, y cómo podemos hacerlo de manera efectiva para mejorar la gestión financiera del usuario que utilice la aplicación?
              </p>
              
            </div>
            
          </div>
        </div>
       
        </PageSection>
  );
};

export default ProblemDescription;
