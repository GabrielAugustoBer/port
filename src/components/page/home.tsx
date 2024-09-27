import { useState, useEffect } from "react"
import Modal from "./modal"

export function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

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

  return (
    <>
      <div className="bg-[#0F172A] pb-[130px] pt-[100px]">
        <div className="ml-[100px]">
          <div className="text-[75px] leading-[100px]">
            <h1 className="text-white font-pacifico tracking-wide">
              Hi,
              <br />I am <span className="text-[#7477FF]">G</span>abriel,
              <br />
              &lt;Web developer /&gt;
            </h1>
          </div>
          <h2 className="text-[16px] pt-[40px] text-[#CCCCCC] pb-[20px]">
            Frontend Developer, Proficient in React & Node
          </h2>
          <div className="flex gap-[20px]">
            <button
              type="button"
              className="font-poppins bg-[#7477FF] w-[210px] h-[60px] rounded-[5px] text-center text-white"
            >
              See projects
            </button>
            <button
              type="button"
              onClick={handleDownloadClick}
              className="font-poppins w-[210px] h-[60px] rounded-[5px] 
                text-center text-white border-solid border-2 border-[#7477FF]
                transition ease-in-out delay-150 hover:bg-[#7477FF] duration-300"
            >
              Download CV
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
