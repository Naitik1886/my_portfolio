import { Menu } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Navbar() {
  const [menu , setMenu] = useState("about")
  const [open , setOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  const menuRef = useRef(null)
  const buttonRef = useRef(null)


// Detect click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target) && buttonRef.current && !buttonRef.current.contains(event.target)) {
        setOpenMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="w-full flex  justify-around ">
          <img className="w-20 flex justify-center items-center content-center sm:w-24  md:w-26 " src="/logo.png" alt="" />
        <ul className="hidden sm:flex items-center justify-evenly w-full max-w-[600px] sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px]">
          <li className="list-none cursor-pointer text-xs md:text-base"><AnchorLink  href="#about"><p  onClick={() => setMenu("about")}>About</p></AnchorLink>{menu === "about" ? <img src="/under.svg"/> : <></>}</li>
          <li className="list-none cursor-pointer text-xs md:text-base"><AnchorLink  href="#project"><p onClick={() => setMenu("project")} >Projects</p></AnchorLink>{menu === "project" ? <img src="/under.svg"/> : <></>}</li>
          <li className="list-none cursor-pointer text-xs md:text-base"><AnchorLink  href="#minor"><p onClick={() => setMenu("minor")} >Minor Projects</p></AnchorLink>{menu === "minor" ? <img src="/under.svg"/> : <></>}</li>
          <li className="list-none cursor-pointer text-xs md:text-base"><AnchorLink href="#contact"><p onClick={() => setMenu("contact")}>Contact</p></AnchorLink>{menu === "contact" ? <img src="/under.svg"/> : <></>}</li>
          
        </ul>
        <button onClick={() => setOpen(true)} className="px-2 py-2 cursor-pointer sm:px-3 sm:py-2 md:px-4 md:py-2 rounded-xl border text-xs sm:text-sm md:text-base">
          <span  style={{
              background: 'linear-gradient(to right, #8b5cf6, #ec4899, #fb923c)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              display: 'inline-block'
            }} className="inline">Connect With Me </span>
        </button>
       {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
          <div className="bg-zinc-900 text-white p-6 rounded-2xl shadow-2xl w-80 border border-purple-500/30">
            <h2 className="text-xl font-bold mb-4 text-center ">
              Let’s Connect 🚀
            </h2>

            <div className="grid gap-3">
              <a
                href="https://www.linkedin.com/in/naitik-srivastava0/"
                target="_blank"
                className="px-4 py-2 bg-blue-600 rounded-lg text-center hover:bg-blue-700 transition"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Naitik1886"
                target="_blank"
                className="px-4 py-2 bg-gray-800 rounded-lg text-center hover:bg-gray-700 transition"
              >
                GitHub
              </a>
             
              <a
                href="https://www.instagram.com/naitik_.srivastava"
                target="_blank"
                className="px-4 py-2 bg-orange-600 rounded-lg text-center hover:bg-orange-700 transition"
              >
                Instagram
              </a>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="mt-6 w-full px-4 py-2 bg-purple-500/20 border border-purple-500/40 rounded-lg hover:bg-purple-500/30 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
      <button ref={buttonRef}  onClick={() => setOpenMenu(!openMenu)} className="sm:hidden">
        <Menu/>
      </button>
      {openMenu && (
        <div ref={menuRef} className="w-36 right-0 top-14  absolute pl-2 py-2 flex flex-col gap-2  rounded-2xl bg-zinc-800 text-white">
             <ul className="flex flex-col  ">
               <li className="list-none cursor-pointer text-lg md:text-base"><AnchorLink onClick={()=> setOpenMenu(false)} href="#about"><p  onClick={() => setMenu("about")}>About</p></AnchorLink>{menu === "about" ? <img src="/under.svg"/> : <></>}</li>
          <li  className="list-none cursor-pointer text-lg md:text-base"><AnchorLink  onClick={()=> setOpenMenu(false)}  href="#project"><p onClick={() => setMenu("project")} >Projects</p></AnchorLink>{menu === "project" ? <img src="/under.svg"/> : <></>}</li>
          <li className="list-none cursor-pointer text-lg md:text-base"><AnchorLink  onClick={()=> setOpenMenu(false)} href="#minor"><p onClick={() => setMenu("minor")} >Minor Projects</p></AnchorLink>{menu === "minor" ? <img src="/under.svg"/> : <></>}</li>
          <li className="list-none cursor-pointer text-lg md:text-base"><AnchorLink  onClick={()=> setOpenMenu(false)} href="#contact"><p onClick={() => setMenu("contact")}>Contact</p></AnchorLink>{menu === "contact" ? <img src="/under.svg"/> : <></>}</li>
          

             </ul>
        </div>
      )}
      </div>
    </>
  );
}