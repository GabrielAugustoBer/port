import { Separator } from "@/components/ui/separator"

export function Projects() {
  return (
    <>
      {/* Container principal da seção de Projetos */}
      <div className="bg-[#0F172A]" id="projects">
        {/* Margem à esquerda para conteúdo */}
        <div className="ml-[100px]">
          {/* Título da seção */}
          <h1 className="pt-[96px] font-bold text-[35px] text-white">
            Projects
          </h1>
          {/* Separador abaixo do título */}
          <Separator className="w-[162px] h-[6px] bg-[#7477FF]" />
          {/* Descrição dos projetos */}
          <p className="pt-[49px] text-white w-[584px] text-[16px] pb-[217px]">
            Here you’ll find a selection of projects I’ve developed, reflecting
            my passion for innovative solutions in web design and technology.
            Each one represents an opportunity for learning and creativity.
          </p>
        </div>
      </div>
    </>
  )
}
