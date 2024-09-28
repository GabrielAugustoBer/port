import { Separator } from "@/components/ui/separator"
import { useLanguage } from "@/context/LanguageContext" // Importando o contexto

export function AboutMe() {
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
      title: "About Me",
      description:
        "I am 19 years old, passionate about technology and focused on web development. I completed a technical course in Administrative Management, which gave me a solid foundation in organization and project management. Currently, I am dedicated to improving my skills as a web developer, seeking innovative solutions to digital challenges. I am always learning and ready to face new challenges. I believe that technology can transform the future, and I want to contribute to that. I am open to collaborating with companies and professionals who share this vision.",
      technologiesTitle: "Technologies I’ve Worked With:",
    },
    pt: {
      title: "Sobre Mim",
      description:
        "Tenho 19 anos, sou apaixonado por tecnologia e focado em desenvolvimento web. Concluí um curso técnico em Gestão Administrativa, que me deu uma base sólida em organização e gestão de projetos. Atualmente, estou dedicado a melhorar minhas habilidades como desenvolvedor web, buscando soluções inovadoras para desafios digitais. Estou sempre aprendendo e disposto a enfrentar novos desafios. Acredito que a tecnologia pode transformar o futuro e quero contribuir para isso. Estou à disposição para colaborar com empresas e profissionais que compartilham essa visão.",
      technologiesTitle: "Tecnologias com as quais trabalhei:",
    },
  }

  return (
    <div className="bg-[#1E293B]" id="aboutMe">
      <div className="ml-[100px]">
        {/* Título da seção */}
        <h1 className="pt-[96px] font-bold text-[35px] text-white">
          {texts[language as keyof typeof texts].title}
          {/* Usando o texto de acordo com o idioma */}
        </h1>

        {/* Separador */}
        <Separator className="w-[162px] h-[6px] bg-[#7477FF]" />

        {/* Descrição pessoal */}
        <p className="pt-[49px] text-white w-[584px] text-[16px]">
          {texts[language as keyof typeof texts].description}
          {/* Usando o texto de acordo com o idioma */}
        </p>

        {/* Título para as tecnologias */}
        <h2 className="pt-[33px] font-bold text-white">
          {texts[language as keyof typeof texts].technologiesTitle}
          {/* Usando o texto de acordo com o idioma */}
        </h2>

        {/* Ícones das tecnologias */}
        <div className="pt-5 flex gap-4 pb-[130px]">
          <div className="text-[#fcba03] transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 duration-300">
            <ion-icon name="logo-html5" size="large"></ion-icon>
          </div>
          <div className="text-[#4287f5] transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 duration-300">
            <ion-icon name="logo-css3" size="large"></ion-icon>
          </div>
          <div className="text-[#F7E018] transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 duration-300">
            <ion-icon name="logo-javascript" size="large"></ion-icon>
          </div>
          <div className="text-[#417E38] transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 duration-300">
            <ion-icon name="logo-nodejs" size="large"></ion-icon>
          </div>
          <div className="text-[#61DBFB] transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 duration-300">
            <ion-icon name="logo-react" size="large"></ion-icon>
          </div>
        </div>
      </div>
    </div>
  )
}
