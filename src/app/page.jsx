import About from "@/components/page-comp/home/about";
import Contact from "@/components/page-comp/home/contact";
import Skills from "@/components/page-comp/home/skills";
import WorkProccess from "@/components/page-comp/home/work-proccess";
import React from "react";


const Home = () => {
  return (
    <div>

      <Skills />
      <About />
      <WorkProccess />
      <Contact />

    </div>
  );
};

export default Home;