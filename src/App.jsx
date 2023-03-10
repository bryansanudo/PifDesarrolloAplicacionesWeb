import { useState } from "react";

import Navbar from "@/components/Navbar";

import Services from "@/components/Services";


import Problem from '@/components/Problem'
import ProblemDescription from '@/components/ProblemDescription'
import Justify from '@/components/Justify'
import Objetives from '@/components/Objetives'
import StateArt from '@/components/StateArt'

function App() {
  const [isMenuShown, setIsMenuShown] = useState(false);
  return (
    <>
      <Navbar isMenuShown={isMenuShown} setIsMenuShown={setIsMenuShown} />
      
      <Services />
      <Problem />
      <ProblemDescription />
      <Justify />
      <Objetives />
      <StateArt />
      
      
    </>
  );
}

export default App;
