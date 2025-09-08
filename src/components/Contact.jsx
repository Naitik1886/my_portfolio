import { CircleCheck, Mail, MessageCircle, User } from "lucide-react";
import { useState } from "react";
import { useForm } from "@formspree/react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mess, setMess] = useState("");
  const [state, onSubmit] = useForm("xkgvkozr");
  if (state.succeeded) {
    return (
      <p className="flex gap-2 text-xl items-center justify-center">
        <span className="">
          <CircleCheck />
        </span>
        Mesaage Sent Successfully
      </p>
    );
  }

  return (
    <div className=" mt-10 bg-transparent  md:w-[700px]">
      <form onSubmit={onSubmit} method="POST">
        <div className=" rounded-2xl shadow-xl  p-8   ">
          <div className="space-y-6">
            <div className="space-y-4">
              <label className="block text-xs font-medium mb-2">
                Enter Your Name
              </label>
              <div className="flex items-center  border border-gray-200 rounded-xl p-4 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all">
                <User className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  name="name"
                  placeholder="Jethalal Champaklal Gada..."
                  className="flex-1 bg-transparent border-none outline-none  placeholder-gray-500"
                />
              </div>
            </div>

            <div className="space-y-4">
              <label className="block text-xs font-medium  mb-2">Email</label>
              <div className="flex items-center  border border-gray-200 rounded-xl p-4 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all">
                <Mail className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  name="email"
                  placeholder="jethiya@gmail.com"
                  className="flex-1  bg-transparent border-none outline-none  placeholder-gray-500"
                />
              </div>
            </div>

            <div className="space-y-4">
              <label className="block text-xs font-medium  mb-2">Message</label>
              <div className="flex items-start  border border-gray-200 rounded-xl p-4  focus-within:ring-2 focus-within:ring-blue-200 transition-all">
                <MessageCircle className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0 mt-1" />
                <textarea
                  onChange={(e) => setMess(e.target.value)}
                  value={mess}
                  name="message"
                  placeholder="Your message..."
                  rows="4"
                  className="flex-1  border-none outline-none  placeholder-gray-500 resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              style={{
                background:
                  "linear-gradient(to right, #8b5cf6, #ec4899, #fb923c)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                display: "inline-block",
              }}
              className=" border-1 flex items-center justify-center w-full text-white  font-semibold py-2 px-4 rounded-xl  transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
