// LanguageContext.tsx
import { createContext, useContext, useState, useEffect } from "react"

// Definindo os tipos para o contexto
interface LanguageContextType {
  language: string
  changeLanguage: (lang: string) => void
}

// Criando o contexto
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
)

// Componente Provider para gerenciar o idioma
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState("en") // idioma padrão

  // Persistência do idioma no localStorage
  useEffect(() => {
    const storedLanguage = localStorage.getItem("language")
    if (storedLanguage) {
      setLanguage(storedLanguage)
    }
  }, [])

  const changeLanguage = (lang: string) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

// Hook para acessar o contexto do idioma
export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
