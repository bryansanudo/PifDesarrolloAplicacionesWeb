import React from "react";


import PageSection from "@/components/PageSection";

const Objetives = () => {
  
  return (
    
    <PageSection
      name="servicios"
      title="Objetivos"
      
    >

        <div className="grid gap-12 md:px-12 grid-cols-1  ">
          
          <div className="rounded-lg shadow-lg shadow-[#3db2de] flex items-center flex-col justify-center gap-30  ">
            <div className="my-10">
              
              
              <p className="mt-10  text-sm md:text-lg md:mx-10 mx-2 ">
              General: Desarrollar un prototipo de aplicación que permita la gestión financiera personal.  

              </p>
              <p className="mt-10  text-sm md:text-lg md:mx-10 mx-2 ">
              Identificar las necesidades y preferencias de los usuarios de aplicaciones de gestión financiera personal.

              </p>
              <p className="mt-10  text-sm md:text-lg md:mx-10 mx-2 ">
             Diseñar una interfaz efectiva que permita a los usuarios llevar un registro de sus ingresos y gastos.
              </p>
              <p className="mt-10  text-sm md:text-lg md:mx-10 mx-2 ">
                Implementar estrategias efectivas para ayudar a los usuarios a establecer objetivos financieros, crear planes de ahorro y presupuestos.
              </p>
              <p className="mt-10  text-sm md:text-lg md:mx-10 mx-2 ">
                Integrar medidas de seguridad para garantizar la privacidad y protección de los datos de los usuarios.
              </p>
            </div>
            
          </div>
        </div>
       
        </PageSection>
  );
};

export default Objetives;
