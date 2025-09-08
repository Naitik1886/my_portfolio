export default function Work({
  name = "guest",
  src = "/vite.svg",
  desc = "something",
  url = "/",
  mob = "/vite.svg",
}) {
  return (
    <div className="flex flex-col items-center  justify-center sm:mt-15 md:mt-20 md:mb-15">
      <div
        style={{
          background: "linear-gradient(to right, #8b5cf6, #ec4899, #fb923c)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          display: "inline-block",
        }}
        className="font-semibold flex items-center text-center text-5xl"
      >
        {name}
      </div>
      <div className="vide-container hidden sm:flex  sm:w-100 sm:h-120 text-center justify-evenly items-center md:w-128 md:h-120  lg:w-160 lg:h-120   xl:w-240 xl:h-120 ">
        <video
          preload="metadata"
          className="sm:w-72  sm:h-60 md:w-80 md:h-60 lg:w-96 lg:h-72 xl:w-xl xl:h-96"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={src} type="video/mp4" />
        </video>

        <span className="text-xl ">
          {desc}
          <br />
          <a
            style={{
              background:
                "linear-gradient(to right, #8b5cf6, #ec4899, #fb923c)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              display: "inline-block",
            }}
            className="rounded-xl mt-2 px-5 py-1 border text-md"
            href={url}
          >
            Visit {name}
          </a>
        </span>
      </div>
      <div className="w-60 h-180 mt-5 text-center items-center sm:hidden">
        <video
          preload="metadata"
          className="w-60  h-100 mb-9"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={mob} type="video/mp4" />
        </video>
        <span className="text-md  ">
          {desc}
          <br />
          <a
            style={{
              background:
                "linear-gradient(to right, #8b5cf6, #ec4899, #fb923c)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              display: "inline-block",
            }}
            className="rounded-xl mt-2 px-5 py-1 border text-md"
            href={url}
          >
            Visit {name}
          </a>
        </span>{" "}
      </div>
    </div>
  );
}
