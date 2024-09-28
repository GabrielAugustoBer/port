import { useLanguage } from "@/context/LanguageContext"

export function NavBar() {
  const { changeLanguage, language } = useLanguage()

  // Função para alternar entre "en" e "pt"
  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "pt" : "en"
    changeLanguage(newLanguage)
  }

  return (
    <div className="bg-[#0F172A] fixed top-0 left-0 w-full z-50">
      <div className="flex justify-center items-center scroll-smooth">
        <ul className="pt-[20px] pb-[20px] flex gap-[46px] text-white items-center">
          <li>
            <a href="#aboutMe">{language === "en" ? "About" : "Sobre"}</a>
          </li>
          <li>
            <a href="#projects">
              {language === "en" ? "Projects" : "Projetos"}
            </a>
          </li>
          <li>
            <a href="#contact">{language === "en" ? "Contact" : "Contato"}</a>
          </li>
          {/* Botão menor e centralizado */}
          <li>
            <button
              type="button"
              onClick={toggleLanguage}
              className="text-white bg-blue-500 hover:bg-blue-700 px-2 py-1 rounded text-sm"
            >
              {language === "en" ? "PT" : "EN"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}
