import { useEffect } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import ParticlesBackground from "./components/ParticlesBackground";

function App() {
  useEffect(() => {
    // Initialize tippy after component mounts
    window.tippy("[data-tippy-content]", {
      theme: "transparent",
      placement: "top",
      arrow: false,
      animation: "scale",
      delay: [200, 50],
    });
  }, []);
  
  return (
    <>
    <ParticlesBackground/>
      
      <div className="relative min-h-screen bg-black text-white overflow-hidden" >
   


        <div className="w-full flex flex-col items-center pb-10 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 justify-around py-3 relative ">
          <Navbar />
          <About />
          <div id="project" className="relative mt-30 mb-5 p-8 ">
            <h1 className="text-4xl  font-semibold ">My Latest Projects</h1>
            <img
              className="absolute w-20 h-8 right-0 bottom-0 "
              src="/pattern.svg"
              alt="pattern"
            />
          </div>
          <Work
            name="Prep.ai"
            src="/lap1.mp4"
            desc="A full-stack AI-powered interview preparation platform named Prep.ai, with real-time feedback it creates an interactive environment that mirrors real interviews."
            url="https://preppy-ai.web.app/"
            mob="/prep.mp4"
          />
          <Work
            name="Text.io"
            src="/lap2.mp4"
            desc=" A Full-Stack Chat Application named Text.io, featuring
        real-time messaging and 32 different themes to enhance user
        experience."
            url="https://text-io-frontend.vercel.app/"
            mob="/text.mp4"
          />
          <div id="minor" className="relative mt-30 mb-5 p-8 ">
            <h1 className="text-5xl  font-semibold ">Minor Projects</h1>
            <img
              className="absolute w-20 h-8 right-0 bottom-0 "
              src="/pattern.svg"
              alt="pattern"
            />
          </div>
          <Work
            name="iReviewer"
            src="/lap3.mp4"
            desc="A React-based AI code review platform named iReviewer powered by the Gemini API, helps developers to instantly optimize their code."
            url="https://i-code-reviewer.vercel.app/"
            mob="/rev.mp4"
          />
          <Work
            name="iShort"
            src="/lap4.mp4"
            desc="A full-stack URL shortener named iShort that lets you create clean, shareable short links with ease. Built for speed and reliability"
            url="https://xit-be.vercel.app/"
            mob="/short.mp4"
          />
          <Work
            name="iTask"
            src="/lap5.mp4"
            desc="A simple and efficient React-based To-Do List named iTask to organize tasks, manage priorities, and boost productivity with an easy-to-use interface."
            url="https://i-task-lilac.vercel.app/"
            mob="/task.mp4"
          />
          <div id="contact" className="relative mt-30 mb-5 p-8 ">
            <h1 className="text-5xl  font-semibold ">Get In Touch</h1>
            <img
              className="absolute w-20 h-8 right-0 bottom-0 "
              src="/pattern.svg"
              alt="pattern"
            />
          </div>
          <Contact />
        </div>
      </div>
    </>
  );
}
export default App;
