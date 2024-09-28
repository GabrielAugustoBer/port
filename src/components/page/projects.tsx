import { Separator } from "@/components/ui/separator"
import { useLanguage } from "@/context/LanguageContext" // Importando o contexto de idioma

export function Projects() {
  const { language } = useLanguage() // Usando o contexto de idioma

  // Definindo textos para os idiomas
  const texts: Record<
    "en" | "pt",
    {
      title: string
      description: string
      technologiesTitle: string
    }
  > = {
    en: {
      title: "Projects",
      description:
        "Here you’ll find a selection of projects I’ve developed; each one represents an opportunity for learning and creativity.",
      technologiesTitle: "Technologies I’ve Worked With:",
    },
    pt: {
      title: "Projetos",
      description:
        "Aqui você encontrará uma seleção de projetos que desenvolvi, cada um representa uma oportunidade de aprendizado e criatividade.",
      technologiesTitle: "Tecnologias com as quais trabalhei:",
    },
  }

  // Garantindo que language seja um dos tipos aceitos
  const currentText = texts[language as "en" | "pt"]

  return (
    <>
      {/* Container principal da seção de Projetos */}
      <div className="bg-[#0F172A]" id="projects">
        {/* Margem à esquerda para conteúdo */}
        <div className="ml-[100px]">
          {/* Título da seção */}
          <h1 className="pt-[96px] font-bold text-[35px] text-white">
            {currentText.title} {/* Usando o texto de acordo com o idioma */}
          </h1>
          {/* Separador abaixo do título */}
          <Separator className="w-[162px] h-[6px] bg-[#7477FF]" />
          {/* Descrição dos projetos */}
          <p className="pt-[49px] text-white w-[584px] text-[16px] pb-[217px]">
            {currentText.description}{" "}
            {/* Usando o texto de acordo com o idioma */}
          </p>
        </div>
      </div>
    </>
  )
}
