import React from "react";


import PageSection from "@/components/PageSection";

const Justify = () => {
  
  return (
    
    <PageSection
      name="Justificacion"
      title="Justificacion "
      
    >

        <div className="grid gap-12 md:px-12 grid-cols-1  ">
          
          <div className="rounded-lg shadow-lg shadow-[#3db2de] flex items-center flex-col justify-center gap-30  ">
            <div className="my-10">
              
              <p className="mt-10  text-sm md:text-lg md:mx-10 mx-2 ">
              El control de ingresos y gastos es fundamental para mantener una buena salud financiera personal.
              </p>
              <p className="mt-10  text-sm md:text-lg md:mx-10 mx-2 ">
              Llevar un registro de nuestros ingresos mensuales y gastos nos permite tener una mejor comprensión de nuestras finanzas y tomar decisiones informadas sobre cómo gastar nuestro dinero.
              </p>
              <p className="mt-10  text-sm md:text-lg md:mx-10 mx-2 ">
              Además, nos ayuda a identificar patrones de gastos y áreas en las que podemos ahorrar dinero. Si no llevamos un control adecuado de nuestros ingresos y gastos, es fácil perder de vista nuestras finanzas y gastar más de lo que podemos permitirnos, lo que puede resultar en deudas y estrés financiero.
              </p>
              
            </div>
            
          </div>
        </div>
       
        </PageSection>
  );
};

export default Justify;
