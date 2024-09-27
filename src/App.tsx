import  { AboutMe }  from "@/components/page/aboutMe"
import { Projects } from "@/components/page/projects"
import { ContactMe } from "@/components/page/contactMe"
import { Footer } from "@/components/page/footer"

export function App() {
  return (
    <>
      <div className="bg-[#0F172A]">
        <div className="flex justify-center scroll-smooth">
          <ul className="pt-[40px] flex gap-[46px] text-white">
            <a href="#aboutMe">
              <li>About</li>
            </a>
            <a href="#projects">
              <li>Projects</li>
            </a>
            <a href="">
              <li>Contact</li>
            </a>
          </ul>
        </div>
      </div>
      <div className="bg-[#0F172A] pb-[130px] pt-[100px]">
        <div className="ml-[100px]">
          <div className="text-[75px] leading-[100px]">
            <h1 className="text-white font-pacifico tracking-wide">
              Hi,
              <br />I am <span className="text-[#7477FF]">G</span>abriel,
              <br />
              Web developer
            </h1>
          </div>
          <h2 className="text-[16px] pt-[40px] text-[#CCCCCC] pb-[20px]">
            Frontend Developer, Profficienct in React & Node
          </h2>
          <button
            type="button"
            className="font-poppins bg-[#7477FF] w-[210px] h-[60px] rounded-[5px] text-center text-white"
          >
            See projects
          </button>
        </div>
      </div>
      <AboutMe />
      <Projects />
      <ContactMe />
      <Footer />
    </>
  )
}

