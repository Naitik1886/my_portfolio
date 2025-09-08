import { Tooltip } from "./Tooltip";

export default function About() {
  return (
    <div id="about" className="flex flex-col items-center justify-center mt-5 mb-20">
      <img className="rounded-full border mt-20 w-60 h-60" src="/photome.jpeg" alt="profile" />

      <h1 className="text-center w-full max-w-[500px] mt-4 text-4xl ">
        <span
          style={{
            background: "linear-gradient(to right, #8b5cf6, #ec4899, #fb923c)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            display: "inline-block",
          }}
        >
          I'm Naitik Srivastava,
        </span>
        <span className=""> A MERN Stack Web Developer</span>
      </h1>
      <Tooltip />
      <a href="/NaitikResume.pdf" download>
      <button 
        style={{
          background: "linear-gradient(to right, #8b5cf6, #ec4899, #fb923c)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          display: "inline-block",
        }}
        className=" border border-white flex justify-center text-center cursor-pointer mt-5 text-zinc-900 text-lg rounded-xl items-center px-4 py-2 l"
      >
        My resume
      </button>
      </a>
      <div className="mt-12">
      </div>
    </div>
  );
}
