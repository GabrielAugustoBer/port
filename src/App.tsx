import { LanguageProvider } from "@/context/LanguageContext"
import { NavBar } from "./components/page/navbar"
import { Home } from "@/components/page/home"
import { AboutMe } from "@/components/page/aboutMe"
import { Projects } from "@/components/page/projects"
import { ContactMe } from "@/components/page/contactMe"
import { Footer } from "@/components/page/footer"

export function App() {
  return (
    <>
      <LanguageProvider>
        <NavBar />
        <Home />
        <AboutMe />
        <Projects />
        <ContactMe />
        <Footer />
      </LanguageProvider>
    </>
  )
}
