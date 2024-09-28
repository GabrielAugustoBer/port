import { Separator } from "@/components/ui/separator"
import { useLanguage } from "@/context/LanguageContext" // Importando o contexto de idioma

export function ContactMe() {
  const { language } = useLanguage() // Usando o contexto de idioma

  // Definindo textos para os idiomas
  const texts: Record<
    "en" | "pt",
    {
      title: string
      description: string
      emailLabel: string
      quote: string
      author: string
    }
  > = {
    en: {
      title: "Contact Me",
      description:
        "Feel free to reach out. Below you'll find my contacts. It will be a pleasure to exchange ideas with you!",
      emailLabel: "Email:",
      quote:
        "“Perfection is not attained when there is nothing more to add, but when there is nothing left to take away.”",
      author: "Antoine de Saint-Exupéry.",
    },
    pt: {
      title: "Contacte-me",
      description:
        "Sinta-se à vontade para entrar em contato. Abaixo, você encontrará meus contatos. Será um prazer trocar ideias com você!",
      emailLabel: "Email:",
      quote:
        "“A perfeição não é alcançada quando já não há mais nada para adicionar, mas quando já não há mais nada que se retirar.”",
      author: "Antoine de Saint-Exupéry.",
    },
  }

  // Garantindo que language seja um dos tipos aceitos
  const currentText = texts[language as "en" | "pt"]

  return (
    <>
      {/* Container principal para a seção de contato */}
      <div className="pt-[85px] bg-[#1E293B] grid justify-center pb-[40px]">
        {/* Título da seção */}
        <h1 className="font-bold text-[35px] text-white text-center">
          {currentText.title} {/* Usando o texto de acordo com o idioma */}
        </h1>

        {/* Separador */}
        <div className="flex justify-center">
          <Separator className="w-[198px] h-[6px] bg-[#7477FF]" />
        </div>

        {/* Descrição */}
        <p className="w-[568px] pt-[24px] text-center text-white">
          {currentText.description}{" "}
          {/* Usando o texto de acordo com o idioma */}
        </p>

        {/* Informações de contato */}
        <div className="flex justify-center">
          <h2 className="pt-[40px] text-white">
            <span className="font-bold pr-[22px]">
              {currentText.emailLabel}
            </span>
            gabriel.linobernardes@gmail.com
          </h2>
        </div>

        {/* Citação */}
        <p className="w-[568px] pt-[50px] text-center text-gray-300 italic">
          {currentText.quote} <br />{" "}
          {/* Usando <br /> para a quebra de linha */}
          <span className="font-bold not-italic text-white">
            {currentText.author} {/* Usando o texto de acordo com o idioma */}
          </span>
        </p>
      </div>
    </>
  )
}
