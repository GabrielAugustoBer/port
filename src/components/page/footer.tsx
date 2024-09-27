import copy from "@/assets/copyright.svg"

export function Footer() {
  return (
    <>
      {/* Container principal do Footer */}
      <div className="bg-[#0F172A]">
        {/* Espaçamento e estrutura do conteúdo */}
        <div className="pt-[40px] pb-[40px] ml-[50px] flex">
          <div className="flex gap-[4px]">
            {/* Ícone de copyright */}
            <img src={copy} alt="copyright" />

            {/* Texto do copyright */}
            <h2 className="text-white">
              2024 Gabriel Augusto all rights reserved
            </h2>
          </div>
        </div>
      </div>
    </>
  )
}
