import React from "react";

const PageSection = ({ name, title, subtitle, children }) => {
  return (
    <div>
      <h1 className="text-black pb-32" name={name}>
        .
      </h1>
      <div className="max-w-screen-xl mx-auto h-fit">
        <div className="my-20 mx-8 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl text-center mb-10 text-[#173557]">{title}</h1>
          <p className="my-8">{subtitle}</p>
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageSection;
