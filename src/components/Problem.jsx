import React from "react";


import PageSection from "@/components/PageSection";

const Problem = () => {
  
  return (
    
    <PageSection
      name="Problematica"
      title="Problematica"
      
    >

        <div className="grid gap-12 md:px-12 grid-cols-1  ">
          
          <div className="rounded-lg shadow-lg shadow-[#3db2de] flex items-center flex-col justify-center gap-30  ">
            <div className="my-10">
              
              <p className="mt-10  text-sm md:text-lg md:mx-10 mx-2 ">
              La gestión financiera personal es un aspecto crucial de nuestra vida cotidiana. El manejo adecuado de nuestros ingresos y gastos puede tener un impacto significativo en nuestra calidad de vida, nuestra capacidad para cumplir metas financieras y, en última instancia, nuestra salud financiera general. 
              </p>
              <p className="mt-10  text-sm md:text-lg md:mx-10 mx-2 ">
              Sin embargo, muchas personas no tienen un control efectivo de sus finanzas personales, lo que puede resultar en problemas financieros. 
              </p>
              <p className="mt-10  text-sm md:text-lg md:mx-10 mx-2 ">
              En este proyecto de investigación formativa, se analizará por qué es importante llevar un control de nuestros ingresos mensuales, nuestros gastos, y cómo hacerlo de manera efectiva implementando un prototipo de aplicación de gestión de finanzas.
              </p>
              
            </div>
            
          </div>
        </div>
       
        </PageSection>
  );
};

export default Problem;
