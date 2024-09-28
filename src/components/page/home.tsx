import { useState, useEffect } from "react"
import Modal from "./modal"
import { useLanguage } from "@/context/LanguageContext" // Importando o contexto

type Language = "en" | "pt" // Definindo o tipo para os idiomas

export function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { language } = useLanguage() as { language: Language } // Usando o contexto de idioma com o tipo definido
  const [showCursor, setShowCursor] = useState(true) // Estado para controlar a visibilidade do cursor

  // Definindo textos para os idiomas
  const texts: Record<
    Language,
    {
      greeting: JSX.Element // Alterado para JSX.Element
      subtitle: string
      seeProjects: string
      downloadCV: string
      confirmDownload: string
    }
  > = {
    en: {
      greeting: (
        <>
          Hi,
          <br />I am Gabriel,
          <br />
          <span>&lt;Web developer /&gt;</span>
        </>
      ),
      subtitle: "Frontend Developer, Proficient in React & Node",
      seeProjects: "See projects",
      downloadCV: "Download CV",
      confirmDownload: "Do you want to download your CV?",
    },
    pt: {
      greeting: (
        <>
          Olá,
          <br />
          Eu sou Gabriel,
          <br />
          <span>&lt;Desenvolvedor web /&gt;</span>
        </>
      ),
      subtitle: "Desenvolvedor Frontend, Proficiente em React e Node",
      seeProjects: "Ver projetos",
      downloadCV: "Baixar CV",
      confirmDownload: "Você deseja baixar o seu CV?",
    },
  }

  // Função para abrir o modal
  const handleDownloadClick = () => {
    setIsModalOpen(true)
  }

  // Função para confirmar o download
  const handleConfirmDownload = () => {
    const url = "/path/to/cv.pdf" // Substitua pelo caminho correto do CV
    const link = document.createElement("a")
    link.href = url
    link.setAttribute("download", "meu-cv.pdf") // Nome do arquivo
    document.body.appendChild(link)
    link.click()
    link.remove()

    // Fecha o modal após o download
    setIsModalOpen(false)
  }

  // Efeito para adicionar/remover a classe no body
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden" // Desabilita o scroll
    } else {
      document.body.style.overflow = "unset" // Habilita o scroll
    }
  }, [isModalOpen])

  // Efeito para controlar a visibilidade do cursor
  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowCursor(prev => !prev) // Alterna a visibilidade do cursor
    }, 500) // Altera a cada 500ms

    return () => clearInterval(intervalId) // Limpa o intervalo ao desmontar
  }, [])

  return (
    <>
      <div className="bg-[#0F172A] pb-[130px] pt-[100px]">
        <div className="ml-[100px]">
          <div className="text-[50px] leading-[60px]">
            {" "}
            {/* Diminuído o tamanho do texto */}
            <h1 className="text-white font-poppins tracking-wide">
              {texts[language].greeting}
              {showCursor && <span className="text-white">|</span>}{" "}
              {/* Cursor */}
            </h1>
          </div>
          <h2 className="text-[16px] pt-[40px] text-[#CCCCCC] pb-[20px] font-poppins">
            {texts[language].subtitle}
          </h2>
          <div className="flex gap-[20px]">
            <button
              type="button"
              className="font-poppins bg-[#7477FF] w-[210px] h-[60px] rounded-[5px] text-center text-white"
            >
              {texts[language].seeProjects}
            </button>
            <button
              type="button"
              onClick={handleDownloadClick}
              className="font-poppins w-[210px] h-[60px] rounded-[5px] 
                text-center text-white border-solid border-2 border-[#7477FF]
                transition ease-in-out delay-150 hover:bg-[#7477FF] duration-300"
            >
              {texts[language].downloadCV}
            </button>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmDownload}
      />
    </>
  )
}
