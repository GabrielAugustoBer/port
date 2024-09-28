import copy from "@/assets/copyright.svg"
import { useLanguage } from "@/context/LanguageContext" // Importando o contexto

export function Footer() {
  const { language } = useLanguage() // Usando o contexto de idioma

  // Definindo textos para os idiomas
  const texts: Record<"en" | "pt", { copyright: string }> = {
    en: {
      copyright: "2024 Gabriel Augusto all rights reserved",
    },
    pt: {
      copyright: "2024 Gabriel Augusto todos os direitos reservados",
    },
  }

  return (
    <div className="bg-[#0F172A]">
      <div className="pt-[40px] pb-[40px] ml-[50px] flex">
        <div className="flex gap-[4px]">
          {/* Ícone de copyright */}
          <img src={copy} alt="copyright" />

          {/* Texto do copyright */}
          <h2 className="text-white">
            {texts[language as keyof typeof texts].copyright}
          </h2>
        </div>
      </div>
    </div>
  )
}
